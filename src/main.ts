// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { registerApp } from '@/global/index'
import 'normalize.css'
// import { BASE_NAME, BASE_URL } from '@/network/request/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { useStoreFn } from './store'

const app = createApp(App)

// registerApp(app)
app.use(registerApp)
app.use(store)
app.use(useStoreFn)
app.use(router)
app.mount('#app')
