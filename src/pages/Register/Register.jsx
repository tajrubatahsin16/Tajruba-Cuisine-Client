import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Please add at least 6 characters');
            return;
        }

        form.reset();

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setError('');
                event.target.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name, photo);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container className="w-50 my-5 mx-auto">
            <h2 className="text-warning fst-italic text-center">Please Register First!</h2>
            <Form onSubmit={handleRegister} className="text-warning border border-warning rounded p-4 fst-italic">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Your Photo" required />
                </Form.Group>
                <Button variant="warning" type="submit" className="text-light fw-bolder">
                    Register
                </Button>
                <br></br>
                <Form.Text className="text-warning">
                    Already have an account? <Link className="text-warning fst-italic fw-bolder" to='/login'>Login</Link>
                </Form.Text>
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

export default Register;