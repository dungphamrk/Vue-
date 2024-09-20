<template>
    <div>
        <h1>Bt4</h1>
        <input type="text" :v-model="inputValue">
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
    const inputValue= ref("");
    watch(inputValue, (newValue) => {
    console.log(newValue);
});
</script>

<style>

</style>