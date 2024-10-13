<template>
    <div>
    <h1>Bài 4</h1>
      <h1>Giá trị đếm: {{ counter }}</h1>
      <button @click="increment">Tăng</button>
      <button @click="decrement">Giảm</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const counter = computed(() => store.getters.getCounter);
  const increment = () => {
    store.dispatch('increment');
  };
  
  const decrement = () => {
    store.dispatch('decrement');
  };
  </script>

  