<template>
    <div>
      <h1>Bài 6</h1>
      <p>Sở thích:{{ hobbies }}</p>
      <div class="container">
        <div>
          <input type="checkbox" v-model="hobbies" name="hobbies" value="code"  />
          <label >code</label>
        </div>
        <div>
          <input type="checkbox" v-model="hobbies" name="hobbies" value="Đá bóng" />
          <label >Đá bóng</label>
        </div>
        <div>
          <input type="checkbox" v-model="hobbies" name="hobbies" value="bóng chuyền" />
          <label>bóng chuyển</label>
        </div>
      </div>
    </div>
  </template>
    
    <script setup>
  import { ref } from "vue";
  const hobbies = ref([]);
  </script>
    
    <style scoped>
  </style>