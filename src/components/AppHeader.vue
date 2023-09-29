<script>
import { state } from "../state.js";
export default{
   name: "AppHeader",
   data (){
      return {
         state,
      }
   }
}
</script>

<template>
   <header class="p-3 d-flex align-items-center justify-content-center">
      <div class="me-3">
         <img src="../assets/img/logonetflix.png" width="120">
      </div>
      <div class="me-2 bf_input">
         <input class="form-control" type="text" placeholder="Search a movie" v-model="state.inputSearchMovie" @keyup.enter="state.searchButton()">
         <div v-if="state.isNotValid == true">
            Type at least 1 character
         </div>
      </div>
      
      <button class="btn btn-danger" @click="state.searchButton()">SEARCH</button>
      
   </header>
   
</template>