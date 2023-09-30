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
      <div class="card h-100" style="width: 16rem;">
         <img class="card-img-top" v-if="movie.poster_path != null" :src="state.getCover(movie.poster_path)">
         <img class="card-img-top" v-else src="../assets/img/404.png" width="100">
         <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <h6 class="card-title">{{ movie.original_title }}</h6>
            <span v-html="state.getVote(movie.vote_average)"></span>
            {{ state.getFlagEmoji(movie.original_language) }}
         </div>
      </div>
   </div>

</template>