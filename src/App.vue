<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script>
import * as Component from './page'
export default {
  components: {
    ...Component
  }
}
</script>