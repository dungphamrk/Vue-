<template>
  <div>
    <h1>bài 2</h1>
    <h3>name:{{ company.name }}</h3>
    <h3>count:{{ company.age }}</h3>
    <button @click="handleChangValue">Change value</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const company = reactive({
  name: "Dũng đẹp trai vãi ò",
  age: 1,
});
const handleChangValue = () => {
  company.age++;
  company.name = "Sao mà chê đc =))";
};
</script>

<style>
</style>