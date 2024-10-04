<template>
    <div v-if="user">
      <h2>Thông tin chi tiết</h2>
      <p>Id: {{ user.id }}</p>
      <p>UserName: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Address: {{ user.address }}</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
  ];
  
  const route = useRoute();
  const user = ref(null);
  
  onMounted(() => {
    const {id} = route.params
    console.log(id);
    user.value = users.find((u) => u.id == id);
  });
  </script>
  