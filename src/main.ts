// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { registerEl } from './register/components/registerEl'
import router from './router'
import store from './store'

const app = createApp(App)
registerEl(app)
app.use(store).use(router).mount('#app')
