<template>
    <div class="flex min-h-[100vh]">
      <div class="w-64 bg-gray-800 text-white min-h-full">
        <ul class="space-y-4 p-4 min-h-full">
          <li>
            <button
              class="w-full text-left hover:bg-gray-700 p-2 rounded"
              @click="navigateTo('/admin')"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              class="w-full text-left hover:bg-gray-700 p-2 rounded"
              @click="navigateTo('/admin/manager-category')"
            >
              Category
            </button>
          </li>
          <li>
            <button
              class="w-full text-left hover:bg-gray-700 p-2 rounded"
              @click="navigateTo('/admin/manager-product')"
            >
              Product
            </button>
          </li>
        </ul>
      </div>
      <div class="flex-1 p-6 bg-gray-100">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  };
  </script>
  