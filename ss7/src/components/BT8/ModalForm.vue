<template>
  <div class="modal-mask" v-if="isVisible">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Form Add User</h3>
        </div>
        <div class="modal-body">
          <div class="inputForm">
            <label for="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div class="inputForm">
            <label for="email">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div class="inputForm">
            <label for="address">Address</label>
            <input type="text" name="address" id="" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-close" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const emit = defineEmits(["close"]);
const isVisible = ref(true);

const closeModal = () => {
  isVisible.value = false;
  emit("close");
};
</script>
  
  <style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal-container {
  width: 300px;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: center;
}

.close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.inputForm{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
  