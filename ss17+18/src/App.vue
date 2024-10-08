<template>
  <div>
      <div v-if="!isLogin">
    <!-- Form hoặc nút đăng nhập khi chưa đăng nhập -->
    <button @click="handleLogin">Login</button>
  </div>
  <div v-else>
    <button @click="handleLogout">Đăng xuất</button>

  </div>
  <RouterView/>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
const isLogin=ref(false)
function handleLogin() {
  const lastVisitedURL = localStorage.getItem('lastVisitedURL');
  
  if (lastVisitedURL) {
    router.push(lastVisitedURL);
  } else {
    router.push('/dashboard');
  }
}


</script>

<style>

</style>