<template>
  <div class="page-btn">
    <ex-btn :loading="loading" @click="click" tag="span">tag span</ex-btn>

    <ex-btn :loading="loading" @click="click">btn</ex-btn>

    <ex-btn :loading="loading" @click="click">
      <template slot="loaderCont">loader-cont</template>
      btn loader cont
    </ex-btn>

    <ex-btn :loading="loading" @click="click">
      btn loader
      <span slot="loader">loader...</span>
    </ex-btn>

    <ex-btn disabled>btn disabled</ex-btn>

    <ex-btn text>text</ex-btn>
    <ex-btn text disabled>text disabled</ex-btn>
    <ex-btn text border>text border</ex-btn>
    <ex-btn text border disabled>text border disabled</ex-btn>

    <ex-btn border>border</ex-btn>
    <ex-btn border disabled>border disabled</ex-btn>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'title-btn',
      description: 'description-btn',
      keywords: 'keywords-btn'
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    click (e) {
      console.log(e)
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 10000)
    }
  }
}
</script>

<style lang="scss">
.page-btn {
  .ex-btn {
    margin-bottom: 10px;
  }
}
</style>
