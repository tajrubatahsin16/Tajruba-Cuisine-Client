import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { AuthContext } from "../../providers/AuthProvider";
import './NavigationBar.css';

const NavigationBar = () => {

    //the current route that you're visiting will be bold than other route and it won't have any text-decoration
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.error(error));
    }
    return (
        // <Container>
        <Navbar bg="dark" variant="dark" className="pt-3 rounded">
            <Container className="nav align-items-center">
                <IoFastFoodSharp style={{ fontSize: "1.9rem" }} className="text-warning"></IoFastFoodSharp>
                <Navbar.Brand className="text-warning ms-1" href="/"><h2>Tajruba's Cuisine</h2></Navbar.Brand>
                <Nav className="flex-grow-1 align-items-center">
                    <nav className="mx-auto align-items-center">
                        <NavLink style={navLinkStyles} className="text-warning" to='/'>Home</NavLink>
                        <NavLink style={navLinkStyles} className="text-warning ps-3" to="/blog">Blog</NavLink>
                    </nav>
                    <Nav>
                        {
                            user ? <div>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{user.displayName}</Tooltip>}>
                                    <span className="d-inline-block">
                                        <img className="me-3 border-warning rounded" src={user.photoURL} alt="" width="50px" height="50px" />
                                    </span>
                                </OverlayTrigger>
                                <Button onClick={handleLogout} variant="warning">Logout</Button>
                            </div> :  <Link to={"/login"}><Button variant="warning">Login</Button></Link>
                        }
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
        // </Container>
    );
}
export default NavigationBar;