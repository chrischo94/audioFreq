import React from "react";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

// import './Home.css';
import NavBar from "../../components/Navbar";
import PodCard from "../../components/PodCard";

function Home() {
    return (
        <div>
            <NavBar>
                Hello World
            </NavBar>
            <Container>
                <Row>
                    <PodCard/>
                    <PodCard/>
                    <PodCard/>
                    <PodCard/>
                    <PodCard/>
                    <PodCard/>
                    <PodCard/>
                </Row>
            </Container>
        </div>
    )
};

export default Home;