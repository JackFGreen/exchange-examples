<template>
  <div class="page-container">
    <ex-btn @click="loading = !loading">toggle loading</ex-btn>

    <ex-container>cont</ex-container>
    <ex-container empty>cont</ex-container>
    <ex-container empty>
      <template slot="empty">custom empty</template>
    </ex-container>

    <ex-container :loading="loading">cont</ex-container>
    <ex-container :loading="loading" column>cont column</ex-container>

    <ex-container class="block" :loading="loading">cont</ex-container>
    <ex-container class="block" :loading="loading" column>cont column</ex-container>

    <ex-container class="block" :loading="loading" column mask>cont column mask</ex-container>
    <ex-container class="block" :loading="loading" loading-block column mask>cont column mask block</ex-container>
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="scss">
.page-container {
  .block {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
  .ex-container {
    margin-bottom: 10px;
  }
}
</style>
