import React, { useState } from "react";
import { Button, Card, Container, Toast } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { SlLike } from "react-icons/sl";

const Recipe = () => {
    const eRecipe = useLoaderData();
    console.log(eRecipe);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const { chefPic, chefName, chefBio, chefExperience, noOfRecipes, likes, recipes } = eRecipe;
    return (
        <div>
            <Container className="w-50 mx-auto mt-3 p-2 border border-warning rounded text-center text-warning">
                <img className="mx-auto d-block rounded" src={eRecipe[0].chefPic} style={{ width: "400px", height: "400px" }} alt="" />
                <h2 className="fw-bold fs-3">{eRecipe[0].chefName}</h2>
                <p className="fst-italic">{eRecipe[0].chefBio}</p>
                <SlLike style={{ fontSize: "1rem" }}></SlLike> {eRecipe[0].likes}
                <p className="fst-italic">No. of Recipes: {eRecipe[0].noOfRecipes}</p>
                <p className="fst-italic">Years Of Experience: {eRecipe[0].chefExperience}</p>
            </Container>
            <Container className="mt-4 d-flex gap-2">
                <Card className="bg-transparent border border-warning text-warning" style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">{eRecipe[0].recipes[0].rName}</Card.Title>
                        <h4>Ingredients: </h4>
                        <Card.Text className="fst-italic">
                            {eRecipe[0].recipes[0].rItems}
                        </Card.Text>
                        <h4>Cooking Method:</h4>
                        <Card.Text className="fst-italic">
                            {eRecipe[0].recipes[0].rMethod}
                        </Card.Text>
                        <Card.Text className="fst-italic">
                            Rating: {eRecipe[0].recipes[0].rRating}
                        </Card.Text>
                        <Button onClick={() => setShow(true)} className="text-light fw-bold fst-italic" disabled={show} variant="warning">Favourite</Button>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} >
                            <Toast.Header>
                                <strong className="me-auto">Congratulations!</strong>
                            </Toast.Header>
                            <Toast.Body>You've added this recipe as your favourite!</Toast.Body>
                        </Toast>
                    </Card.Body>
                </Card>
                <Card className="bg-transparent border border-warning text-warning" style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">{eRecipe[0].recipes[1].rName}</Card.Title>
                        <h4>Ingredients: </h4>
                        <Card.Text className="fst-italic">
                            {eRecipe[0].recipes[1].rItems}
                        </Card.Text>
                        <h4>Cooking Method:</h4>
                        <Card.Text className="fst-italic">
                            {eRecipe[0].recipes[1].rMethod}
                        </Card.Text>
                        <Card.Text className="fst-italic">
                            Rating: {eRecipe[0].recipes[1].rRating}
                        </Card.Text>
                        <Button onClick={() => setShow1(true)} className="text-light fw-bold fst-italic" disabled={show1} variant="warning">Favourite</Button>
                        <Toast onClose={() => setShow1(false)} show={show1} delay={3000} >
                            <Toast.Header>
                                <strong className="me-auto">Congratulations!</strong>
                            </Toast.Header>
                            <Toast.Body>You've added this recipe as your favourite!</Toast.Body>
                        </Toast>
                    </Card.Body>
                </Card>
                <Card className="bg-transparent border border-warning text-warning" style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">{eRecipe[0].recipes[2].rName}</Card.Title>
                        <h4>Ingredients: </h4>
                        <Card.Text className="fst-italic">
                            {eRecipe[0].recipes[2].rItems}
                        </Card.Text>
                        <h4>Cooking Method:</h4>
                        <Card.Text className="fst-italic">
                            {eRecipe[0].recipes[2].rMethod}
                        </Card.Text>
                        <Card.Text className="fst-italic">
                            Rating: {eRecipe[0].recipes[2].rRating}
                        </Card.Text>
                        <Button onClick={() => setShow2(true)} className="text-light fw-bold fst-italic" disabled={show2} variant="warning">Favourite</Button>
                        <Toast onClose={() => setShow2(false)} show={show2} delay={3000} >
                            <Toast.Header>
                                <strong className="me-auto">Congratulations!</strong>
                            </Toast.Header>
                            <Toast.Body>You've added this recipe as your favourite!</Toast.Body>
                        </Toast>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Recipe;