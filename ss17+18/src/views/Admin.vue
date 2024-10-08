<template>
    <div>
      <h1>Admin Page</h1>
      <nav>
        <router-link to="/admin/manager-user">Users</router-link> |
        <router-link to="/admin/manager-product">Products</router-link> |
        <router-link to="/admin/settings">Settings</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>

  

  </style>
  