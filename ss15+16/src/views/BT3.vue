<template>
    <div>
      <h1>Bài 3</h1>
      <div class="form-container">
        <h2>Đăng ký tài khoản</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Tên sinh viên</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Nhập tên sinh viên"
            />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              v-model="email"
              placeholder="Nhập email"
            />
          </div>
  
          <div class="form-group">
            <label for="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
  
          <div class="form-group">
            <label for="reassword">Số điện thoại</label>
            <input
              type="password"
              id="phone"
              v-model="phone"
              placeholder="Số điện thoại"
            />
          </div>
          <button type="submit" class="submit-button">Thêm mới</button>
        </form>
      </div>
    </div>
  </template>
        
        <script setup>
  const account = ref(JSON.parse(localStorage.getItem("listAccount")) || []);
  const filterAccount = computed(() => account.value);
  const listEmail = computed(() => filterAccount.value.map((acc) => acc.email));
  import { computed, ref } from "vue";
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const phone = ref("");
  const handleSubmit = () => {
    if (
      name.value.length === 0 ||
      email.value.length === 0 ||
      password.value.length === 0
    ) {
      alert("Các ô dữ liệu không được để trống");
    } else if (listEmail.value.includes(email.value)) {
      alert("Email đã tồn tại");
    } else {
      account.value.push({
        name: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
      });
      localStorage.setItem("listAccount", JSON.stringify(account.value));
      alert("Đăng ký thành công!");
      name.value = "";
      email.value = "";
      password.value = "";
      phone.value = "";
    }
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