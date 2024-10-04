<template>
    <div>
      <h2>Danh sách nhân viên</h2>
      <div v-for="employee in employees" :key="employee.id" class="employee-card">
        <p>Id: {{ employee.id }}</p>
        <p>Tên: {{ employee.name }}</p>
        <p>Vị trí: {{ employee.position }}</p>
        <router-link :to="'/employees/' + employee.id">
          <button>Xem chi tiết</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const employees = ref([
    { id: 1, name: 'Nguyễn Văn A', position: 'Developer' },
    { id: 2, name: 'Nguyễn Văn B', position: 'Designer' },
    { id: 3, name: 'Nguyễn Văn C', position: 'Manager' },
  ]);
  </script>
  
  <style scoped>
  .employee-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 200px;
  }
  </style>
  