<template>
    <div>
        <h1>Bài 8</h1>
        <button @click="showModal = true">Show Modal</button>
        <ModalForm v-if="showModal" @close="showModal = false">
      
        </ModalForm>
      </div>
</template>

<script setup>
import ModalForm from "./ModalForm.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<style>

</style>