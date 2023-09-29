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

   <input type="text" placeholder="Search a movie" v-model="state.inputSearchMovie" @keyup.enter="state.searchButton()">
   <button @click="state.searchButton()">SEARCH</button>
   <div class="text-warning" v-if="state.isNotValid == true">Type at least 1 character</div>
   
   
   <div v-if="state.isEmpty == false">
      <ul v-if="state.movies != ''">Movies
         <li v-for="movie in state.movies">

            {{ movie.title }},

            {{ movie.original_title }},

            <span v-html="state.getVote(movie.vote_average)"></span>

            {{ state.getFlagEmoji(movie.original_language) }},
            <!-- {{ state.getVote(movie.vote_average) }},            -->
            <img v-if="movie.backdrop_path != null" :src="state.getCover(movie.backdrop_path)">
            <img v-else src="./assets/img/404.png" width="100">
            
         </li>
      </ul>
      <div v-else>No movies found</div>

      <ul v-if="state.series != ''">Series
         <li v-for="serie in state.series">
            {{ serie.name }},
            {{ serie.original_name }},
            {{ state.getFlagEmoji(serie.original_language) }},
            {{ Math.round(serie.vote_average / 2) }}
            <img v-if="serie.poster_path != null" :src="state.getCover(serie.poster_path)">
            <img v-else src="./assets/img/404.png" width="100">
         </li>
      </ul>
      <div v-else>No series found</div>
   </div>

   <div v-else>
      Welcome! Search something
   </div>
   

</template>

<style>

</style>
