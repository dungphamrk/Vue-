<template>
  <div>
    <button @click="$emit(`Increase`)">Increment</button>
  </div>
</template>

<script setup>
    const emits= defineEmits(["Increase"])
</script>

<style>

</style>