<template>
  <div id="page-num">
      <span id="page-index">1</span>
      /<span id="page-all">10</span>  
  </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
  #page-num{
      position absolute
      bottom 30px
      right 40px
      width 140px
      height 50px
      line-height 50px
      font-family FFj
      font-size 30px
      font-weight 900
      #page-index{
        font-size 50px  
        color #d14733
      }
    }
</style>
