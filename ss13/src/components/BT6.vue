<template>
  <div class="pa-4">
    <h1>Bài 6</h1>
    <v-btn @click="dialog = true"> Xác nhận </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ được cập"
        title="Xác nhận"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Xác nhận"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
  <script setup>
import { ref } from "vue";

const dialog = ref(true);
</script>