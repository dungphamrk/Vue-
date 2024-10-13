<template>
    <div>
        <h1>Bài 5</h1>
     <h3>{{company}}</h3>
     <button @click="change">Change state</button>
 </div>
 </template>
 
 <script setup>
   import { computed } from 'vue';
   import { useStore } from 'vuex';
   const store = useStore();
   const company = computed(() => store.state.company);
   const change = (() => store.commit( "changeState"))
 </script>
 
 <style>
 
 </style>