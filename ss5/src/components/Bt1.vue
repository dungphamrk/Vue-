<template>
    <div>
        <h1>Bài 1</h1>
        <button @click="changeTrue">ẩn </button>
        <button @click="changeFalse">Hiển thị</button>
        <p v-if="isVisible"></p>
        <p v-else>Rikkeiacademy</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isVisible = ref(false);

const changeFalse = () => {
    isVisible.value = false;
};

const changeTrue = () => {
    isVisible.value = true;
};
</script>

<style>
</style>
