<template>
    <div>
        <h1>Bài 10</h1>
      <BaseInput
        v-model="userName"
        placeholder="Enter your name"
        type="text"
      >
        <template #prefix>
          <span>Name</span>
        </template>
        <template #suffix>
          <span></span>
        </template>
      </BaseInput>
      <BaseInput
        v-model="userEmail"
        placeholder="Enter your email"
        type="email"
      >
        <template #prefix>
          <span>Email</span>
        </template>
        <template #suffix>
          <span></span>
        </template>
      </BaseInput>
      <BaseInput
        v-model="userAddress"
        placeholder="Enter your address"
        type="text"
      >
        <template #prefix>
          <span>Address</span>
        </template>
        <template #suffix>
          <span></span>
        </template>
      </BaseInput>
      <p>User Name: {{ userName }}</p>
      <p>User Email: {{ userEmail }}</p>
      <p>User Address: {{ userAddress }}</p>
    </div>
  </template>
  
  <script setup>
  import BaseInput from './BaseInput.vue'
  import { ref } from 'vue'

  const userName = ref('')
  const userEmail = ref('')
  const userAddress = ref('')
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  