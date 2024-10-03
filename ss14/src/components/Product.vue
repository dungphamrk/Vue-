<template>
  <v-container>
    <h1>Product section</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-carousel hide-delimiters height="400">
          <v-carousel-item v-for="(image, i) in images" :key="i">
            <v-img :src="image" class="product-img"></v-img>
          </v-carousel-item>
        </v-carousel>
        <v-row class="mt-2">
          <v-col v-for="(thumbnail, index) in thumbnails" :key="index" cols="2">
            <v-img :src="thumbnail" height="60"></v-img>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-row>
          <v-chip variant="flat" color="success" dark>In Stock</v-chip>
          <v-chip color="info" dark>Kids</v-chip>
        </v-row>

        <h3 class="mt-4">Cute Soft Teddybear</h3>
        <p class="text-muted">
          Short description of the product, specifications, etc.
        </p>

        <div class="d-flex align-center">
          <s class="mr-2 text-muted">$250</s>
          <h4 class="orange--text font-weight-bold">$200</h4>
        </div>

        <div class="my-2">
          <v-rating
            hover
            :length="5"
            :size="32"
            :model-value="3"
            active-color="amber"
          />
          <span class="caption">(238 reviews)</span>
        </div>

        <p>Colors*</p>
        <v-btn-toggle v-model="selectedColor" mandatory>
          <v-btn
            v-for="(color, index) in colors"
            :key="index"
            :style="{ backgroundColor: color }"
            class="mx-1"
            small
          ></v-btn>
        </v-btn-toggle>

        <div class="mt-4">
          <p>Quantity</p>
          <v-btn icon @click="decreaseQuantity"
            ><v-icon>mdi-minus</v-icon></v-btn
          >
          <span class="mx-2">{{ quantity }}</span>
          <v-btn icon @click="increaseQuantity"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
        </div>

        <v-row class="mt-4">
          <v-btn color="orange" class="mr-2" large>Buy Now</v-btn>
          <v-btn outlined color="blue" large>Add to Cart</v-btn>
        </v-row>

     
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      images: [
        "https://anhgaixinh.vn/wp-content/uploads/2022/08/7_hinh-gai-xinh-cute-de-thuong-nhat-viet-nam.jpg",
        "https://anhgaixinh.vn/wp-content/uploads/2022/08/7_hinh-gai-xinh-cute-de-thuong-nhat-viet-nam.jpg",
        "https://anhgaixinh.vn/wp-content/uploads/2022/08/7_hinh-gai-xinh-cute-de-thuong-nhat-viet-nam.jpg",
      ],
      thumbnails: [
        "https://1.bp.blogspot.com/-dcyL5VgVg4s/XlpeiHIndJI/AAAAAAAAWSY/yBqyZOLQzbUrgLFnCOUA3nh6B8oKlKrEgCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252852%2529.jpg",
        "https://1.bp.blogspot.com/-dcyL5VgVg4s/XlpeiHIndJI/AAAAAAAAWSY/yBqyZOLQzbUrgLFnCOUA3nh6B8oKlKrEgCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252852%2529.jpg",
        "https://1.bp.blogspot.com/-dcyL5VgVg4s/XlpeiHIndJI/AAAAAAAAWSY/yBqyZOLQzbUrgLFnCOUA3nh6B8oKlKrEgCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252852%2529.jpg",
      ],
      selectedColor: "",
      colors: ["#f44336", "#ffeb3b", "#03a9f4", "#4caf50"],
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
  },
};
</script setup>
  
  <style>
.product-img {
  object-fit: cover;
}
</style>
  