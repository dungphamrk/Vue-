<template>
  <div>
    <button @click="toggleChild">
      {{ isChildVisible ? "Hide" : "Show" }} Toggle
    </button>
    <ChildBt5 v-if="isChildVisible" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import ChildBt5 from "./ChildBt5.vue";

const isChildVisible = ref(false);
const toggleChild = () => {
  isChildVisible.value = !isChildVisible.value;
};
</script>
  