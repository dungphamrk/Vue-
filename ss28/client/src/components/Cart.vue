<template>
    <div class="p-4">
      <h1 class="text-2xl font-semibold mb-4">Your Cart</h1>
      <table class="min-w-full bg-white border rounded-md shadow-md">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border">Name</th>
            <th class="py-2 px-4 border">Price</th>
            <th class="py-2 px-4 border">Quantity</th>
            <th class="py-2 px-4 border">Total</th>
            <th class="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id" class="border-t">
            <td class="py-2 px-4 border">{{ item.name }}</td>
            <td class="py-2 px-4 border">{{ item.price }} USD</td>
            <td class="py-2 px-4 border">
              <div class="flex items-center space-x-2">
                <input v-model.number="item.quantity" type="number" min="1" class="w-16 p-1 border rounded-md text-center" />
                <button @click="updateCart(item)" class="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                  Update
                </button>
              </div>
            </td>
            <td class="py-2 px-4 border">{{ item.price * item.quantity }} USD</td>
            <td class="py-2 px-4 border">
              <button @click="removeFromCart(item.id)" class="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-gray-100">
          <tr>
            <td colspan="3" class="py-2 px-4 text-right font-semibold">Total:</td>
            <td colspan="2" class="py-2 px-4">{{ totalPrice }} USD</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const cartItems = computed(() => store.getters['cart/cartItems']);
  const totalPrice = computed(() => store.getters['cart/cartTotalPrice']);
  onMounted(() => {
    store.dispatch('cart/fetchCart');
  });
  const updateCart = (item) => {
    store.dispatch('cart/updateCartItem', { id: item.id, quantity: item.quantity });
  };
  
  const removeFromCart = (id) => {
    store.dispatch('cart/removeFromCart', id);
  };
  </script>
  