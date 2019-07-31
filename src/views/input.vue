<template>
  <div class="page-input">
    <ex-input v-model="num"></ex-input>
    <ex-input v-model="num" disabled></ex-input>
    {{num}}
    <ex-btn @click="num++" text>num++</ex-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style lang="scss">
.page-input {
  .ex-input {
    margin-bottom: 10px;
  }
}
</style>
