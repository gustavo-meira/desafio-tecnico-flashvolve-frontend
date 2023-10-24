import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import('../views/SignInView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const setupRoutes = (app: App) => {
  app.use(router);
};
