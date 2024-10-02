<template>
  <div class="w-[88%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <!-- Header -->
      <header class="d-flex justify-content-between mb-3">
        <h3>Quản lý mượn trả sách</h3>
        <button class="btn btn-primary" @click="openForm">
          Thêm thông tin
        </button>
      </header>

      <!-- Search Bar -->
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <section>
          <select
            v-model="searchQuery"
            class="form-control"
            style="width: 350px"
          >
            <option value="">Lọc theo trạng thái</option>
            <option value="1">Đã trả</option>
            <option value="2">Chưa trả</option>
          </select>
        </section>
        <font-awesome-icon
          icon="arrows-rotate"
          title="Refresh"
          @click="refresh"
        />
      </div>

      <!-- book List -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Sinh viên mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng thái</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in filteredbooks" :key="book.backDate">
            <td>{{ index + 1 }}</td>
            <td>{{ book.bookName }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.borrowDate }}</td>
            <td>{{ book.backDate }}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div
                  :class="
                    book.status === 'active'
                      ? 'status status-active'
                      : 'status status-stop'
                  "
                ></div>
                <span class="button button-block">
                  {{ book.status === "active" ? "Đã trả" : "Chưa trả" }}
                </span>
              </div>
            </td>

            <td>
              <span @click="editbook(book)" class="button button-edit"
                >Sửa</span
              >
            </td>
            <td>
              <span
                @click="confirmDelete(book.backDate)"
                class="button button-delete"
                >Xóa</span
              >
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
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
              page
            }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
          </li>
        </ul>
      </footer>
    </main>

    <!-- Form for adding/editing book -->
    <div v-if="showForm" class="overlay">
      <form @submit.prevent="submitForm" class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>
            {{
              formMode === "add"
                ? "Thêm mới thông tin mượn sách"
                : "Cập nhập tin mượn sách"
            }}
          </h4>
          <font-awesome-icon icon="xmark" @click="closeForm" />
        </div>
        <div>
          <label class="form-label" for="bookName">Tên sách</label>
          <input
            v-model="form.bookName"
            id="bookName"
            type="text"
            class="form-control"
          />
          <small v-if="errors.bookName" class="text-danger">{{
            errors.bookName
          }}</small>
        </div>
        <div>
          <label class="form-label" for="name">Sinh viên mượn</label>
          <input
            v-model="form.name"
            class="form-control"
            id="name"
            type="text"
          />
          <small v-if="errors.name" class="text-danger">{{
            errors.name
          }}</small>
        </div>
        <div>
          <label class="form-label" for="borrowDate">Ngày mượn</label>
          <input
            v-model="form.borrowDate"
            id="borrowDate"
            type="date"
            class="form-control"
          />
          <small v-if="errors.borrowDate" class="text-danger">{{
            errors.borrowDate
          }}</small>
        </div>
        <div>
          <label class="form-label" for="backDate">Ngày trả</label>
          <input
            v-model="form.backDate"
            id="backDate"
            type="date"
            class="form-control"
          />
          <small v-if="errors.backDate" class="text-danger">{{
            errors.backDate
          }}</small>
        </div>

        <div>
          <button class="w-100 btn btn-primary">
            {{ formMode === "add" ? "Thêm mới" : "Lưu thay đổi" }}
          </button>
        </div>
      </form>
    </div>

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
          <button class="btn btn-danger" @click="blockBook">Xác nhận</button>
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
          <button class="btn btn-danger" @click="deleteConfirmed">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// Data
const books = ref(JSON.parse(localStorage.getItem("books")) || []);
const searchQuery = ref("");
const recordsPerPage = ref(10);
const currentPage = ref(1);
const showForm = ref(false);
const form = ref({ bookName: "", borrowDate: "", backDate: "", name: "" });
const formMode = ref("add");
const today = ref(new Date().toISOString().split("T")[0]);
const showBlockModal = ref(false);
const showDeleteModal = ref(false);
let currentBook = ref(null);

// Computed properties
const filteredbooks = computed(() => {
  if (!searchQuery.value) return books.value;
  if (searchQuery.value == 1) {
    return books.value.filter((emp) =>
      emp.status=="active"
    );
  }
  return books.value.filter((emp) =>
      emp.status=="inactive"
    );
});

const totalPages = computed(() =>
  Math.ceil(filteredbooks.value.length / recordsPerPage.value)
);
const listbackDate = computed(() =>
  filteredbooks.value.map((acc) => acc.backDate)
);
const errors = ref({});
const validateForm = () => {
  errors.value = {};
  if (!form.value.bookName) {
    errors.value.bookName = "Tên sách ko được để trống";
  }
  if (!form.value.name) {
    errors.value.name = "Tên người mượn ko được để trống";
  }
  if (!form.value.borrowDate) {
    errors.value.borrowDate = "Ngày mượn không được để trống.";
  } else if (form.value.borrowDate > today.value) {
    errors.value.borrowDate = "Ngày mượn không được lớn hơn ngày hiện tại.";
  }
  if (!form.value.backDate) {
    errors.value.backDate = "Ngày trả không được để trống.";
  } else if (form.value.backDate < form.value.borrowDate) {
    errors.value.backDate = "Ngày trả không được nhỏ hơn ngày mượn.";
  }
  return Object.keys(errors.value).length === 0;
};

const openForm = () => {
  showForm.value = true;
  formMode.value = "add";
  form.value = { bookName: "", borrowDate: "", backDate: "", name: "" };
};

const closeForm = () => {
  showForm.value = false;
  errors.value = {};
};

const submitForm = () => {
  if (validateForm()) {
    if (formMode.value === "add") {
      books.value.push({
        ...form.value,
        status: today.value > form.value.backDate ? "active" : "inactive",
      });
    } else if (formMode.value === "edit") {
      const index = books.value.findIndex(
        (emp) => emp.backDate === form.value.backDate
      );
      if (index !== -1) {
        books.value[index] = { ...form.value };
      }
    }
    localStorage.setItem("books", JSON.stringify(books.value));
    closeForm();
  }
};

const editbook = (book) => {
  form.value = { ...book };
  formMode.value = "edit";
  showForm.value = true;
};

const confirmDelete = (backDate) => {
  currentBook.value = backDate;
  showDeleteModal.value = true;
};

const deleteConfirmed = () => {
  books.value = books.value.filter((emp) => emp.backDate !== currentBook.value);
  showDeleteModal.value = false;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  currentBook.value = null;
};



const blockBook = () => {
  currentBook.value.status =
    currentBook.value.status === "active" ? "inactive" : "active";
  showBlockModal.value = false;
};

const closeBlockModal = () => {
  showBlockModal.value = false;
  currentBook.value = null;
};

const refresh = () => {
  searchQuery.value = "";
};
</script>

