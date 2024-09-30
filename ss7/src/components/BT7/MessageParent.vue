<template>
    <div>
      <h1>Bài 7</h1>
      <MessageChildren @messeage="handleMessage"/>
    </div>
  </template>
  
  <script setup>
  import MessageChildren from './MessageChildren.vue';
  const handleMessage =()=>{
      alert("welcome")
  }
  
  </script>
  
  <style>
  
  </style>