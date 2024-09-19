<template>
  <form @submit.prevent="onSubmit">
    <h1>Bài 7</h1>

    <input type="text" name="" id="">
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
const onSubmit = ()=>{
    console.log("Form submission prevented!");
}

</script>

<style>

</style>