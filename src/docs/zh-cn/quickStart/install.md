# 安装

### 配置

请确保你的<im-link href="https://nodejs.org/en/">NodeJS</im-link>处于高版本(>=10),同时还需准备包管理器`NPM`或者`Yarn`
<im-spacer />

```javascript
import {createApp} from 'vue'
import App from './App.vue'
import ImplementationUI from '@implementation-ui/vue'
import '@implementationUI-ui/vue/lib/main.css'

createApp(App)
 .use(ImplementationUI)
 .mount('#app)

```

<im-link></im-link> 3. 在任意处使用组件

```html
 <template> 
     <im-link>按钮</im-link>
 </template>
```