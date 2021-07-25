import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function PodCard(prop) {
    return (
        <Container>
            <Card
                className="card"
                style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" rounded />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Row lg={2} >
                        <Col>
                            <Button size="sm" variant="primary">Watched</Button>
                        </Col>
                        <Col>
                            <Button size="sm" variant="primary">Review</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PodCard;