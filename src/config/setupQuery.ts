import { App } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

export const setupQuery = (app: App) => {
  app.use(VueQueryPlugin);
};
