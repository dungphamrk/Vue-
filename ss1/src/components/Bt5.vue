<template>
    <div>
        <h2 class="text-[32px]"></h2>
        <ul>
            <li>{{ user.name }}</li>
            <li>{{ user.gender? "Nữ" : "Nam" }}</li>
            <li>{{ user.email }}</li>   
            <li>{{ user.birtDate }}</li>
            
        </ul>
    </div>
</template>
<script setup>
    const user = {
        name: "Nguyễn Văn A",
        gender: 0,
        birtDate: '06/03/2024',
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    }
</script>
<style>
    
</style>