<template>
    <div class="implementation-doc__active-cate">
        <a href="">{{routeName}}</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ActiveCate',
    props: {

        routeName: String
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
