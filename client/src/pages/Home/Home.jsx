import React, { useState, useEffect } from "react";
import { useAuth, user } from "../../utils/auth"
import API from "../../utils/axios/API"
import "./Home.css";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import PodCard from "../../components/PodCard";


function Home() {
    //setting our components initial state
    const [podcasts, setPodcasts] = useState([])
    const [podcast, setPodcast] = useState({})
    const [libraries, setLibraries] = useState([])
    const [library, setLibrary] = useState({})
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    
    const filterPodcasts = (podcasts, query) => {
        if (!query) {
            return podcasts;
        }
        return podcasts.filter((podcast) => {
            const podName = podcast.title_original.toLowerCase();
            return podName.includes(query);
        });
    };

    const filteredPodcasts = filterPodcasts(podcasts, searchQuery);

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
            <div>
                <SearchForm
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleFormSubmit={handleFormSubmit}
                />
                {/* <ul>
                    {filteredPodcasts.map(podcast => (
                        <li key={podcast.key}>{podcast.title_original}</li>
                    ))}
                </ul> */}
            </div>
            <p className="trending">TRENDING</p>
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