<template>
  <div class="w-[90%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <!-- Header -->
      <header class="d-flex justify-content-between mb-3">
        <h3>Manager Product</h3>
        <button class="btn btn-primary" @click="openForm">
          Add New Product
        </button>
      </header>

      <!-- Search Bar -->
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          v-model="searchQuery"
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Find"
        />
        <font-awesome-icon
          icon="arrows-rotate"
          title="Refresh"
          @click="refresh"
        />
      </div>

      <!-- Product List -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colspan="2">Option</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in filteredProducts" :key="product.name">
            <td>{{ index + 1 }}</td>
            <td>
              <img
                :src="product.image"
                alt="Product Image"
                style="width: 70px"
              />
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>
              <span @click="editProduct(product)" class="button button-edit"
                >Edit</span
              >
            </td>
            <td>
              <span
                @click="confirmDelete(product.name)"
                class="button button-delete"
                >Delete</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <div v-if="showForm" class="overlay">
      <form @submit.prevent="submitForm" class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>{{ formMode === "add" ? "Add New Product" : "Edit Product" }}</h4>
          <font-awesome-icon icon="xmark" @click="closeForm" />
        </div>
        <div>
          <label class="form-label" for="productName">Name</label>
          <input
            v-model="form.name"
            id="productName"
            type="text"
            class="form-control"
          />
          <small v-if="errors.name" class="text-danger">{{
            errors.name
          }}</small>
        </div>
        <div>
          <label class="form-label" for="image">Image</label>
          <input
            v-model="form.image"
            id="image"
            type="text"
            class="form-control"
            placeholder="Link hình ảnh"
          />
        </div>
        <div>
          <label class="form-label" for="price">Price</label>
          <input
            v-model="form.price"
            id="price"
            type="number"
            class="form-control"
          />
          <small v-if="errors.price" class="text-danger">{{
            errors.price
          }}</small>
        </div>
        <div>
          <label class="form-label" for="quantity">Quantity</label>
          <input
            v-model="form.quantity"
            id="quantity"
            type="number"
            class="form-control"
          />
          <small v-if="errors.quantity" class="text-danger">{{
            errors.quantity
          }}</small>
        </div>
        <div>
          <button class="w-100 btn btn-primary">
            {{ formMode === "add" ? "Add" : "Save" }}
          </button>
        </div>
      </form>
    </div>
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

const products = ref(JSON.parse(localStorage.getItem("products")) || []);
const searchQuery = ref("");
const showForm = ref(false);
const form = ref({ name: "", image: "", price: 0, quantity: 0 });
const formMode = ref("add");
const showDeleteModal = ref(false);
let currentProduct = ref(null);

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const listProductNames = computed(() =>
  filteredProducts.value.map((product) => product.name)
);


const errors = ref({});
const validateForm = () => {
  errors.value = {};

  if (!form.value.name) {
    errors.value.name = "Tên sản phẩm không được để trống.";
  } 
  else if (
    formMode.value === "add" && 
    listProductNames.value.some((product) => product === form.value.name)
  ) {
    errors.value.name = "Tên sản phẩm không được trùng.";
  }

  console.log(form.value.name);
  console.log(listProductNames.value);

  if (!form.value.image) {
    errors.value.image = "Hình ảnh sản phẩm không được để trống.";
  }

  if (!form.value.price || form.value.price < 10000) {
    errors.value.price = "Giá sản phẩm phải tối thiểu là 10,000₫.";
  }

  if (!form.value.quantity || form.value.quantity < 1 || form.value.quantity > 100) {
    errors.value.quantity = "Số lượng sản phẩm phải từ 1 đến 100.";
  }

  return Object.keys(errors.value).length === 0;
};



const openForm = () => {
  showForm.value = true;
  formMode.value = "add";
  form.value = { name: "", image: "", price: 0, quantity: 0 };
};

const closeForm = () => {
  showForm.value = false;
  errors.value = {};
};

const submitForm = () => {
  if (validateForm()) {
    if (formMode.value === "add") {
      products.value.push({ ...form.value, status: "active" });
    } else if (formMode.value === "edit") {
      const index = products.value.findIndex(
        (product) => product.name === form.value.name
      );
      if (index !== -1) {
        products.value[index] = { ...form.value };
      }
    }
    localStorage.setItem("products", JSON.stringify(products.value));
    closeForm();
  }
};

const editProduct = (product) => {
  form.value = { ...product };
  formMode.value = "edit";
  showForm.value = true;
};

const confirmDelete = (name) => {
  currentProduct.value = name;
  showDeleteModal.value = true;
};

const deleteConfirmed = () => {
  products.value = products.value.filter(
    (product) => product.name !== currentProduct.value
  );
   localStorage.setItem("products", JSON.stringify(products.value));
  showDeleteModal.value = false;
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
  currentProduct.value = null;
};



const refresh = () => {
  searchQuery.value = "";
};
</script>
  
