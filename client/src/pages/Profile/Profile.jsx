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
                      
                        
                        
                        />
                        </Col>
                    ))}
                </Row>
                ):(
                    <h3>No Podcasts to display</h3>
                )}
                
                
            </Container>

        </div>

    )
};

export default Profile;