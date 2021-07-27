import React from "react";
import { Card } from "react-bootstrap";
// import Image from 'react-bootstrap/Image'; 
import "./style.css";
import { Container } from "react-bootstrap";
import "./style.css";


function ProfileCards({ title, image, description, comment }) {
    return (
        // <div>
        //     <Image src={image} thumbnail />
        //     <h4>{title}</h4>
        //     <h3>{description}</h3>
        //     <h3>{comment}</h3>
        // </div>
        <Container>
            <Card
                className="card mt-5"
                style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ProfileCards; 