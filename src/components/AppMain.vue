<script>
import { state } from "../state.js";
import AppMovieCard from "./AppMovieCard.vue";
import AppSerieCard from "./AppSerieCard.vue";

export default{
   name: "AppMain",
   data (){
      return {
         state
      }
   },
   components: {
      AppMovieCard,
      AppSerieCard
   }
}
</script>

<template>

   <!-- Check if input is empty: first time on page (welcome page) -->
   <div v-if="state.isEmpty == false" class="container m-auto my-4">

      <!-- Check if there are movies results -->
      <div v-if="state.movies != ''">

         <h2 class="mb-3">Movies</h2>
         <div class="row row-cols-5 g-3">
            
            <AppMovieCard v-for="movie in state.movies" :movie="movie"></AppMovieCard>

         </div>
      </div>

      <h3 v-else>No movies found</h3>

      <!-- Check if there are series results -->
      <div v-if="state.series != ''">

         <h2 class="mt-5 mb-3">Series</h2>
         <div class="row row-cols-5 g-3">

            <AppSerieCard v-for="serie in state.series" :serie="serie"></AppSerieCard>

         </div>


      </div>

      <h3 v-else>No series found</h3>

   </div>

   <!-- First page load: welcome page -->
   <h1 v-else class="text-center mt-3">
      Welcome! Search something
   </h1>

</template>