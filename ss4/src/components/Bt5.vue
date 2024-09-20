<template>
  <div>
    <h1>Bài 5 -- Giỏ hàng</h1>
    <ol>
      <li>
        Mèn mén loại 1- Số lượng :{{ product.type1 }}
        <button :click="handleIncrease(1)">Tăng số lượng</button>
      </li>
      <li>
        Mèn mén loại 2- Số lượng :{{ product.type2 }}
        <button :click="handleIncrease(2)">Tăng số lượng</button>
      </li>
      <li>
        Mèn mén loại 3- Số lượng :{{ product.type3 }}
        <button :click="handleIncrease(3)">Tăng số lượng</button>
      </li>
    </ol>
    <p>Tổng số lượng {{ totalQuantity }} </p>
  </div>
</template>

<script setup>
import { reactive,computed } from 'vue';

    const product=reactive({
        type1:1,
        type2:1,
        type3:1,
    })
    const handleIncrease=( type)=>{
        switch (type) {
            case 1:
                product.type1++;
                break;
            case 2:
                product.type1++;
                break;
            case 3:
                product.type1++;
                break;
            default:
                break;
        }
    };
    const totalQuantity = computed(() => {
  return product.type1 + product.type2 + product.type3;
});

</script>

<style>
</style>