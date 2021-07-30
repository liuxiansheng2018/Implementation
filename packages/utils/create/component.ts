import {App, defineComponent} from 'vue'
import {camelize} from '../format/string'
const createComponent = (name:string) => {
    return function(component: any) {
        component.name = name
        component.install = (vue: App) => 
            vue.component(camelize(`-${name}`), component)
        return defineComponent(component)
    } as typeof defineComponent
}

export {
    createComponent
}