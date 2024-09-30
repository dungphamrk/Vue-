<template>
    <div>
        <h1>Bài 5</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal v-if="showModal" @close="showModal = false">
          <template #header>
            <h3>Thông báo từ hệ thống</h3>
          </template>
          <template #body>
            <p>
              Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào
              nút Close.
            </p>
          </template>
          <template #btn>
              Close
            </template>
        </Modal>
      </div>
</template>

<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<style>

</style>