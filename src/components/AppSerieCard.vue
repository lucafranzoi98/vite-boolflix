<script>
import { state } from "../state.js";

export default{
   name: "AppSerieCard",
   props: {
      serie: Object
   },
   data (){
      return {
         state
      }
   }
}
</script>

<template>

   <div class="col">
      <div class="card h-100" style="width: 16rem;">
         <img class="card-img-top" v-if="serie.poster_path != null" :src="state.getCover(serie.poster_path)">
         <img class="card-img-top" v-else src="../assets/img/404.png" width="100">
         <div class="card-body">
            <h5 class="card-title">{{ serie.name }}</h5>
            <h6 class="card-title">{{ serie.original_name }}</h6>
            <span v-html="state.getVote(serie.vote_average)"></span>
            {{ state.getFlagEmoji(serie.original_language) }}
         </div>
      </div>
   </div>

</template>