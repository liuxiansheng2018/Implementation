<template>
    <div
        v-for="(route, idx) in routes"
        :key="route + idx"
        class="implementation-doc__route-content"
    >
        <span class="title">{{route.name}}</span>
        <div class="route__children" v-for="_ in route.children" :key="_">
            <active-cate :to="_" :routeName="_.title" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import activeCate from '../ActiveCate/index.vue'
import {zhRoutes} from '../../docs/zh-cn/index'
export default defineComponent({
    components: {
        activeCate
    },
    setup() {
        const Routes = reactive({
            routes: zhRoutes
        })
        return {
            ...toRefs(Routes)
        }
    },
})
</script>


<style scoped lang="less">
@import '~@fect-ui/themes/main.css';
.implementation-doc__route_content {
    margin-bottom: var(--fay-gap);
    .title {
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-size: 0.82rem;
        color: var(--accents-4);
        margin-bottom: var(--fay-half-gap);
    }
    .route__children {
    margin-top: 0.5rem;
    // margin-bottom: var(--fay-gap);
  }
}
</style>