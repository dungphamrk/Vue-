<template>
    <button :type="type" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
  });
  
  const emit = defineEmits(['click']);
  
  const handleClick = (event) => {
    emit('click', event);
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    border: 0px solid #000000;
  }
  
  button {
    background-color: #06f0c9;
  }
  </style>
  