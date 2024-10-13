<template>
    <div>
        <h1>Bài 10</h1>
      <h2>Đăng nhập</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="user.email" placeholder="Nhập email" required />
        <input type="password" v-model="user.password" placeholder="Nhập mật khẩu" required />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { onMounted, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  const store = useStore();
  const router = useRouter();
  const user = reactive({
    email: '',
    password: ''
  });
  
  onMounted(() => {
    console.log(store.state.user);
    
    user.email = store.state.user.email || '';
    user.password = store.state.user.password || '';
  });
  const login = () => {
    const registeredUser = store.getters.user; 
  
    if (registeredUser && registeredUser.email === user.email && registeredUser.password === user.password) {
      router.push('/'); 
    } else {
      alert("Đăng nhập thất bại");
    }
  };
  </script>
  