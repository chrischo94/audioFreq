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
    const [libraries, setLibraries] = useState([])
    const [library, setLibrary] = useState({})
  

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

      function handleFormSubmit(id) {
       //find which object by id
          API.saveLibrary(
              id
          )
            .then(res => loadPodcast())
            .catch(err => console.log(err));

      };
   
      function loadLibrary() {
        API.getLibraries()
          .then(library => {
            setLibraries(libraries.data);
            setLibrary(library.data[0]);
            console.log(library.data[0])
          })
          .catch(err => console.log(err));
      }
    function handleCommentSubmit(id1, text) {
        API.saveComment(
            id1,
            text
        )
        .then(res => loadLibrary())
        .catch(err => console.log(err))
    }



    //TODO how to find a specific id from the click of button and adding to library. 
    return (
        <div className="overflow-scroll" >
            <NavBar>
                Hello World
            </NavBar>
            <Container>
                <Row lg={3} >
                    {podcasts.map(podcast =>(
                        <Col key={podcast._id}  >
                        <PodCard 
                        id={podcast._id}
                        title={podcast.title_original} 
                        image={podcast.image} 
                        description={podcast.description_original}
                        handleFormSubmit={handleFormSubmit}
                        handleCommentSubmit={handleCommentSubmit}
                        
                        />
                    </Col>
                    ))}
                    
                    
                </Row>
            </Container>
        </div>
    )
};

export default Home;