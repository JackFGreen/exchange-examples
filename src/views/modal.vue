<template>
  <div class="page-modal">
    <ex-btn @click="show = !show">toggle</ex-btn>
    <ex-modal v-model="show" close>
      <template slot="head">head</template>
      <template slot="cont">cont</template>
      <template slot="foot">foot</template>
    </ex-modal>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
.page-modal {}
</style>
