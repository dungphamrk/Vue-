<template>
    <div>
        <h1>Bài 6</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal v-if="showModal" @close="showModal = false">
          <template #header>
            <h3>Thông tin sản phẩm</h3>
          </template>
          <template #body>
            <p>
             Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật với giá cả hợp lý
            </p>
          </template>
          <template #btn>
            Xem chi tiết
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