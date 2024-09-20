<template>
    <div>
        <h1>Bài 4</h1>
        <div :class="{active: isActive}" :style="{backgroundColor: backgroundColor}">
            <b>Block</b>
        </div>
    </div>
</template>
<script setup>
    const isActive =true;
    const backgroundColor = "blue";
</script>

<style>

</style>