<template>
  <div class="page-load-data">
    load-data
    <div class="wrap">
      <div class="cont">
        <img src="../assets/img/vue.png" alt>
        <img src="../assets/img/vue.png" alt>
      </div>
    </div>
    <img src="../assets/img/vue.png" alt>
  </div>
</template>

<script>
import { loadBottom } from 'exchange-lib/tools/loadData'

export default {
  name: 'load-data',
  data () {
    return {
      timer: null
    }
  },
  mounted () {
    const loader = `<p>custom loader</p>`

    // const loader = document.createElement('p')
    // loader.innerHTML = 'DOM'
    loadBottom({
      loader,
      endCb: () => {
        console.log('end page-load-data')
        this.timer = setTimeout(() => {
          const ul = document.createElement('ul')
          const li = document.createElement('li')
          ul.appendChild(li)
          document.querySelector('.page-load-data').appendChild(ul)
          loadBottom.unloading()
        }, 1000)
      }
    })
  },
  destroyed () {
    clearTimeout(this.timer)
    loadBottom.destroyed()
  }
}
</script>

<style lang="scss">
.page-load-data {
  .wrap {
    height: 300px;
    overflow: auto;
  }
}
</style>
