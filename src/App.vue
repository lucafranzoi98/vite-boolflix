<script >
import { state } from './state.js';

export default{
   name: "App",
   data (){
      return {
         state
      }
   },
}
</script>

<template>

   <input type="text" placeholder="Search a movie" v-model="state.inputSearchMovie">
   <button @click="state.searchButton()">SEARCH</button>
   
   <ul>Movies
      <li v-for="movie in state.movies">{{ movie.title }}, {{ movie.original_title }}, {{ state.getFlagEmoji(movie.original_language) }}, {{ movie.vote_average }}</li>
   </ul>

   <ul>Series
      <li v-for="serie in state.series">{{ serie.name }}, {{ serie.original_name }}, {{ state.getFlagEmoji(serie.original_language) }}, {{ serie.vote_average }}</li>
   </ul>

</template>

<style>

</style>
