<template>
  <div id="Mouse">
    <div id="M-inner">

    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
  #Mouse{
    z-index 0
    position absolute 
    width 50px
    height 50px
    border-radius 50%
    display table
    #M-inner{
      display: table-cell;
      vertical-align: middle;
      width 50px
      height 50px
      border-radius 50%
      box-shadow 0 0 10px 0 #555
      background-color rgba(128,128,128,0.1)
    }
  }
</style>
