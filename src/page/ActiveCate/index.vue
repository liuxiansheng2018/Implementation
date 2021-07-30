<template>
    <div class="implementation-doc__active-cate" @click="mobileTabClickHandler">
        <im-link :to="name" :color="isActive">{{routeName}}</im-link>
    </div>
</template>

<script lang="ts">
import { useProvider } from '@/utils/inject'
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue'
import {useRouter} from 'vue-router'
import { LayoutProvide,READONLY_DOCS_LAYOUT_KEY } from '../Layout/typing'
import {RouteContext} from '../SiderBar/typing'
export default defineComponent({
    name: 'ActiveCate',
    props: {
        to: {
          type: [String, Object] as PropType<String | RouteContext>,
        },
        routeName: String
    },
     setup (props) {
       // 获取路由的实例
       const router = useRouter()
       const isActive = ref<boolean>(false)
       const {context} = useProvider<LayoutProvide>(READONLY_DOCS_LAYOUT_KEY)
       const {mobileTabClickHandler} = context!

      // watchEffect 可以自动根据响应式的状态自动应用和重新应用， 
      //不需要我们写监听属性， 而是会自动收集依赖， 如果watchEffect 中响应式数据变化的话就会执行回调
      watchEffect( ()=> {
        if( typeof props.to != 'string' ) {
          const {route} = props.to as RouteContext
          // currentRoute 当前路由地址
          isActive.value = router.currentRoute.value.name === route.name
        }
        if( isActive.value ) {
          document.title = `${props.routeName} | Vue - Implementation - UI`
        }
      })

      const name = computed( ()=> {
        const {route} = props.to as RouteContext
        return route.name
      })
      return {
        isActive,
        name,
        mobileTabClickHandler
      }
     }
    
})
</script>

<style lang="less" scoped>
@import '~@fect-ui/themes/main.css';
.fect-doc__active-cate {
  color: var(--primary-foreground);
  height: 2.25rem;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 650px) {
  .fect-doc__active-cate {
    font-size: 1rem;
    height: 50px;
    border-bottom: 1px solid var(--accents-2);
  }
}
</style>
