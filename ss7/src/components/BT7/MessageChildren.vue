<template>
    <div>
      <button @click="$emit(`messeage`)">messeage</button>
    </div>
  </template>
  
  <script setup>
      const emits= defineEmits(["messeage"])
  </script>
  
  <style>
  
  </style>