import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "@tanstack/vue-query";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(router).use(VueQueryPlugin).use(Toast).mount('#app')
