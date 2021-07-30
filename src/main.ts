import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ImplementationUI from '../packages'

createApp(App).use(router).use(ImplementationUI).mount('#app')
