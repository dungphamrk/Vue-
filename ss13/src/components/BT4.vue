<template>
    <div class="">
        <h1>Bài 4</h1>
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
           Quản trị viên
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script setup>
import { ref } from 'vue';
  
const items = ref(["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"]);
</script>