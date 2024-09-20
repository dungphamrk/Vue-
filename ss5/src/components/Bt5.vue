<template>
  <div>
    <h1>Bài 5</h1>
    <b>Các số chẵn trong mảng: </b>
    <div v-for="(value,index) in array" :key="index">
       <p v-show="value%2==0"> {{value}}</p> 
    </div>
  </div>
</template>

<script>
    const array= [1,2,3,4,5,6,7,8,9,10];

</script>

<style>

</style>