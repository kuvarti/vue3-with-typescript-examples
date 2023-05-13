import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "@/assets/style.css"

const mainapp = createApp(App);
mainapp.use(store)
mainapp.mount('#app')
