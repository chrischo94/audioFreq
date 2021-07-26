import React, { useState, useEffect } from "react";
import { useAuth, user } from "../../utils/auth"
import API from "../../utils/axios/API"

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import PodCard from "../../components/PodCard";


function Home() {



    //setting our components initial state
    const [podcasts, setPodcasts] = useState([])
    const [podcast, setPodcast] = useState({})


    useEffect(() => {
        loadPodcast()
    }, [])
   

    function loadPodcast() {
        API.getDaPodcast()
          .then(users => {
            setPodcasts(users.data);
            setPodcast(users.data[0]);
            console.log(users.data[0])
          })
          .catch(err => console.log(err));
      }

    //   function handleFormSubmit(event,id) {
    //     event.preventDefault();
    //    //find which object by id
    //       API.savePodcast({
    //         title: formObject.title,
    //         image: formObject.author,
    //         description: formObject.synopsis
    //       })
    //         .then(res => loadPodcast())
    //         .catch(err => console.log(err));

    //   };
    
      
      


    //TODO how to find a specific id from the click of button and adding to library. 
    return (
        <div className="overflow-scroll" >
            <NavBar>
                Hello World
            </NavBar>
            <Container>
                <Row lg={3} >
                    {podcasts.map(podcast =>(
                        <Col>
                        <PodCard key={podcast._id} title={podcast.title_original} image={podcast.image} description={podcast.description_original}/>
                    </Col>
                    ))}
                    
                    
                </Row>
            </Container>
        </div>
    )
};

export default Home;