<template>
  <input :value="inputValue" @keyup.enter="printNotification" type="text" name="" id="">
</template>

<script setup>
import { ref } from 'vue';

    const inputValue= ref('')
    const printNotification = (e)=>{
        if (e.shirfKey) {
            alert(inputValue)
        }else{
            alert('bạn cần nhấm cả shirf và enter')
        }
    }
</script>

<style>

</style>