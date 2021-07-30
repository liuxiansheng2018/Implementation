import {App} from 'vue'
import Link from './Link'

const components = [
    Link
]
const install = (app:App) => {
    components.map((component:any) => {
      if (component.install) {
        app.use(component)
      } else if (component.name) {
        app.component(component.name , component)
      }
    })
  };

// 可按需导入， 主要利用install 
export {
    Link
}
// 可全局导入
export default {
    install
}