import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { user, signIn, googleLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLoginWithGithub = () => {
        googleLogin(githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLoginWithGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');
        form.reset();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
                setSuccess('User Login Successful');
                setError('');
            })
            .catch(error => {
                setError('password or email does not match');
            })
    }
    return (
        <Container className="w-50 my-5 mx-auto">
            <h2 className="text-warning fst-italic text-center">Login for your favorite food recipes</h2>
            <Form onSubmit={handleLogin} className="text-warning border border-warning rounded p-4 fst-italic">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="warning" type="submit" className="text-light fw-bolder">
                    Login
                </Button>
                <br />
                <Form.Text className="text-warning">
                    Don't have an account? <Link className="text-warning fst-italic fw-bolder" to='/register'>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-warning fst-italic fw-bolder">
                    OR
                </Form.Text>
                <div className="d-flex gap-3">
                    <Button onClick={handleLoginWithGoogle} variant="outline-warning" className="text-light fw-bolder">
                        Login with Google
                    </Button>
                    <Button onClick={handleLoginWithGithub} variant="outline-warning" className="text-light fw-bolder">
                        Login with GitHub
                    </Button>
                </div>
                <Form.Text className="text-danger fw-bold">
                    <p>{error}</p>
                </Form.Text>
                <Form.Text className="text-success fw-bold">
                    <p>{success}</p>
                </Form.Text>
            </Form>
        </Container>
    );
}

export default Login;