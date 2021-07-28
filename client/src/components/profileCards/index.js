import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Modal1 from "../../components/Modal"



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ProfileCards({ title, image, description, comment}) {

   


    return (
        <Container>
            <Card
                className="card mt-5"
                style={{ width: '15rem' }}>
                <Card.Img className="card-image" variant="top" src={image} />
                <Card.Header>
                    <Card.Title className="card-title">{title} </Card.Title>
                </Card.Header>
               
            </Card>
        </Container>
    );
}

export default ProfileCards; 