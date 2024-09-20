<template>
  <div>
    <h1>Bài 3</h1>
    <p>
      Quyền hạn của bạn là: <b>{{ roleText }}</b>
    </p>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";

const userRole = "Admin";
const roleText = computed(() => {
  if (userRole === "Admin") return "Admin";
  if (userRole === "User") return "User";
  return "Guest";
});
</script>
  
  <style>
</style>
  