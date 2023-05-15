import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";

const Chef = ({ eChef }) => {
    const { id, chefPic, chefName, chefExperience, noOfRecipes, likes } = eChef;

    return (
        <div>
            <Card className="bg-transparent border border-warning mt-3" style={{ width: '18rem' }}>
                <Card.Img className="border border-warning" variant="top" src={chefPic} style={{width: "286px", height: "200px"}} />
                <Card.Body className="text-warning">
                    <Card.Title className="fw-bold fs-3">{chefName}</Card.Title>
                    <Card.Text className="fst-italic">
                        Experience: {chefExperience}
                    </Card.Text>
                    <Card.Text className="fst-italic">
                        Recipes: {noOfRecipes}
                    </Card.Text>
                    <Card.Text className="fst-italic align-items-center">
                        <SlLike style={{ fontSize: "1rem" }}></SlLike> {likes}
                    </Card.Text>
                    <Link to={`/chef/${id}`}><Button className="text-light fw-bold fst-italic" variant="warning">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Chef;