<template>
    <div class="container">
      <form @submit.prevent="onSubmit" class="form">
        <h2>Quản lý công việc</h2>
        <div class="nav">
          <input type="text" placeholder="Nhập công việc" v-model="valueInput" class="input-task" />
          <button
            type="submit"
            @click="addTask"
            class="btn-add"
          >
            Thêm
          </button>
        </div>
        <div v-if="notify" class="error-message">Công việc không được để trống</div>
        <div class="filter-buttons" >
          <button  @click="setFilter('all')" :class="{ active: filterStatus === 'all' }">Tất cả</button>
          <button    @click="setFilter('inProgress')" :class="{ active: filterStatus === 'inProgress' }">Đang thực hiện</button>
          <button  @click="setFilter('completed')" :class="{ active: filterStatus === 'completed' }">Đã hoàn thành</button>
        </div>
        <div v-if="filteredTasks.length > 0" class="list">
          <div class="list-item" :class="{ completed: btn.status }" v-for="(btn, index) in filteredTasks" :key="index">
            <div class="task-detail">
              <input
                @click="handleTask(btn.id)"
                :checked="btn.status"
                type="checkbox"
              />
              <span>{{ btn.detail }}</span>
            </div>
            <button
              @click="handleDelete(btn.id)"
              class="btn-delete"
            >
              Delete
            </button>
          </div>
        </div>
  
        <p class="task-summary">
          Số công việc hoàn thành: {{ taskDone }}/{{ list.length }} công việc
        </p>
        <div class="delete-buttons">
            <button @click="deleteCompleted" class="btn-delete-completed">
              Xóa công việc hoàn thành
            </button>
            <button @click="deleteAllTasks" class="btn-delete-all">
              Xóa tất cả công việc
            </button>
          </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, onMounted } from "vue";
  
  const list = ref([]);
  const valueInput = ref("");
  const notify = ref(false);
  const filterStatus = ref('all');
  onMounted(async () => {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    list.value = data;
  });
  const taskDone = computed(() => list.value.filter((btn) => btn.status).length);
  const filteredTasks = computed(() => {
    if (filterStatus.value === 'all') return list.value;
    if (filterStatus.value === 'inProgress') return list.value.filter(task => !task.status);
    if (filterStatus.value === 'completed') return list.value.filter(task => task.status);
  });
  const setFilter = (status) => {
    filterStatus.value = status;
  };
  const addTask = async () => {
    if (valueInput.value) {
      let newTask = {
        id: Math.floor(Math.random() * 100000000),
        detail: valueInput.value,
        status: false,
      };
  
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
  
      if (response.ok) {
        const createdTask = await response.json();
        list.value.push(createdTask);
        valueInput.value = "";
      }
    } else {
      notify.value = true;
    }
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
  
    list.value = list.value.filter((btn) => btn.id !== id);
  };
  const handleTask = async (id) => {
    const task = list.value.find((btn) => btn.id === id);
    const updatedTask = { ...task, status: !task.status };
  
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
  
    task.status = !task.status;
  };
  const deleteCompleted = async () => {
    const completedTasks = list.value.filter(task => task.status);
    for (const task of completedTasks) {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'DELETE',
      });
    }
  
    list.value = list.value.filter((task) => !task.status);
  };

  const deleteAllTasks = async () => {
    for (const task of list.value) {
      await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'DELETE',
      });
    }
  
    list.value = [];
  };
  </script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 10px;
  border: 1px solid rgb(207, 203, 203);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: #fff;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-task {
  flex: 1;
  padding: 10px;
  border: 1px solid rgb(198, 190, 190);
  border-radius: 5px;
  margin-right: 10px;
}

.input-task:focus {
  outline: none;
}

.btn-add {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-add:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 14px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.filter-buttons button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: lightgray;
}

.filter-buttons button.active {
  background-color: #007bff;
  color: white;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.task-detail {
  display: flex;
  gap: 10px;
  align-items: center;
}

.completed span {
  text-decoration: line-through;
  color: #999;
}

.btn-delete {
  background-color: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: darkred;
}

.delete-buttons {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 10px;
}

.btn-delete-completed,
.btn-delete-all {
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-delete-completed:hover,
.btn-delete-all:hover {
  background-color: darkred;
}

.task-summary {
  background-color: rgb(198, 190, 190);
  padding: 5px;
  text-align: center;
  border-radius: 5px;
}
</style>

  