<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <!-- Header -->
      <header class="d-flex justify-content-between mb-3">
        <h3>Sản phẩm</h3>
        <button class="btn btn-primary" @click="openForm">
          Thêm mới sản phẩm
        </button>
      </header>

      <!-- Search Bar -->
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          v-model="searchQuery"
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo tên sản phẩm"
        />
        <font-awesome-icon
          icon="arrows-rotate"
          title="Refresh"
          @click="refresh"
        />
      </div>

      <!-- Products List -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá sản phẩm</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in filteredProducts"
            :key="product.id"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>
              <span @click="editProduct(product)" class="button button-edit">Sửa</span>
            </td>
            <td>
              <span @click="confirmDelete(product)" class="button button-delete">Xóa</span>
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

    <!-- Form for adding/editing products -->
    <div v-if="showForm" class="overlay">
      <form @submit.prevent="submitForm" class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>
            {{ formMode === "add" ? "Thêm mới sản phẩm" : "Chỉnh sửa sản phẩm" }}
          </h4>
          <font-awesome-icon icon="xmark" @click="closeForm" />
        </div>
        <div>
          <label class="form-label" for="productName">Tên sản phẩm</label>
          <input
            v-model="form.name"
            id="productName"
            type="text"
            class="form-control"
          />
          <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
        </div>
        <div>
          <label class="form-label" for="quantity">Số lượng</label>
          <input
            v-model="form.quantity"
            id="quantity"
            type="number"
            class="form-control"
          />
          <small v-if="errors.quantity" class="text-danger">{{ errors.quantity }}</small>
        </div>
        <div>
          <label class="form-label" for="price">Giá sản phẩm</label>
          <input
            v-model="form.price"
            id="price"
            type="number"
            class="form-control"
          />
          <small v-if="errors.price" class="text-danger">{{ errors.price }}</small>
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
          <span>Bạn có chắc chắn muốn xóa sản phẩm này?</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="closeDeleteModal">Hủy</button>
          <button class="btn btn-danger" @click="deleteProduct">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios"; 

const products = ref([]);
const searchQuery = ref("");
const recordsPerPage = ref(10);
const showForm = ref(false);
const form = ref({ name: "", price: 0, quantity: 0 });
const formMode = ref("add");
const showDeleteModal = ref(false);
let currentProduct = ref(null);
const errors = ref({});

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / recordsPerPage.value));

const validateForm = () => {
  errors.value = {};
  if (!form.value.name) {
    errors.value.name = "Tên sản phẩm không được để trống.";
  }
  if (!form.value.price || form.value.price <= 0) {
    errors.value.price = "Giá sản phẩm phải lớn hơn 0.";
  }
  if (!form.value.quantity || form.value.quantity < 0) {
    errors.value.quantity = "Số lượng không hợp lệ.";
  }
  return Object.keys(errors.value).length === 0;
};

const addProduct = async () => {
  try {
    const response = await axios.post("http://localhost:3000/products", form.value);
    products.value.push(response.data);
    closeForm();
  } catch (error) {
    console.error(error);
  }
};

const updateProduct = async () => {
  try {
    await axios.put(`http://localhost:3000/products/${form.value.id}`, form.value);
    const index = products.value.findIndex(product => product.id === form.value.id);
    if (index !== -1) products.value[index] = { ...form.value };
    closeForm();
  } catch (error) {
    console.error(error);
  }
};

const submitForm = () => {
  if (validateForm()) {
    if (formMode.value === "add") {
      addProduct();
    } else {
      updateProduct();
    }
  }
};

const openForm = () => {
  showForm.value = true;
  formMode.value = "add";
  form.value = { name: "", price: 0, quantity: 0 };
};

const closeForm = () => {
  showForm.value = false;
  errors.value = {};
};

const editProduct = (product) => {
  form.value = { ...product };
  formMode.value = "edit";
  showForm.value = true;
};

const deleteProduct = async () => {
  try {
    await axios.delete(`http://localhost:3000/products/${currentProduct.value.id}`);
    products.value = products.value.filter((prod) => prod.id !== currentProduct.value.id);
    closeDeleteModal();
  } catch (error) {
    console.error(error);
  }
};

const confirmDelete = (product) => {
  currentProduct.value = product;
  showDeleteModal.value = true;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  currentProduct.value = null;
};

const refresh = () => {
  searchQuery.value = "";
};

onMounted(() => {
  fetchProducts();
});
</script>
