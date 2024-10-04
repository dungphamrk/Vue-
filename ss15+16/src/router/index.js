import { createRouter, createWebHistory } from "vue-router";
import BT1 from "../views/BT1.vue";
import BT2 from "@/views/BT2.vue";
import BT3 from "@/views/BT3.vue";
import BT4 from "@/views/BT4.vue";
import BT5 from "@/views/BT5.vue";
import Product from "@/views/Product.vue";
import Details from "@/views/Details.vue";
import ListUser from "@/views/ListUser.vue";
import UserDetail from "@/views/UserDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BT1,
    },
    {
      path: "/contact",
      name: "contact",
      component: BT2,
    },
    {
      path: "/register",
      name: "register",
      component: BT3,
    },
    {
      path: "/login",
      name: "login",
      component: BT4,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: BT5,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/details",
      name: "details",
      component: Details,
    },
    {
      path: "/ListUser",
      name: "ListUser",
      component: ListUser,
    },
    {
      path: "/user/:id",
      name: "UserDetail",
      component: UserDetail,
      props: true, // Truyền ID của user dưới dạng prop
    },
    {
      path: "/employees",
      name: "ListEmployees",
      component: ListEmployees,
    },
    {
      path: "/employees/:id",
      name: "EmployeeDetail",
      component: EmployeeDetail,
      props: true,
      children: [
        {
          path: "profile",
          name: "Profile",
          component: Profile,
        },
        {
          path: "projects",
          name: "Projects",
          component: Projects,
        },
        {
          path: "contact",
          name: "Contact",
          component: Contact,
        },
      ],
    },
  ],
});

export default router;
