import {CSSProperties,computed} from 'vue'
import {createNameSpace,} from '../utils'
import './index.less'
const [createComponent] = createNameSpace('Spacer')


const getMargin = (num: any) => {
    const env = process.env.NODE_ENV != 'production'
    if( num <= 0 && env ) {
        console.error(`[implementation] Spacer Error ${num} should be greater than 0`)
        num = 1
    }

    if( typeof num !== 'number' && env ) {
        console.error(`[implementation] spacer Error ${num} should be number `)
        num = 1
    }

    return `calc(${num * 15.25}pt + 1px * ${num - 1})`
}

export default createComponent({
    props: {
        x: {
            type: [Number],
            default: 1,
        },
        y: {
            type: [Number],
            default: 1
        },
        inline: Boolean
    },

    setup(props) {
        const setStyle = computed( ()=> {
           const marginTop = getMargin(props.x)
           const marginLeft = getMargin(props.x)
           const {inline} = props
           const style: CSSProperties = {
            marginTop,
            marginLeft,
            display: inline ? 'inline-block' : 'block'
           }
           return style
        })

        return () => <span class="implementation-spacer" style={setStyle.value}></span>
    }
})