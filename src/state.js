import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
   inputSearchMovie: "",
   endpointMovies: "https://api.themoviedb.org/3/search/movie?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=",
   endpointSeries: "https://api.themoviedb.org/3/search/tv?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=",
   movies: "",
   series: "",
   isEmpty: true,
   isNotValid: false,

   // Get data from movies API
   fetchDataMovies(){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=${this.inputSearchMovie}`)
      .then(response => {
         this.movies = response.data.results;
      })
   },

   // Get data from series API
   fetchDataSeries(){
      axios
      .get(`https://api.themoviedb.org/3/search/tv?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=${this.inputSearchMovie}`)
      .then(response => {
         this.series = response.data.results;
      })
   },

   // Search btn funcionalities
   // Get data from API
   // Check if input field is valid (at least 1 characther)
   // Clear input field after click
   searchButton(){
      if (this.inputSearchMovie.split(" ").join("") != "") {
         this.fetchDataMovies(this.endpointMovies, this.movies);
         this.fetchDataSeries(this.endpointSeries, this.series);
         this.inputSearchMovie = "";
         this.isEmpty = false;
         this.isNotValid = false;
      } else {
         this.isNotValid = true;
      }
      
   },

   // Get flag (on windows they are rendered as Country Code Emoji) from language
   getFlagEmoji(countryCode) {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
   },

   // Get vote and convert on a scale from 0 to 5
   // Convert it in star icons
   getVote(vote){
      let stars = Math.round(vote / 2);
      return `<img src="/src/assets/img/full-star.svg" width="10" height="10">`.repeat(stars) + `<img src="/src/assets/img/empty-star.svg" width="10">`.repeat(5 - stars);
   },

   // Get link to cover img
   getCover(path){
      const imgPath = `https://image.tmdb.org/t/p/w342${path}`
      return imgPath
   },
   
})
