import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './global/globalVars'
import Rota from './route'

const app = createApp(App);
app.use(Rota);
app.use(store);
app.config.globalProperties.$router = Rota;
app.mount('#app');
