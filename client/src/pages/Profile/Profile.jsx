import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import API from "../../utils/axios/API";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import NavBar from "../../components/Navbar";

import PodCard from "../../components/PodCard";




function Profile() {

    const [libraries, setLibraries] = useState([])
    const [library, setLibrary] = useState({})


    useEffect(() => {
        loadLibrary()
    }, [])
    
    function loadLibrary() {
        API.getLibraries()
            .then(library => {
                setLibraries(libraries.data[0]);
                setLibrary(library.data[0]);
                console.log(library.data[0])
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <NavBar />
            <Container>
                <h1>Favorites</h1>
                <hr />
                <Row lg={4} >
                    {libraries.map(library =>(
                        <Col xs={6} md={4} key={library._id}  >
                        <PodCard 
                        id={library._id}
                        title={library.title_original} 
                        image={library.image} 
                        description={library.description_original}
                        comment={library.comments}
                        />
                        </Col>
                    ))}
                </Row>
                <h1>Reviews</h1>
                <hr />
                <Row>
                <Col>
                {/* <Image src="holder.js/171x180" rounded /> */}
                </Col>
                <Col>
                    <p>This is where the review will be</p>
                </Col>

                </Row>
                {/* Last row has a Image on the right. This Row is occupied with only the Content that has a review with it.There should bea  button under for Comment.  */}

            </Container>

        </div>

    )
};

export default Profile;