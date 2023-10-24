import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRoutes } from './routes';

const app = createApp(App);

setupRoutes(app);

app.mount('#app');
