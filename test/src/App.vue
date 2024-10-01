<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <!-- Header -->
      <header class="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button class="btn btn-primary " @click="openForm">Thêm mới nhân viên</button>
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
        <i class="fa-solid fa-arrows-rotate" title="Refresh" @click="refresh"></i>
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
          <tr v-for="(employee, index) in filteredEmployees" :key="employee.email">
            <td>{{ index + 1 }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.birthDate }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.address }}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div :class="employee.status === 'active' ? 'status status-active' : 'status status-stop'"></div>
                <span>{{ employee.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động' }}</span>
              </div>
            </td>
            <td>
              <span @click="toggleBlock(employee)" class="button button-block">
                {{ employee.status === 'active' ? 'Chặn' : 'Bỏ chặn' }}
              </span>
            </td>
            <td>
              <span @click="editEmployee(employee)" class="button button-edit">Sửa</span>
            </td>
            <td>
              <span @click="deleteEmployee(employee.email)" class="button button-delete">Xóa</span>
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
          <h4>{{ formMode === 'add' ? 'Thêm mới nhân viên' : 'Chỉnh sửa nhân viên' }}</h4>
          <i class="fa-solid fa-xmark" @click="closeForm"></i>
        </div>
        <div>
          <label class="form-label" for="userName">Họ và tên</label>
          <input v-model="form.name" id="userName" type="text" class="form-control" />
        </div>
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input v-model="form.birthDate" id="dateOfBirth" type="date" class="form-control" />
        </div>
        <div>
          <label class="form-label" for="email">Email</label>
          <input v-model="form.email" id="email" type="email" class="form-control" />
        </div>
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea v-model="form.address" class="form-control" id="address" rows="3"></textarea>
        </div>
        <div>
          <button class="w-100 btn btn-primary">{{ formMode === 'add' ? 'Thêm mới' : 'Lưu thay đổi' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Data
const employees = ref([
  { name: 'Nguyễn Văn A', birthDate: '1990-02-28', email: 'nvana@gmail.com', address: 'Ba Đình, Hà Nội', status: 'active' },
  { name: 'Trần Thị B', birthDate: '1985-07-15', email: 'ttb@gmail.com', address: 'Cầu Giấy, Hà Nội', status: 'inactive' },
  { name: 'Lê Văn C', birthDate: '2000-10-03', email: 'lvc@gmail.com', address: 'Hai Bà Trưng, Hà Nội', status: 'inactive' },
  { name: 'Phạm Thị D', birthDate: '1995-05-20', email: 'ptd@gmail.com', address: 'Hoàn Kiếm, Hà Nội', status: 'active' },
  { name: 'Ngô Văn E', birthDate: '1988-11-12', email: 'nve@gmail.com', address: 'Cầu Giấy, Hà Nội', status: 'active' },
])

// Pagination and state management
const searchQuery = ref('')
const recordsPerPage = ref(10)
const currentPage = ref(1)
const showForm = ref(false)
const form = ref({ name: '', birthDate: '', email: '', address: '' })
const formMode = ref('add')

// Computed properties
const filteredEmployees = computed(() => {
  if (!searchQuery.value) return employees.value
  return employees.value.filter(emp =>
    emp.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
const totalPages = computed(() => Math.ceil(filteredEmployees.value.length / recordsPerPage.value))

// Methods
const openForm = () => {
  showForm.value = true
  formMode.value = 'add'
  form.value = { name: '', birthDate: '', email: '', address: '' }
}

const closeForm = () => {
  showForm.value = false
}

const submitForm = () => {
  if (formMode.value === 'add') {
    employees.value.push({ ...form.value, status: 'active' })
  }
  closeForm()
}

const editEmployee = employee => {
  form.value = { ...employee }
  formMode.value = 'edit'
  showForm.value = true
}

const deleteEmployee = email => {
  employees.value = employees.value.filter(emp => emp.email !== email)
}

const toggleBlock = employee => {
  employee.status = employee.status === 'active' ? 'inactive' : 'active'
}

const refresh = () => {
  searchQuery.value = ''
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value -= 1
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value += 1
}

const goToPage = page => {
  currentPage.value = page
}
</script>

