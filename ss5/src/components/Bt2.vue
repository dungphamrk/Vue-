<template>
    <div>
        <h1>Bài 2</h1>
        <button v-show="isVisible" @click="changeTrue">Ẩn </button>
        <button v-show="!isVisible" @click="changeFalse">Hiển thị</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isVisible = ref(true);

const changeFalse = () => {
    isVisible.value = true;
};

const changeTrue = () => {
    isVisible.value = false;
};
</script>

<style>
</style>
