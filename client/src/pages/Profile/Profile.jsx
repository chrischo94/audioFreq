import React from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import ProfileCards from "../../components/profileCards";

const Profile = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <h1>Favorites</h1>
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
                <h1>Reviews</h1>
                <hr />
                <Row>
                <Col>
                <Image src="holder.js/171x180" rounded />
                </Col>
                <Col>
                    <p>***** Ratings</p>
                    <p>This is where the review will be</p>
                </Col>

                </Row>
                {/* Last row has a Image on the right. This Row is occupied with only the Content that has a review with it.There should bea  button under for Comment.  */}

            </Container>

        </div>

    )
};

export default Profile;