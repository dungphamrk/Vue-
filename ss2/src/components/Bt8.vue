<template>
    <div class='mt-[10px] min-h-[100vh] flex flex-col'>
        <h2 class="text-[32px]">Bài 8</h2>
            <header class="w-[100%] text-center bg-gray-300 text-[20px] p-[20px]">Header</header>
            <nav class="w-[100%] text-center bg-gray-600 p-[10px]">Navigation</nav>
            <div class="flex flex-1">
                <aside class="bg-green-500 p-[100px]">Menu</aside>
                <main class="flex-1 grid grid-cols-4 gap-[16px] text-center bg-pink-100 p-[20px]">
                    <div v-for="i in 12" :key="i" class="bg-white p-4">
                        Cart
                    </div>
                </main>
                <article class="bg-blue-500 p-[100px]">Article</article>
            </div>
    </div>
</template>
<script setup>

</script>
<style scoped></style>