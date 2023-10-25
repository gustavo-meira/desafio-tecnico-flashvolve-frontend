import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRoutes } from './routes';
import { setupQuery } from './config/setupQuery';

const app = createApp(App);

setupRoutes(app);
setupQuery(app);

app.mount('#app');
