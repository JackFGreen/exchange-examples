<template>
  <div class="page-qrcode">
    <ex-qrcode link="http://www.baidu.com"></ex-qrcode>
  </div>
</template>

<script>
export default {
  name: 'qrcode',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.page-qrcode {
  .ex-qrcode {
    width:50px;
  }
}
</style>
