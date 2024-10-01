<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <!-- Header -->
      <header class="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button class="btn btn-primary" @click="openForm">
          Thêm mới nhân viên
        </button>
      </header>

      <!-- Search Bar -->
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          v-model="searchQuery"
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo email"
        />
        <font-awesome-icon
          icon="arrows-rotate"
          title="Refresh"
          @click="refresh"
        />
      </div>

      <!-- Employee List -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(employee, index) in filteredEmployees"
            :key="employee.email"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.birthDate }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.address }}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div
                  :class="
                    employee.status === 'active'
                      ? 'status status-active'
                      : 'status status-stop'
                  "
                ></div>
                <span>{{
                  employee.status === "active"
                    ? "Đang hoạt động"
                    : "Ngừng hoạt động"
                }}</span>
              </div>
            </td>
            <td>
              <span @click="confirmBlock(employee)" class="button button-block">
                {{ employee.status === "active" ? "Chặn" : "Bỏ chặn" }}
              </span>
            </td>
            <td>
              <span @click="editEmployee(employee)" class="button button-edit">Sửa</span>
            </td>
            <td>
              <span @click="confirmDelete(employee.email)" class="button button-delete">Xóa</span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Footer with Pagination -->
      <footer class="d-flex justify-content-end align-items-center gap-3">
        <select v-model="recordsPerPage" class="form-select">
          <option value="10">Hiển thị 10 bản ghi trên trang</option>
          <option value="20">Hiển thị 20 bản ghi trên trang</option>
          <option value="50">Hiển thị 50 bản ghi trên trang</option>
          <option value="100">Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
          </li>
        </ul>
      </footer>
    </main>

    <!-- Form for adding/editing employee -->
    <div v-if="showForm" class="overlay">
      <form @submit.prevent="submitForm" class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>
            {{ formMode === "add" ? "Thêm mới nhân viên" : "Chỉnh sửa nhân viên" }}
          </h4>
          <font-awesome-icon icon="xmark" @click="closeForm" />
        </div>
        <div>
          <label class="form-label" for="userName">Họ và tên</label>
          <input
            v-model="form.name"
            id="userName"
            type="text"
            class="form-control"
          />
          <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
        </div>
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input
            v-model="form.birthDate"
            id="dateOfBirth"
            type="date"
            class="form-control"
          />
          <small v-if="errors.birthDate" class="text-danger">{{ errors.birthDate }}</small>
        </div>
        <div>
          <label class="form-label" for="email">Email</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            class="form-control"
          />
          <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
        </div>
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea
            v-model="form.address"
            class="form-control"
            id="address"
            rows="3"
          ></textarea>
          <small v-if="errors.address" class="text-danger">{{ errors.address }}</small>
        </div>
        <div>
          <button class="w-100 btn btn-primary">
            {{ formMode === "add" ? "Thêm mới" : "Lưu thay đổi" }}
          </button>
        </div>
      </form>
    </div>

    <!-- Confirmation Modal for Blocking -->
    <div v-if="showBlockModal" class="overlay">
      <div class="modal-custom">
        <div class="modal-title">
          <h4>Cảnh báo</h4>
          <i class="fa-solid fa-xmark" @click="closeBlockModal"></i>
        </div>
        <div class="modal-body-custom">
          <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="closeBlockModal">Hủy</button>
          <button class="btn btn-danger" @click="blockEmployee">Xác nhận</button>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal for Deleting -->
    <div v-if="showDeleteModal" class="overlay">
      <div class="modal-custom">
        <div class="modal-title">
          <h4>Cảnh báo</h4>
          <i class="fa-solid fa-xmark" @click="closeDeleteModal"></i>
        </div>
        <div class="modal-body-custom">
          <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="closeDeleteModal">Hủy</button>
          <button class="btn btn-danger" @click="deleteConfirmed">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// Data
const employees = ref(JSON.parse(localStorage.getItem("employess")) || []);
// Pagination and state management
const searchQuery = ref("");
const recordsPerPage = ref(10);
const currentPage = ref(1);
const showForm = ref(false);
const form = ref({ name: "", birthDate: "", email: "", address: "" });
const formMode = ref("add");
const today = ref(new Date().toISOString().split("T")[0]);
const showBlockModal = ref(false);
const showDeleteModal = ref(false);
let currentEmployee = ref(null);

// Computed properties
const filteredEmployees = computed(() => {
  if (!searchQuery.value) return employees.value;
  console.log(11111);
  
  return employees.value.filter((emp) =>
    emp.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredEmployees.value.length / recordsPerPage.value)
);
const listEmail = computed(() => filteredEmployees.value.map((acc) => acc.email));
const errors = ref({});
const validateForm = () => {
  errors.value = {};
  if (!form.value.name) {
    errors.value.name = "Họ và tên không được để trống.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.value.email) {
    errors.value.email = "Email không được để trống.";
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = "Email không đúng định dạng.";
  }else if (listEmail.value.includes(form.value.email)) {
    alert("Email đã tồn tại");
  }
  if (!form.value.birthDate) {
    errors.value.birthDate = "Ngày sinh không được để trống.";
  } else if (form.value.birthDate > today.value) {
    errors.value.birthDate = "Ngày sinh không được lớn hơn ngày hiện tại.";
  }
  return Object.keys(errors.value).length === 0;
};

const openForm = () => {
  showForm.value = true;
  formMode.value = "add";
  form.value = { name: "", birthDate: "", email: "", address: "" };
};

const closeForm = () => {
  showForm.value = false;
  errors.value = {};
};

const submitForm = () => {
  if (validateForm()) {
    if (formMode.value === "add") {
      employees.value.push({ ...form.value, status: "active" });
    } else if (formMode.value === "edit") {
      const index = employees.value.findIndex(emp => emp.email === form.value.email);
      if (index !== -1) {
        employees.value[index] = { ...form.value };
      }
    }
    localStorage.setItem("employess", JSON.stringify(employees.value));
    closeForm();
  }
};

const editEmployee = (employee) => {
  form.value = { ...employee };
  formMode.value = "edit";
  showForm.value = true;
};

const confirmDelete = (email) => {
  currentEmployee.value = email;
  showDeleteModal.value = true;
};

const deleteConfirmed = () => {
  employees.value = employees.value.filter((emp) => emp.email !== currentEmployee.value);
  showDeleteModal.value = false;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  currentEmployee.value = null;
};

const confirmBlock = (employee) => {
  currentEmployee.value = employee;
  showBlockModal.value = true;
};

const blockEmployee = () => {
  currentEmployee.value.status = currentEmployee.value.status === "active" ? "inactive" : "active";
  showBlockModal.value = false;
};

const closeBlockModal = () => {
  showBlockModal.value = false;
  currentEmployee.value = null;
};

const refresh = () => {
  searchQuery.value = "";
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value -= 1;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value += 1;
};

const goToPage = (page) => {
  currentPage.value = page;
};
</script>

