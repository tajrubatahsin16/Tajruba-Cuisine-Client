import React from "react";
import notFound from '../../assets/images/404.png';
import { Container } from "react-bootstrap";
 const NotFound = () => {
    return (
        <Container className="mx-auto w-25">
            <h1 className="text-center fst-italic text-warning">You've Come To A Wrong Route!</h1>
            <img className="mx-auto d-block rounded" style={{width: "220px", height: "220px"}} src={notFound} alt="" />
        </Container>
    );
 };

 export default NotFound;