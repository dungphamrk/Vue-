<template>
    <div>
        <h1>Bài 9</h1>
      <h2>Đăng ký</h2>
      <form @submit.prevent="register">
        <input type="email" v-model="user.email" placeholder="Nhập email" required />
        <input type="password" v-model="user.password" placeholder="Nhập mật khẩu" required />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { reactive } from 'vue';
  
  const store = useStore();
  const router = useRouter();
  const user = reactive({
    email: '',
    password: ''
  });
  
  const register = async () => {
    await store.dispatch('registerUser', user);
    console.log(store.state.user);
    router.push("/login");
  };
  </script>
  