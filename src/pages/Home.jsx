import React, { useEffect, useState } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import pic1 from '../assets/images/c3.jpg';
import pic2 from '../assets/images/c2.jpg';
import pic3 from '../assets/images/c5.jpg';
import s1 from '../assets/images/google.png';
import s2 from '../assets/images/amazon.png';
import s3 from '../assets/images/telerama.png';
import Chef from "./Chef/Chef";
import './Home.css';

const Home = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-eta-five.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Carousel className="mt-3" fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                        height="580px"
                    />
                    <Carousel.Caption className="text-light">
                        <h3 className="fw-bold">Best Indian Food Recipes</h3>
                        <p className="fst-italic">Food (Sanskrit— bhojana,“that which is to be enjoyed,” Hindi— khana, Tamil— shapad) presents a way to understand everyday Indian culture as well as the complexities of identity and interaction with other parts of the world that are both veiled and visible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                        height="580px"
                    />

                    <Carousel.Caption className="text-light">
                        <h3 className="fw-bold">Best Recipes From Different States</h3>
                        <p className="fst-italic">In India today,with a growing economy due to liberalization and more consumption than ever in middle class life, food as something to be enjoyed and as part of Indian culture is a popular topic.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                        height="580px"
                    />

                    <Carousel.Caption className="text-light">
                        <h3 className="fw-bold">Indian cuisine never failed to make happy the Foodies!!</h3>
                        <p className="fst-italic">
                            Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2 className="text-warning text-center fs-1 mt-5 fw-bold">About Us</h2>
            <Container className="about d-flex gap-3 align-items-center justify-content-center mt-3">
                <Card className="bg-transparent border-warning" style={{ width: '20rem', height: '250px' }}>
                    <Card.Body className="text-warning text-center">
                        <Card.Title className="fw-bold fs-3">2 Years Of Journey</Card.Title>
                        <Card.Subtitle className="mb-2 fs-6">Authentic Indian Cuisine Recipes</Card.Subtitle>
                        <Card.Text className="fst-italic">
                            From the past two years we're providing authentic indian foods made by our world class chefs who are trained from india. Not only that but also providing food recipes directly from our trained chefs to our regular customers or followers!!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bg-transparent border-warning" style={{ width: '20rem', height: '250px' }}>
                    <Card.Body className="text-warning text-center">
                        <Card.Title className="fw-bold fs-3">2M+ Followers</Card.Title>
                        <Card.Subtitle className="mb-2 fs-6">Promoting delicious indian cuisine all over the world</Card.Subtitle>
                        <Card.Text className="fst-italic">
                            Our only is to make our foodie customers happy and inspiring those who are aspiring to ba a future chef with the authentic recipes of food.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="bg-transparent border-warning" style={{ width: '20rem', height: '250px' }}>
                    <Card.Body className="text-warning text-center">
                        <Card.Title className="fw-bold fs-3">Healthy & Clean</Card.Title>
                        <Card.Subtitle className="mb-2 fs-6">Ensuring the food quality with healthy recipe</Card.Subtitle>
                        <Card.Text className="fst-italic">
                            Our talented chefs make foods maintaining all the hygiene and in the clean environment. They also provide healthy recipes that is also safe for patients!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <h2 className="text-warning text-center fs-1 mt-5 fw-bold">Available Chefs</h2>
            <Container className="chefs mx-auto w-50">
                {
                    chef.map(eChef => <Chef key={eChef.id}
                        eChef={eChef}></Chef>)
                }
            </Container>
            <h2 className="text-warning text-center fs-1 mt-5 fw-bold">Our Sponsors</h2>
            <Container className="sponsors d-flex align-items-center justify-content-around mt-4 gap-5">
                <img className="border border-warning rounded p-3" src={s1} alt="" />
                <img className="border border-warning rounded p-3" src={s2} alt="" />
                <img className="border border-warning rounded p-3" src={s3} alt="" />
            </Container>
        </div>
    );
}

export default Home;