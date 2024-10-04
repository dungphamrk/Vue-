<template>
  <div>
    <h1>Phần điều hướng này gồm cả bài 7 và 8</h1>
    <div style="display: flex;gap: 10px;">
       <RouterLink to="/" :class="{ active: $route.path === '/' }" >Home</RouterLink>
        <RouterLink to="/contact" :class="{ active: $route.path === '/contact' }">Contact</RouterLink>
        <RouterLink to="/product"   :class="{ active: $route.path === '/product' }">Product</RouterLink>
        <RouterLink to="/details"   :class="{ active: $route.path === '/details' }">Details</RouterLink>

    </div>
   
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';


</script>

<style scoped>
.active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>