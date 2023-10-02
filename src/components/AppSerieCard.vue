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
      <div class="h-100 cover position-relative">
         <img class="h-100 w-100 rounded-2 shadow-sm" v-if="serie.poster_path != null" :src="state.getCover(serie.poster_path)">
         <img class="h-100 w-100 rounded-2 shadow-sm object-fit-cover" v-else src="../assets/img/404.jpg">

         <div class="cover-hover rounded-2 overflow-auto">
            <h5>{{ serie.name }}</h5>           
            <h6 class="fst-italic">{{ serie.original_name }}</h6>
            <p class="fw-light">{{ serie.overview }}</p>
            <div>
               <span v-html="state.getVote(serie.vote_average)" class="star-color"></span>
               {{ state.getFlagEmoji(serie.original_language) }}
            </div>
         </div>

      </div>
      

   </div>

</template>