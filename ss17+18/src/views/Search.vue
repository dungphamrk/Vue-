<template>
    <div>
        <input type="text" v-model="inputValue" placeholder="Tìm kiếm">
        <button @click="handleFind">Tìm kiếm</button>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
    const inputValue= ref("");
    const router= useRouter()
    const handleFind =()=>{
        router.push({path:"/search",query:{q:inputValue.value}})
    }
  </script>
  
  <style>
  
  </style>