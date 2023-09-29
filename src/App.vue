<script >
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default{
   name: "App",
   components: {
      AppHeader,
      AppMain
   },
   data (){
      return {
         state
      }
   },
}
</script>

<template>

   <AppHeader></AppHeader>
   
   <AppMain></AppMain>   

</template>

<style>

</style>
