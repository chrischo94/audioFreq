import React from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import ProfileCards from "../../components/profileCards";

const Profile = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <h1>Favorite</h1>
                <hr />
                <Row lg={4} >
                    <Col xs={6} md={4} >
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                </Row>
                <h1>Ratings</h1>
                <hr />
                <Row lg={4} >
                    <Col xs={6} md={4} >
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                </Row>
                <h1>Recent</h1>
                <hr />
                <Row lg={4} >
                    <Col xs={6} md={4} >
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                    <Col>
                        <ProfileCards />
                    </Col>
                </Row>
            </Container>
        </div>

    )
};

export default Profile;