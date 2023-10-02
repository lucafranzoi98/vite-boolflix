<script>
import { state } from "../state.js";
export default{
   name: "AppMovieCard",
   props: {
      movie: Object,
   },
   data(){
      return {
         state
      }
   }
}
</script>

<template>

   <div class="col">
      <div class="h-100 cover position-relative">
         <img class="h-100 w-100 rounded-2 shadow-sm" v-if="movie.poster_path != null" :src="state.getCover(movie.poster_path)">
         <img class="h-100 w-100 rounded-2 shadow-sm object-fit-cover" v-else src="../assets/img/404.jpg">

         <div class="cover-hover rounded-2 overflow-auto">
            <h5>{{ movie.title }}</h5>           
            <h6 class="fst-italic">{{ movie.original_title }}</h6>
            <p class="fw-light">{{ movie.overview }}</p>
            <div>
               <span v-html="state.getVote(movie.vote_average)" class="star-color"></span>
               {{ state.getFlagEmoji(movie.original_language) }}
            </div>
         </div>
         
      </div>
      
   </div>

</template>