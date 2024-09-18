<template>
    <div id="app" class="container mx-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="w-full bg-gray-200 text-left">
            <th class="px-4 py-2 border">STT</th>
            <th class="px-4 py-2 border">Họ và tên</th>
            <th class="px-4 py-2 border">Ngày sinh</th>
            <th class="px-4 py-2 border">Giới tính</th>
            <th class="px-4 py-2 border">Địa chỉ</th>
            <th class="px-4 py-2 border">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index" class="border-b hover:bg-gray-100">
            <td class="px-4 py-2 border">{{ index + 1 }}</td>
            <td class="px-4 py-2 border">{{ person.name }}</td>
            <td class="px-4 py-2 border">{{ person.dob }}</td>
            <td class="px-4 py-2 border">{{ person.gender }}</td>
            <td class="px-4 py-2 border">{{ person.address }}</td>
            <td class="px-4 py-2 border">
              <button @click="editPerson(index)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sửa
              </button>
              <button @click="deletePerson(index)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const people = ref([
        { name: 'Malcolm Lockyer', dob: '21/03/1961', gender: 'Nam', address: 'New York' },
        { name: 'Maria', dob: '11/02/1990', gender: 'Nữ', address: 'London' },
      ]);
  
      const editPerson = (index) => {
        alert('Sửa thông tin: ' + people.value[index].name);
      };
  
      const deletePerson = (index) => {
        people.value.splice(index, 1);
      };
  
      return {
        people,
        editPerson,
        deletePerson,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Thêm bất kỳ style tùy chỉnh nào */
  </style>
  