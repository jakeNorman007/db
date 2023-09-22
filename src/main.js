import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import router from "./router"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin)
app.mount('#app')
