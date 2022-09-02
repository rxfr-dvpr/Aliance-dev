import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '@/assets/scss/main.scss';
import '@/assets/css/all.min.css';

createApp(App).use(router).mount('#app')
