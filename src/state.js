import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
   inputSearchMovie: "",
   movies: "",
   base_url: "https://api.themoviedb.org/3/search/movie?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=",

   fetchData(){
      axios
      .get(`${this.base_url}${this.inputSearchMovie}`)
      .then(response => {
         this.movies = response.data.results;
      })
      this.inputSearchMovie = "";
       
   }
})