    <template>
        <v-container>
        <v-row justify="center" class="mb-5">
            <v-col cols="12" md="4" class="mb-4">
            <v-card
                class="mx-auto"
                max-width="344"
                prepend-icon="mdi-cart"
                subtitle="Product summary"
                title="Item card"
                elevation="2"
            ></v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-4">
            <v-card
                class="mx-auto"
                max-width="344"
                prepend-icon="mdi-file-document-arrow-right-outline"
                subtitle="Billing information"
                title="Billing"
                elevation="2"
            ></v-card>
            </v-col>
            <v-col cols="12" md="4" class="mb-4">
            <v-card
                class="mx-auto"
                max-width="344"
                prepend-icon="mdi-credit-card-outline"
                subtitle="Check out the official repository"
                title="Payment"
                elevation="2"
            ></v-card>
            </v-col>
        </v-row>
    
        <v-card elevation="2" >
            <v-card-text>
                <v-table>
                  <thead >
                    <tr>
                      <th class="text-left">Product</th>
                      <th class="text-right">Price</th>
                      <th class="text-center">Quantity</th>
                      <th class="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <v-row no-gutters align="center">
                          <v-col cols="3">
                            <v-img
                              :src="product.image"
                              aspect-ratio="1"
                              height="50"
                              contain
                            ></v-img>
                          </v-col>
                          <v-col cols="9">
                            <div>
                              <strong>{{ product.title }}</strong><br />
                              <span class="text-muted">
                                Size: {{ product.size }} | Color: {{ product.color }}
                              </span>
                            </div>
                          </v-col>
                        </v-row>
                      </td>
                      <td class="text-right">{{ product.price }}</td>
                      <td class="text-center">
                        <v-row no-gutters align="center" justify="center">
                          <v-btn small @click="decreaseQuantity" icon>
                            <v-icon>mdi-minus</v-icon>
                          </v-btn>
                          <span class="mx-2">{{ quantity }}</span>
                          <v-btn small @click="increaseQuantity" icon>
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                        </v-row>
                      </td>
                      <td class="text-right">{{ subtotal }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
              
    
            <v-divider></v-divider>
    
            <v-card-text>
            <h4 class="font-weight-bold">Order Summary</h4>
            <v-row>
                <v-col>Total</v-col>
                <v-col class="text-right">{{ subtotal }}</v-col>
            </v-row>
            <v-row>
                <v-col>Discount (5%)</v-col>
                <v-col class="text-right text-danger">- {{ discount }}</v-col>
            </v-row>
            <v-row>
                <v-col>Shipping Charges</v-col>
                <v-col class="text-right">-</v-col>
            </v-row>
            </v-card-text>
    
            <v-divider></v-divider>
    
            <v-card-text>
            <v-row>
                <v-col class="font-weight-bold">Total</v-col>
                <v-col class="font-weight-bold text-right">{{ total }}</v-col>
            </v-row>
            </v-card-text>
    
            <v-card-actions>
            <v-btn color="pink" @click="continueShopping" elevation="2">Continue Shopping</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="checkout" elevation="2">Check Out</v-btn>
            </v-card-actions>
        </v-card>
        </v-container>
    </template>
    
    <script>
    export default {
        data() {
        return {
            product: {
            title: "Cute Soft Teddybear",
            price: 200,
            size: "8",
            color: "Dark Red",
            image:
                "https://th.bing.com/th/id/OIP.4akau9Zyzq-ioaE0S_YVrwHaHa?rs=1&pid=ImgDetMain", // Replace with the actual image path
            },
            quantity: 1,
        };
        },
        computed: {
        subtotal() {
            return `$${(this.product.price * this.quantity).toFixed(2)}`;
        },
        discount() {
            return `$${(this.product.price * this.quantity * 0.05).toFixed(2)}`;
        },
        total() {
            return `$${(
            this.product.price * this.quantity -
            this.product.price * this.quantity * 0.05
            ).toFixed(2)}`;
        },
        },
        methods: {
        increaseQuantity() {
            this.quantity++;
        },
        decreaseQuantity() {
            if (this.quantity > 1) this.quantity--;
        },
        continueShopping() {
            // Implement continue shopping logic
        },
        checkout() {
            // Implement checkout logic
        },
        },
    };
    </script>
    
    <style scoped>
    .text-danger {
        color: red;
    }
    </style>
    