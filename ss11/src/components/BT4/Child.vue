<template>
  <h1>count:{{count.count}}</h1>
</template>

<script setup>
import { onUpdated } from 'vue';
onUpdated(()=>{
        alert("Giá trị của biến age đã thay đổi ")
    })
    const count = defineProps(["count"]);
</script>

<style>

</style>