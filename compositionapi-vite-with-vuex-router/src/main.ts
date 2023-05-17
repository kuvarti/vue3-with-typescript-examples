import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Rota from './route'

const app = createApp(App)
app.use(Rota);
app.config.globalProperties.$router = Rota
app.mount('#app')
