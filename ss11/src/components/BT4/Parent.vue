<template>
    <div>
      <h1>Bài 4</h1>
        <Child :count="count"/>
      <button   @click="handleUpdate">Counter</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import Child from './Child.vue';
      const count = ref(0);
      const handleUpdate =()=>{
          count.value++;
      }

  </script>
  
  <style>
  
  </style>