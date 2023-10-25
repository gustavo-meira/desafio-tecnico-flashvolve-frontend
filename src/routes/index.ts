import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import('../views/SignInView.vue'),
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUpView.vue'),
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/HomeView.vue'),
    meta: {
      needAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const setupRoutes = (app: App) => {
  app.use(router);
};
