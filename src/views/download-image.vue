<template>
  <div class="page-download-image">
    <a ref="download">download</a>
    <img src="../assets/img/vue.png" alt="">
  </div>
</template>

<script>
import { download } from 'exchange-lib/tools/dom'
import html2canvas from 'html2canvas'

export default {
  name: 'download-image',
  data () {
    return {
      link: require('../assets/img/vue.png')
    }
  },
  mounted () {
    const el = document.querySelector('.page-download-image')
    html2canvas(el).then(canvas => {
      el.appendChild(canvas)
      const url = canvas.toDataURL()
      download(this.$refs.download, url, 'vue')
    })
  }
}
</script>

<style lang="scss">
.page-download-image {}
</style>
