<template>
  <div id="Loading">
    <img :src="imgUrl" alt="Loading" v-if="img">
  </div>  
</template>
<script>

export default {
  data(){
    return {
      imgUrl:null,
      img:false
    }
  },
  mounted(){
    let img=new Image();
    img.src="../../static/pic/loading.gif"
    img.onload=()=>{
      this.imgUrl=img.src
      this.img=true
    }
  }
}
</script>
<style lang="stylus">
  #Loading{
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index 99
    background-color rgb(48,48,52)
    
    img{
      width 800px
      height 600px
      margin-top calc(50vh - 300px)
    }
  }
</style>
