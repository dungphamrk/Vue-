<template>
    <div>
      <h1>Bài 3</h1>
      <h1>Current company: {{companies}}</h1>
      <h1>Age :{{count }}</h1>
      <button   @click="handleUpdate">Rendom</button>
    </div>
  </template>
  
  <script setup>
  import { computed, onUpdated,ref } from 'vue';
      const count = ref(0);
      const companies= computed(()=>{
        if (count<4) {
            companies.value="Rikkei Academy"
        }else if (count<8) {
             companies.value="Rikkei Education"
        }else companies.value="Rikkei Fukuoka"
      });
      const handleUpdate =()=>{
          count.value=Math.ceil(Math.random()*10);
      }

  </script>
  
  <style>
  
  </style>