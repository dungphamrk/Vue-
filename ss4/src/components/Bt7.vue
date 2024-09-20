<template>
    <div>
        <h1>Bài 7</h1>
      <input type="number" v-model="inputValue" min="0" />
      <button @click="addToTotal">Add to total</button>
      <p>Tổng tiền trong giỏ hàng: {{ totalMoney }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed,watch } from 'vue';
  
  const inputValue = ref(0);
  const totalAdded = ref(0); 
  
  const totalMoney = computed(() => {
    return totalAdded.value*totalAdded.value; 
  });
  
  const addToTotal = () => {
    totalAdded.value = Number(inputValue.value);
    inputValue.value = 0; 
  };
  watch(inputValue, (newValue) => {
    console.log(newValue);
});
  </script>
  
  <style>
  </style>
  