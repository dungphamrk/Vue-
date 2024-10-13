<template>
    <div>
        <h1>Bài 1</h1>
      <h2>Thông tin cá nhân</h2>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Họ và tên:</strong> {{ user.userName }}</p>
      <p><strong>Giới tính:</strong> {{ user.gender }}</p>
      <p><strong>Ngày sinh:</strong> {{ user.dateOfBirth }}</p>
      <p><strong>Địa chỉ:</strong> {{ user.address }}</p>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  
  const store = useStore();
  const user = computed(() => store.getters.getUser);
  </script>
    