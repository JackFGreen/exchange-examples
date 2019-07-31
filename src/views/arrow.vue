<template>
  <div class="page-arrow">
    <ex-arrow></ex-arrow>
    <ex-arrow size="20px" color="red" thick="2px" rotate="135deg"></ex-arrow>
  </div>
</template>

<script>
export default {
  name: 'arrow',
  head: {
    title: 'title-arrow',
    description: 'description-arrow',
    keywords: 'keywords-arrow'
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.page-arrow {}
</style>
