<template>
    <div>
      <h1>Bài 5</h1>
      <v-alert
        v-model="alert"
        border="start"
        close-label="Close Alert"
        title="Xác nhận xóa"
        variant="tonal"
        closable
      >
        Bạn có chắc chắn muốn xóa tài khoản này không?
      </v-alert>
  
      <div
        v-if="!alert"
        class="text-center"
      >
        <v-btn @click="alert = true">
        reset
        </v-btn>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const alert = ref(false);
  </script>
  