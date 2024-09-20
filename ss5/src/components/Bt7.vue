<template>
    <div>
      <h1>Bài 7</h1>
      <button @click="activeBtn(n - 1)" v-for="n in 3" :key="n" :class="{ active: activeIndex === n - 1 }">
        button {{ n }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  let activeIndex = ref(0);
  const activeBtn = (count) => {
    activeIndex.value = count;
  };
  </script>
  
  <style>
  .active {
    background-color: red;
    color: #fff;
  }
  </style>
  