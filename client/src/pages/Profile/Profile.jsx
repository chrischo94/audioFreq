import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../utils/auth"
import { Link } from "react-router-dom";
import API from "../../utils/axios/API";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import ProfileCards from "../../components/profileCards";
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
            setLibraries(libraries.data);
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
                         <Col xs={6} md={4} key={library._id}   >
                         <ProfileCards
                        id={library._id}
                        title={library.title_original} 
                        image={library.image} 
                        description={library.description_original}
                         comment={libraries.comment}
                         />
                     </Col>
                     ))} 
                        
                </Row>
                <h1>Reviews</h1>
                <hr />
                <Row>
                <Col>
                {/* <Image src={image} rounded /> */}
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

// import React, { useState, useEffect } from "react";
// import { useAuth, user } from "../../utils/auth"
// import API from "../../utils/axios/API"

// import { Col } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Container } from "react-bootstrap";
// import NavBar from "../../components/Navbar";
// import SearchForm from "../../components/SearchForm";
// import ProfileCards from "../../components/profileCards";


// function Results() {
//     //setting our components initial state
//     const [podcasts, setPodcasts] = useState([])
//     const [podcast, setPodcast] = useState({})
//     const [libraries, setLibraries] = useState([])
//     const [library, setLibrary] = useState({})
//     const { search } = window.location;
//     const query = new URLSearchParams(search).get('s');
//     const [searchQuery, setSearchQuery] = useState(query || '');
    
//     const filterLibraries = (libraries, query) => {
//         if (!query) {
//             return libraries;
//         }
//         return libraries.filter((library) => {
//             const libraryName = library.title_original.toLowerCase();
//             return libraryName.includes(query);
//         });
//     };

//     const filteredLibraries = filterLibraries(libraries, searchQuery);

//     useEffect(() => {
//         loadLibrary()
//     }, [])
    
//     function loadPodcast() {
//         API.getDaPodcast()
//             .then(users => {
//                 setPodcasts(users.data);
//                 setPodcast(users.data[0]);
//                 console.log(users.data[0])
//             })
//             .catch(err => console.log(err));
//     }

//     function handleFormSubmit(id) {
//     //find which object by id
//         API.saveLibrary(
//             id
//         )
//             .then(res => loadPodcast())
//             .catch(err => console.log(err));
//     };
   
//     function loadLibrary() {
//         API.getLibraries()
//             .then(library => {
//                 setLibraries(libraries.data);
//                 setLibrary(library.data[0]);
//                 console.log(library.data[0])
//             })
//             .catch(err => console.log(err));
//     }

//     function handleCommentSubmit(id1, text) {
//         API.saveComment(
//             id1,
//             text
//         )
//             .then(res => loadLibrary())
//             .catch(err => console.log(err))
//     }

//     //TODO how to find a specific id from the click of button and adding to library. 
//     return (
//         <div className="overflow-scroll" >
//             <NavBar>
//                 Hello World
//             </NavBar>
//             <div>
//                 <SearchForm
//                     searchQuery={searchQuery}
//                     setSearchQuery={setSearchQuery}
//                     handleFormSubmit={handleFormSubmit}
//                 />
//             </div>
//             <Container>
//                 <Row lg={3} >
//                     {filteredLibraries.map(library =>(
//                         <Col key={library._id}  >
//                         <ProfileCards
//                         id={library._id}
//                         title={library.title_original} 
//                         image={library.image} 
//                         description={library.description_original}
                        
//                         />
//                     </Col>
//                     ))} 
//                 </Row>
//             </Container>
//         </div>
//     )
// };

// export default Results;