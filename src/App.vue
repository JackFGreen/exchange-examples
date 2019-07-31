<template>
  <div id="app">
    <h1>examples</h1>
   <ul>
     <li v-for="(item, index) in routes" :key="index"><router-link :to="item.path">{{item.path}}</router-link></li>
   </ul>
    <router-view/>
  </div>
</template>

<script>
import { routes } from './router.js'

export default {
  name: 'app',
  data () {
    return {
      routes
    }
  }
}
</script>

<style lang="scss">
img {
  width: 100%;
}
</style>
