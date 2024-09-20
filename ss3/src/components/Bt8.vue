<template>
  <div>
    <h1>Bài 8</h1>
    <a @click.stop.prevent="checkUrl" href="https://www.google.com">Link đúng</a>
    <a @click.stop.prevent="checkUrl" href="http://www.google.com">Link lỗi</a>
  </div>
</template>

<script setup>
const checkUrl =(e)=>{
    const href= e.target.href;
    if (href.startWith("https")) {
        window.location.href=href;
    }else{
        alert("Link lỗi")
    }
}
</script>

<style>

</style>