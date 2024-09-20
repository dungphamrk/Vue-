<template>
  <div class="container">
    <div class="image">Image</div>
    <div class="title">Titile</div>
    <div class="addBtn">Add to card</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
    
    justify-content: center;
    align-items: center;
    width: 30%;
    display: flex;
    flex-direction: column;
}
.image{
    padding: 20px;
    height: 70px;
    background-color: gray;
}
.addBtn{
    height: 70px;
    border: 1px solid black;
}
.title{
    height: 70px;

}
</style>