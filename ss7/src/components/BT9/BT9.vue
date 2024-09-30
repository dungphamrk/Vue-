<template>
  <div>
    <h1>Bài 9</h1>
    <BaseButton type="submit" @onClick="handleSubmit">Submit</BaseButton>
    <BaseButton type="click" @onClick="handleClick">Click</BaseButton>
    <BaseButton type="reset" @onClick="handleReset">Reset</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
</script>

<style>
</style>