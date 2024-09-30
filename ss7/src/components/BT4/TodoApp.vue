<template>
    <div>
      <button @click="$emit(`Delete`)">Delete</button>
    </div>
  </template>
  
  <script setup>
      const emits= defineEmits(["Delete"])
  </script>
  
  <style>
  
  </style>