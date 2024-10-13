<template>
    <div>
      <button @click="changeLanguage('en')" :class="{ active: currentLanguage === 'en' }">English</button>
      <button @click="changeLanguage('vi')" :class="{ active: currentLanguage === 'vi' }">Tiếng Việt</button>
  
      <div class="content">
        <p v-if="currentLanguage === 'en'">Language toggle</p>
        <p v-else>Chuyển đổi ngôn ngữ</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const currentLanguage = computed(() => store.getters.currentLanguage);
  
  const changeLanguage = (language) => {
    store.dispatch('setLanguage', language);
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  button.active {
    font-weight: bold;
    color: white;
    background-color: #007bff;
  }
  .content {
    margin-top: 20px;
    font-size: 1.2em;
  }
  </style>
  