<template>
    <div>
      <h1>Bài 8</h1>
      <button @click="changeSortType(1)">Tăng dần</button>
      <button @click="changeSortType(2)">Giảm dần</button>
      <div class="container">
        <p v-for="(value, index) in rendered" :key="index">
          {{ value }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  
  let sortType = ref(0);
  const changeSortType = (value) => {
    sortType.value = value;
  };
  
  let array = [1, 2, 123, 123123, 22, 30, 11, 22, 33, 55, 8, 9, 10];
  
  const rendered = computed(() => {
    const sortedArray = [...array]; // Tạo bản sao của mảng để không làm thay đổi mảng gốc
    switch (sortType.value) {
      case 1:
        return sortedArray.sort((a, b) => a - b); // Sắp xếp tăng dần
      case 2:
        return sortedArray.sort((a, b) => b - a); // Sắp xếp giảm dần
      default:
        return array; // Không sắp xếp
    }
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    gap: 10px;
  }
  </style>
  