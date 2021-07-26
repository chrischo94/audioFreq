import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API"

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import PodCard from "../../components/PodCard";


// function Podcasts() {
//     //setting our components initial state
//     const [podcast, setPodcast] = useState([])
// }

// useEffect(() => {
//     loadPodcast()
// }, [])
loadPodcast(); 

function loadPodcast() {
    API.getDaPodcast()
        .then(res =>
            console.log(res.data),
            // setPodcast(res.data)
        )
        .catch(err => console.log(err));
}








function Home() {
    return (
        <div className="overflow-scroll" >
            <NavBar>
                Hello World
            </NavBar>
            <Container>
                <Row lg={3} >
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>
                    <Col>
                        <PodCard />
                    </Col>

                </Row>
            </Container>
        </div>
    )
};

export default Home;