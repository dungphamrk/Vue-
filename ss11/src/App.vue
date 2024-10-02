<template >
  <div class="flex flex-col gap-5">
    <BT1 />
    <BT2 />
    <BT3 />
    <Parent />
    <ParentBt5/>
    <BT7/>
    <BT8/>
    <BT9/>
    <BT10/>
  </div>
</template>

<script setup>
import BT1 from "./components/BT1.vue";
import BT10 from "./components/BT10.vue";
import BT2 from "./components/BT2+6.vue";
import BT3 from "./components/BT3.vue";
import Parent from "./components/BT4/Parent.vue";
import ParentBt5 from "./components/BT5/ParentBt5.vue";
import BT7 from "./components/BT7.vue";
import BT8 from "./components/BT8.vue";
import BT9 from "./components/BT9.vue";
</script>

<style>
</style>