import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        // <Container className="bg-dark rounded">
        <div className="bg-dark rounded">
            <div className="footer d-flex mt-5 px-5 gap-5 py-3">
                <div className="text-warning">
                    <h3>Foodies Store!</h3>
                    <p className="fst-italic">Food... The phrase itself brings a flavor on your mouth. Well. there are folks that say that they're foodies. But, ever idea what does being foodie genuinely suggest? Does it most effective suggest ingesting meals? No, it is now no longer like that.The sensation on what that phrase makes you experience is what you name being foodie.</p>
                    <FaFacebook style={{ fontSize: "1.8rem" }} className="me-3"></FaFacebook> <FaTwitter style={{ fontSize: "1.8rem" }} className="me-3"></FaTwitter> <FaYoutube style={{ fontSize: "1.8rem" }}></FaYoutube>
                </div>
                <div>
                    <h4 className="text-warning">All rights reserved by Tajruba</h4>
                    <input className="border-warning bg-light rounded" type="email" name="email" placeholder="Enter your email" />
                    <Button className="btn-warning mt-3 rounded">Subscribe</Button>
                </div>
            </div>
        </div>
        // </Container>
    );
}

export default Footer;