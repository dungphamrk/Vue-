<template>
    <div class="p-4">
      <h1 class="text-2xl font-semibold mb-4">List Products</h1>
      <div v-for="product in products" :key="product.id" class="flex items-center mb-4 p-4 border rounded-md shadow-md">
        <img :src="product.image" :alt="product.name" class="w-20 h-20 object-cover mr-4" />
        <div class="flex-1">
          <h2 class="text-lg font-medium">{{ product.name }}</h2>
          <p class="text-sm text-gray-500 mb-1">{{ product.description }}</p>
          <span class="block text-xl font-bold">{{ product.price }} USD</span>
        </div>
        <div class="flex items-center space-x-2">
          <input v-model.number="quantity" type="number" :max="product.quantity" min="1" class="w-16 p-1 border rounded-md text-center" />
          <button @click="addToCart(product, quantity)" class="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const quantity = ref(1);
  
  const products = computed(() => store.getters['products/allProducts']);
  
  onMounted(() => {
    store.dispatch('products/fetchProducts');
  });
  
  const addToCart = (product, quantity) => {
    store.dispatch('cart/addToCart', { ...product, quantity });
    store.commit('products/UPDATE_PRODUCT_QUANTITY', { id: product.id, quantity });
  };
  </script>
  