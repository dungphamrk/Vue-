<template>
  <div>
    <h2>Chi tiết nhân viên</h2>
    <p>Id: {{ id }}</p>
    <nav>
      <router-link :to="'/employees/' + id + '/profile'">Thông tin cá nhân</router-link> |
      <router-link :to="'/employees/' + id + '/projects'">Dự án</router-link> |
      <router-link :to="'/employees/' + id + '/contact'">Liên hệ</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(route.params.id);
</script>
