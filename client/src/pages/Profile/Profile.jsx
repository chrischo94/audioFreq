import React, { useState, useEffect } from "react";

import API from "../../utils/axios/API";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import NavBar from "../../components/Navbar";

import ProfileCards from "../../components/profileCards";




function Profile() {

    const [libraries, setLibraries] = useState([])
    const [library, setLibrary] = useState({})


    useEffect(() => {
        loadLibrary()
    }, [])
    useEffect(() => {
        console.log(libraries)
    }, [libraries])
    
    function loadLibrary() {
        API.getLibraries()
            .then(library => {
                setLibraries(library.data[0]);
                setLibrary(library);
                console.log(library.data)
           
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <NavBar />
            <Container>
                <h1>Favorites</h1>
                <hr />
                {libraries.podcasts ? (
                 
                    <Row lg={4} >
                    {libraries.podcasts.map(cash =>(
                        <Col xs={6} md={4}   >
                             <ProfileCards 
                        id={cash._id}
                        title={cash.title_original} 
                        image={cash.image} 
                        description={cash.description_original}
                        // comment={cash.comment}
                        
                        />
                        </Col>
                    ))}
                </Row>
                ):(
                    <h3>No Podcasts to display</h3>
                )}
                
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