import axios from "axios";

export default {
    search: function() {
        return axios.get("/api/secret")
    },
    getUsers: function() {
        return axios.get("/api/users")
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
      },
      // Deletes the user with the given id
    deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function(userData) {
    return axios.post("/api/users", userData);
    },
    getLibraries: function() {
        return axios.get("/api/Library")
    },
    getLibrary: function(id) {
        return axios.get("/api/Library/" + id);
      },
      // Deletes the Podcast with the given id
    deleteLibrary: function(id) {
    return axios.delete("/api/Library/" + id);
    },
    // Saves a Podcast to the database
    saveLibrary: function(LibraryData) {
    return axios.put("/api/library/" + LibraryData);
    },
    getComments: function() {
        return axios.get("/api/comment")
    },
    getComment: function(id) {
        return axios.get("/api/comment/" + id);
      },
      // Deletes the comment with the given id
    deleteComment: function(id) {
    return axios.delete("/api/comment/" + id);
    },
    // Saves a comment to the database
    saveComment: function(id, CommentData) {
    return axios.post("/api/comment/" + id, {text: CommentData});
    },
    getDaPodcast: function(){
        return axios.get("/api/podCast")
    }
}; 