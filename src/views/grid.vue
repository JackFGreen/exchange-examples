<template>
  <div class="page-grid">
    <div class="grid">
      <div class="row">
        <div class="col">默认值为自适应内容</div>
        <div class="col">默认值为自适应内容</div>
        <div class="col">默认值为自适应内容</div>
      </div>

      <div class="row row-average">
        <div class="col">.row-average 等分</div>
        <div class="col">.row-average 等分</div>
        <div class="col">.row-average 等分</div>
      </div>

      <div class="row row-gutter">
        <div class="col">.row-gutter</div>
        <div class="col">.row-gutter</div>
        <div class="col">.row-gutter</div>
      </div>

      <div class="row row-wrap">
        <div class="col col-xs-24 col-sm-8 col-md-9 col-lg-3">
          响应式 [xs sm md lg xl] - [1-24]
          <p>set .row-wrap to maket [24] fill full line</p>
        </div>
        <div class="col col-xs-24 col-sm-8 col-md-12 col-lg-9">
          响应式 [xs sm md lg xl] - [1-24]
          <p>set .row-wrap to maket [24] fill full line</p>
        </div>
        <div class="col col-xs-24 col-sm-8 col-md-3 col-lg-12">
          响应式 [xs sm md lg xl] - [1-24]
          <p>set .row-wrap to maket [24] fill full line</p>
        </div>
      </div>

      <div class="row">
        <div class="col col-offset-3 col-sm-offset-9 col-md-offset-3">.col-[]-offset-[]</div>
        <div class="col col-offset-3 col-sm-offset-3 col-md-offset-6">.col-[]-offset-[]</div>
        <div class="col col-offset-3 col-sm-offset-3 col-md-offset-9">.col-[]-offset-[]</div>
      </div>

      <div class="row">
        <div class="col col-sm-order-3 col-md-order-2 col-lg-order-1">.col-[]-order-[] 1</div>
        <div class="col col-sm-order-2 col-md-order-1 col-lg-order-3">.col-[]-order-[] 2</div>
        <div class="col col-sm-order-1 col-md-order-3 col-lg-order-2">.col-[]-order-[] 3</div>
      </div>

      <div class="row">
        <div class="col">icon</div>
        <div class="col">title</div>
        <div class="col col-space">.col-space</div>
        <div class="col">icon</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "exchange-lib/scss/grid/index.scss";
.page-grid {
  .row {
    border: 1px solid pink;
    margin-bottom: 10px;
  }
  .col {
    border-radius: 4px;
    &:nth-last-of-type(odd) {
      background: #ccc;
    }
    &:nth-last-of-type(even) {
      background: #aaa;
    }
    &-space {
      background: none !important;
    }
  }
}
</style>
