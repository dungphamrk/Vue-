<template>
  <ChildrenComponent :propName="parentData"/>
</template>

<script setup>
    import {ref} from 'vue';
import ChildrenComponent from './ChildrenComponent.vue';
    const parentData= ref("Rikkei Soft")
</script>

<style>

</style>