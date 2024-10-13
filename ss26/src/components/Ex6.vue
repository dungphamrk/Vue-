<template>
    <div>
        <h1>Bài 6</h1>
     <h3>{{numbers}}</h3>
     <button @click="random">Random Number</button>
 </div>
 </template>
 
 <script setup>
   import { computed } from 'vue';
   import { useStore } from 'vuex';
   const store = useStore();
   const numbers = computed(() => store.state.numbers);
   const random = () => {
   
     store.commit('addNumber');
   }
 </script>
 
 <style>
 