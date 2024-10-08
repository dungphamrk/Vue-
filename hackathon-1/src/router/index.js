import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/DashBoard.vue"),
    children: [
      {
        path: "manager-product",
        name: "admin-products",
        component: () => import("@/views/ManagerProduct.vue"),
      },
      {
        path: "manager-category",
        name: "admin-category",
        component: () => import("@/views/Category.vue"), 
      },
    ],
    
  },
  {
    path: "/manager-product",
    name: "manager-products",
    component: () => import("@/views/ManagerProduct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
