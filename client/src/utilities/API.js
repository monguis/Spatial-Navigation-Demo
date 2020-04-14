import axios from "axios";

export default {
    //gets all movies from database
    getMovies: function() {
      return axios.get("/api/movies");
    }
  };
  