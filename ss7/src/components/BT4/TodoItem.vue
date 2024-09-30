<template>
    <div>
      <h1>Bài 4</h1>
      <p>Id to delete :{{arr}}</p>
      <TodoApp @-Delete="handleDelete"/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TodoApp from './TodoApp.vue';
  let count = ref(0);
  let arr=ref([]);
  const handleDelete =()=>{
      count.value++
      arr.value.push(count.value);
  }
  
  </script>
  
  <style>
  
  </style>