<template>
  <div>
    <h1>Bài 4</h1>
    <div class="login-container">
      <h2>Đăng nhập tài khoản</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
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

        <button type="submit" class="submit-button">Đăng nhập</button>
        <div v-if="message" class="message">{{ message }}</div>
      </form>
    </div>
  </div>
</template>
          
  <script setup>
import { computed, ref } from "vue";

const account = ref(JSON.parse(localStorage.getItem("listAccount")) || []);

const filterAccount = computed(() => account.value);

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  if (email.value.length === 0 || password.value.length === 0) {
    alert("Các ô dữ liệu không được để trống");
    return;
  }

  const userAccount = account.value.find((acc) => acc.email === email.value);
  if (!userAccount) {
    alert("Email không tồn tại");
  } else if (userAccount.password !== password.value) {
    alert("Mật khẩu không đúng");
  } else {
    alert("Đăng nhập thành công!");
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