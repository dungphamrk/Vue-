<template>
    <div>
        <h1>Bài 4</h1>
        <button  @click="changeTrue">Hiển thị</button>
        <button  @click="changeFalse">Ẩn</button>
        <p v-show="isVisible">Thông báo : <b>yoh welcome</b></p>
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
