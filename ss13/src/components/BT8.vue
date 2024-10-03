<template>
    <v-card>
        <h1>Bài 8</h1>
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <v-tab value="one">Trang chủ</v-tab>
        <v-tab value="two">Giới thiệu</v-tab>
        <v-tab value="three">Liên hệ</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            Trang chủ
          </v-tabs-window-item>
  
          <v-tabs-window-item value="two">
            Giới thiệu
          </v-tabs-window-item>
  
          <v-tabs-window-item value="three">
            Liên hệ
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        tab: null,
      }),
    }
  </script>