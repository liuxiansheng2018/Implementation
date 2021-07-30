import { getCurrentInstance,PropType,ComponentPublicInstance,ExtractPropTypes } from "vue"
import type {RouteLocationRaw} from 'vue-router'

export type RouteProps = ExtractPropTypes<typeof routeProps>

export const routeProps = {
    to:[String,Object] as PropType<RouteLocationRaw>,
}

export const route = (vm: ComponentPublicInstance<RouteProps>) => {
    const router = vm.$router
    const {to} = vm
    if( to && router ) {
        router['push'](to)
    }
}

export const useRoute = () => {
    const vm = getCurrentInstance()!.proxy as ComponentPublicInstance<RouteProps>
    return () => route(vm)
}