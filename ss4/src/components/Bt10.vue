<template>
    <div>
        <h1>Bài 10</h1>
        <button @click="changeTrue">Hiển thị</button>
        <button @click="changeFalse">Ẩn</button>
        <p v-if="isVisible">Nội dung được hiển thị</p>
        <p v-else>Nội dung ẩn</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isVisible = ref(true);

const changeFalse = () => {
    isVisible.value = false;
};

const changeTrue = () => {
    isVisible.value = true;
};
</script>

<style>
</style>
