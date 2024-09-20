<template>
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card">
              <div class="card-body p-5">
                <h3 class="text-center mb-4">Quản lý công việc</h3>
                <TodoInput />
                <Tabs />
                <ul class="list-group mb-0">
                  <TodoItem task="Cras justo odio" :isCompleted="true" />
                  <TodoItem task="Cras justo odio" :isCompleted="false" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import TodoInput from './components/TodoInput.vue';
  import TodoItem from './components/TodoItem.vue';
  import Tabs from './components/Tabs.vue';
  
  export default {
    components: {
      TodoInput,
      TodoItem,
      Tabs,
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  