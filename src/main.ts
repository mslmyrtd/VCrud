import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import './index.css'
import App from './App.vue'
import "vue-toastification/dist/index.css";
// import router from './router'
const app = createApp(App)

app.use(Toast)
app.use(createPinia())
// app.use(router)

app.mount('#app')
