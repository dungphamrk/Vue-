<template>
    <div>
      <h3>BT2: Dữ liệu trong components con</h3>
      <p>Id: {{ productProps.id }} </p>
      <p>Product Name: {{ productProps.productName }} </p>
      <p>Price: {{ productProps.price }} </p>
      <p>Quantity: {{ productProps.quantity }} </p>
    </div>
  </template>
  
  <script setup>
 const { productProps } = defineProps({
  productProps: {
    type: Object,
    required: true,
  },
});
  </script>
  
  <style>
  </style>
  