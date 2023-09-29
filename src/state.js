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

   fetchData(link, result){
      axios
      .get(`${link}${this.inputSearchMovie}`)
      .then(response => {
         result = response.data.results;
         console.log(result);
         console.log(this.movies);
         })
      },

   fetchDataMovies(){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=${this.inputSearchMovie}`)
      .then(response => {
         this.movies = response.data.results;
         })
      },

   fetchDataSeries(){
      axios
      .get(`https://api.themoviedb.org/3/search/tv?api_key=2591c3e5f53b06a41e1529a348580043&language=it-IT&query=${this.inputSearchMovie}`)
      .then(response => {
         this.series = response.data.results;
         })
      },

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

   getFlagEmoji(countryCode) {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
   },

   getCover(path){
      const imgPath = `https://image.tmdb.org/t/p/w342${path}`
      return imgPath
   }


})