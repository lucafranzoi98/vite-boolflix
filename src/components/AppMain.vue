<script>
import { state } from "../state.js";
export default{
   name: "AppMain",
   data (){
      return {
         state
      }
   }
}
</script>

<template>

   <div v-if="state.isEmpty == false" class="container m-auto">

      <div v-if="state.movies != ''">
         <h3>Movies</h3>

         <div class="row row-cols-5 g-3">
            <div v-for="movie in state.movies" class="col">
               <div class="card h-100" style="width: 16rem;">
                  <img class="card-img-top" v-if="movie.poster_path != null" :src="state.getCover(movie.poster_path)">
                  <img class="card-img-top" v-else src="../assets/img/404.png" width="100">
                  <div class="card-body">
                     <h5 class="card-title">{{ movie.title }}</h5>
                     <h6 class="card-title">{{ movie.original_title }}</h6>
                     <span v-html="state.getVote(movie.vote_average)"></span>
                     {{ state.getFlagEmoji(movie.original_language) }},
                  </div>
               </div>
            </div>
            

         </div>

         

      </div>

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

   <h1 v-else class="text-center mt-3">
      Welcome! Search something
   </h1>

</template>