<script >
import { state } from './state.js';

export default{
   name: "App",
   data (){
      return {
         state
      }
   },
   created(){
      state.fetchData()
   }
}
</script>

<template>

   <input type="text" placeholder="Search a movie" v-model="state.inputSearchMovie">
   <button @click="state.fetchData()">SEARCH</button>

   <ul>
      <li v-for="movie in state.movies">{{ movie.title }}, {{ movie.original_title }}, {{ movie.original_language }}, {{ movie.vote_average }}</li>
   </ul>
   

</template>

<style>

</style>
