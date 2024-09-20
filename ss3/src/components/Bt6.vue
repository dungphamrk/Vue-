<template>
    <div>
    <h1>Bài 6</h1>

        <button @click="handleClick(`RikkeiAcademy`)">Get param</button>
    </div>
</template>

<script setup>
    const handleClick = (company )=>{ 
        console.log(company);
    };
</script>

<style>

</style>