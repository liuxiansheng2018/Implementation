import {computed , getCurrentInstance} from 'vue'
import { createNameSpace,useRoute } from '../utils'

const [createComponent] = createNameSpace('Link')

export default createComponent({
    props: {
        href: {
            type: String,
            default: ''
        },
        to: {
            type: [String, Object],
            default: ''
        },
        color: Boolean,
        underline: Boolean,
        block: Boolean,
    },

    setup (props, {slots}) {
        const route = useRoute()
        const setClass = computed(()=> {
            const name: string[] = []
            props.color && name.push('color')
            props.underline && name.push('underline')
            props.block && name.push('block')
            return name.join(' ')
        })

        const safeHref = computed( ()=> {
            if( props.to ) return 'javascript: void 0;'
            return props.href
        })

        const goToHandler = () => props.to && route()


        return () => (
            <a class={`implementation-link ${setClass.value}`}
             href={safeHref.value}
             onClick={goToHandler}
            >
                {slots.default?.()}
            </a>
        )
    }
})