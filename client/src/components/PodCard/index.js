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
function PodCard({ title, image, description, handleFormSubmit, handleCommentSubmit, handleInputChange, id }) {

    const [modalShow, setModalShow] = React.useState(false);



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
                            <Button onClick={() => handleFormSubmit(id)} size="sm" variant="primary">Watched</Button>
                        </Col>
                        <Col>
                            <Button size="sm" variant="primary" onClick={() => {setModalShow(true); handleCommentSubmit(id);}} >Review</Button>
                            <Modal1 handleCommentSubmit={handleCommentSubmit} id1={id} show={modalShow}
                                onHide={() => setModalShow(false)}>

                            </Modal1>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default PodCard;