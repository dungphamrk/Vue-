<template>
  <div>
    <h1>Bài 9</h1>
    <h2>Danh sách bài viết</h2>
    <div v-for="post in posts" :key="post.id" class="post-item">
      <p>Id: {{ post.id }}</p>
      <p>Title: {{ post.title }}</p>
      <p>Content: {{ post.content }}</p>
      <p>Author: {{ post.author }}</p>
      <hr />
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from 'vue';
    const  posts = ref ([
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content:
            "Props giúp truyền dữ liệu từ component con xuống component cha",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp giữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ]);

</script>
  

  