<template>
    <div>
      <h1>Bài 3</h1>
      <table border="1" cellpadding="10" cellspacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.price.toLocaleString() }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button @click="editProduct(product)">Sửa</button>
              <button @click="deleteProduct(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const products = computed(() => store.getters.getProducts);

  </script>