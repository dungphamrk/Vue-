<template>
    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between" style="background-color: #f4f6f7;">
      <div>
        <input class="form-check-input me-2" type="checkbox" :checked="isCompleted" />
        <span v-if="isCompleted">
          <s>{{ task }}</s>
        </span>
        <span v-else>
          {{ task }}
        </span>
      </div>
      <div>
        <a href="#!" class="text-info" title="Sửa công việc"><i class="fas fa-pencil-alt me-3"></i></a>
        <a href="#!" class="text-danger" title="Xóa công việc"><i class="fas fa-trash-alt"></i></a>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      task: String,
      isCompleted: Boolean,
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  