import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/home',
      name: 'home-redirect',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
      alias: '/get-in-touch'
    },
    {
      path: '/Search',
      name: 'Search',
      component: () => import('@/views/Search.vue'),
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue') 
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    }, {
      path: '/DashBoard',
      name: 'DashBoard',
      component: () => import('@/views/DashBoard.vue'),
    }, {
      path: '/admin',
      name: 'admin',
      component: import('@/views/Admin.vue'),
      children: [
        {
          path: 'manager-user', 
          name: 'admin-users',
          component: import('@/views/User.vue'),
        },
        {
          path: 'manager-product', 
          name: 'admin-products',
          component:import('@/views/Products.vue'),
        },
        {
          path: 'settings', 
          name: 'admin-settings',
          component: import('@/views/Setting.vue'),
        }
      ]
    }
  ]
})
router.afterEach((to) => {
  localStorage.setItem('lastVisitedURL', to.fullPath);
});

router.beforeEach((to, from, next) => {
  const isLogin = true; 

  if (to.path === "/dashboard" && !isLogin) {
    next("/login");
  } else {
    next();
  }
});


export default router
