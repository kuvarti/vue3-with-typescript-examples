import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import store from './global/store'

const mainapp = createApp(App);
mainapp.use(store)
mainapp.mount('#app')
