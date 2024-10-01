<template>
  <div>
    <h1>Bài 7</h1>
    <div class="form-container">
      <h2>Thêm mới sản phẩm</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="productCode">Mã sản phẩm</label>
          <input
            type="text"
            id="productCode"
            v-model="productCode"
            placeholder="Nhập mã sản phẩm"
          />
        </div>

        <div class="form-group">
          <label for="productName">Tên sản phẩm</label>
          <input
            type="text"
            id="productName"
            v-model="productName"
            placeholder="Nhập tên sản phẩm"
          />
        </div>

        <div class="form-group">
          <label for="price">Giá</label>
          <input
            type="number"
            id="price"
            v-model="price"
            placeholder="Nhập giá"
          />
        </div>

        <div class="form-group">
          <label for="quantity">Số lượng</label>
          <select v-model="quantity" id="quantity">
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>

        <button type="submit" class="submit-button">Thêm mới</button>
      </form>
    </div>
  </div>
</template>
    
    <script setup>
import { ref } from "vue";

const productCode = ref("");
const productName = ref("");
const price = ref("");
const quantity = ref("");
const handleSubmit = () => {
  console.log({
    productCode: productCode.value,
    productName: productName.value,
    price: price.value,
    quantity: quantity.value,
  });
};
</script>
    
    <style scoped>
.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 12px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>