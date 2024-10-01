<template>
  <div>
    <h1>Bài 1</h1>
    <p>Email</p>
    <input type="email" v-model="email" />
    <p>Value: {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
</script>

<style>
</style>