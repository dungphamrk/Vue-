<template>
    <ProductChildren :productProps="product" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProductChildren from './ProductChildren.vue';
  
  const product = ref({
    id: "1",
    productName: "Balbla",
    price: 13000,
    quantity: 5
  });
  </script>
  
  <style>
  </style>
  