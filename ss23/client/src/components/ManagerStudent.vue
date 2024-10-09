<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <!-- Header -->
      <header class="d-flex justify-content-between mb-3">
        <h3>Quản lý sinh viên</h3>
        <button class="btn btn-primary" @click="openForm">
          Thêm mới sinh viên
        </button>
      </header>

      <!-- Search Bar -->
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          v-model="searchQuery"
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo tên sinh viên"
        />
        <font-awesome-icon
          icon="arrows-rotate"
          title="Refresh"
          @click="refresh"
        />
      </div>

      <!-- Students List -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in filteredStudents" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.student_name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.address }}</td>
            <td>
              <span @click="editStudent(student)" class="button button-edit"
                >Sửa</span
              >
            </td>
            <td>
              <span @click="confirmDelete(student)" class="button button-delete"
                >Xóa</span
              >
            </td>
          </tr>
        </tbody>
      </table>

    </main>

    <!-- Form for adding/editing students -->
    <div v-if="showForm" class="overlay">
      <form @submit.prevent="submitForm" class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>
            {{
              formMode === "add" ? "Thêm mới sinh viên" : "Chỉnh sửa sinh viên"
            }}
          </h4>
          <font-awesome-icon icon="xmark" @click="closeForm" />
        </div>
        <div>
          <label class="form-label" for="studentName">Tên sinh viên</label>
          <input
            v-model="form.student_name"
            id="studentName"
            type="text"
            class="form-control"
          />
          <small v-if="errors.student_name" class="text-danger">{{
            errors.student_name
          }}</small>
        </div>
        <div>
          <label class="form-label" for="email">Email</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            class="form-control"
          />
          <small v-if="errors.email" class="text-danger">{{
            errors.email
          }}</small>
        </div>
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <input
            v-model="form.address"
            id="address"
            type="text"
            class="form-control"
          />
          <small v-if="errors.address" class="text-danger">{{
            errors.address
          }}</small>
        </div>
        <div>
          <button class="w-100 btn btn-primary">
            {{ formMode === "add" ? "Thêm mới" : "Lưu thay đổi" }}
          </button>
        </div>
      </form>
    </div>

    <!-- Confirmation Modal for Deleting -->
    <div v-if="showDeleteModal" class="overlay">
      <div class="modal-custom">
        <div class="modal-title">
          <h4>Cảnh báo</h4>
          <i class="fa-solid fa-xmark" @click="closeDeleteModal"></i>
        </div>
        <div class="modal-body-custom">
          <span>Bạn có chắc chắn muốn xóa sinh viên này?</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="closeDeleteModal">Hủy</button>
          <button class="btn btn-danger" @click="deleteStudent">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const students = ref([]);
const searchQuery = ref("");
const recordsPerPage = ref(10);
const showForm = ref(false);
const form = ref({ student_name: "", email: "", address: "" });
const formMode = ref("add");
const showDeleteModal = ref(false);
let currentStudent = ref(null);
const errors = ref({});

const fetchStudents = async () => {
  try {
    const response = await axios.get("http://localhost:3000/students");
    students.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
const filteredStudents = computed(() => {
  if (!searchQuery.value) return students.value;
  return students.value.filter((student) =>
    student.student_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
const totalPages = computed(() =>
  Math.ceil(filteredStudents.value.length / recordsPerPage.value)
);

const validateForm = () => {
  errors.value = {};
  if (!form.value.student_name) {
    errors.value.student_name = "Tên sinh viên không được để trống.";
  }
  if (!form.value.email || !form.value.email.includes("@")) {
    errors.value.email = "Email không hợp lệ.";
  }
  if (!form.value.address) {
    errors.value.address = "Địa chỉ không được để trống.";
  }
  return Object.keys(errors.value).length === 0;
};

const addStudent = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/students",
      form.value
    );
    students.value.push(response.data);
    closeForm();
  } catch (error) {
    console.error(error);
  }
};

const updateStudent = async () => {
  try {
    await axios.put(
      `http://localhost:3000/students/${form.value.id}`,
      form.value
    );
    const index = students.value.findIndex(
      (student) => student.id === form.value.id
    );
    if (index !== -1) students.value[index] = { ...form.value };
    closeForm();
  } catch (error) {
    console.error(error);
  }
};

const submitForm = () => {
  if (validateForm()) {
    if (formMode.value === "add") {
      addStudent();
    } else {
      updateStudent();
    }
  }
};

const openForm = () => {
  showForm.value = true;
  formMode.value = "add";
  form.value = { student_name: "", email: "", address: "" };
};

const closeForm = () => {
  showForm.value = false;
  errors.value = {};
};

const editStudent = (student) => {
  form.value = { ...student };
  formMode.value = "edit";
  showForm.value = true;
};
const deleteStudent = async () => {
  try {
    await axios.delete(
      `http://localhost:3000/students/${currentStudent.value.id}`
    );
    students.value = students.value.filter(
      (std) => std.id !== currentStudent.value.id
    );
    closeDeleteModal();
  } catch (error) {
    console.error(error);
  }
};
const confirmDelete = (student) => {
  currentStudent.value = student;
  showDeleteModal.value = true;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  currentStudent.value = null;
};

const refresh = () => {
  searchQuery.value = "";
};
onMounted(() => {
  fetchStudents();
});
</script>
  