import React, { useState, useEffect } from "react";

import API from "../../utils/axios/API";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import NavBar from "../../components/Navbar";

import ProfileReviewCards from "../../components/profileReviewCards";

function ProfileReview() {
    const [podcasts, setPodcasts] = useState([])
    const [podcast, setPodcast] = useState({})

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({})

    useEffect(() => {
        // loadPodcast()
        loadComment()
    }, [])
    useEffect(() => {
       console.log(comment)
    }, [comment])

    // function loadPodcast() {
    //     API.getDaPodcast()
    //         .then(users => {
    //             setPodcasts(users.data);
    //             setPodcast(users.data[0]);
    //             console.log(users.data[0])
    //         })
    //         .catch(err => console.log(err));
    // }

    function loadComment() {
        API.getComments()
            .then(comment => {
                setComments(comment.data);
                setComment(comment);
                console.log(comment.data)
            })
            .catch(err => console.log(err));
        }
          
    
    return (
        <div>
            <NavBar/> 
            <Container>
                <h1>Reviews</h1>
                <hr />
                {comments.podcasts ? (
                    <Row lg={4}>
                        {comments.podcasts.map(cash2 => (
                            <Col xs={6} md={4} key={comment._id}  >
                                <ProfileReviewCards
                                id={cash2._id}
                                title={cash2.title_original} 
                                image={cash2.image} 
                                comment={cash2.comment.text}
                                />
                            
                            </Col>
                        ))}
                    

                    </Row>
                        ):(
                        <h3>No Comments to display</h3>
                    )}
                    

                </Container>

                </div>
                
            )
        };
export default ProfileReview;