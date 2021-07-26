import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";




// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function PodCard({title,image,description, handleFormSubmit}) {
    return (
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
                    <Row lg={2} >
                        <Col>
                            <Button onClick={()=> handleFormSubmit} size="sm" variant="primary">Watched</Button>
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