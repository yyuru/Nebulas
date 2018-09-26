<template>
  <div id="Main">
    <div id="pic">
      <img src="../../static/pic/bg2.jpg" alt="" srcset="">
    </div> 
    <div id="name">
      <i>NEBULAS</i>
    </div>
    <div id="some">
      <p>Do you ever <span>Shine</span> ? </p>
      <p>Do you ever <span>Try</span> ?</p>
      <p>Do you ever try to <span>Live</span> or <span>Die</span> ? </p>
    </div>
    <div id="d">
      <Daily 
        v-for="day in days" 
        :key="day.index" 
        :style="{
          zIndex:(days.length-day.index)
        }"
        @mouseenter.native="getout(day.index,$event)" 
        @mouseout.native="getin(day.index,$event)"
      />
    </div>
    <PageNum />
  </div>
</template>
<script>
import Daily from './Daily.vue'
import PageNum from './PageNum'
import { mapActions } from 'vuex';
export default {
  mounted() {
    this.days.forEach((item,index)=>{
      const d=document.getElementById("d");
      let img=new Image();
      img.src=item.imgUrl;
      img.onload=()=>{
        d.children[index].style.backgroundImage=`url(${item.imgUrl})`
      }
    })
    window.onload=()=>{
      setTimeout(()=>{this.setLoading(false);},3000);
      
    }
  },
  components:{
    Daily,
    PageNum
  },
  data(){
    return {
      days:[
        {
          index:0,
          imgUrl:"../../static/pic/Main/bg/1.jpg"
        },
        {
          index:1,
          imgUrl:"../../static/pic/Main/bg/2.jpg"
        },
        {
          index:2,
          imgUrl:"../../static/pic/Main/bg/3.jpg"
        },
        {
          index:3,
          imgUrl:"../../static/pic/Main/bg/4.jpg"
        },
        {
          index:4,
          imgUrl:"../../static/pic/Main/bg/5.jpg"
        }
      ]
    }
  },
  methods:{
    getout:function(i,e){
      let name=document.getElementById('name');
      let some=document.getElementById('some');
      name.style.left='-40vh';
      name.style.top='25vh';
      name.style.transform='rotate(-90deg)';
      some.style.opacity=0

      e.target.parentNode.style.left='15%';
      if(i==0){
        
        setTimeout(()=>{
          this.days.forEach((item,i)=>{
                    e.target.parentNode.children[i].style.transform=`scale(${1-i*0.05},${1-i*0.05}) translateX(${i*150}px)`
                  });
        },400);
        
        //e.target.style.transform=`scale(${1-i*0.05},${1-i*0.05}) translateX(${i*100}px)`
        
      }else{
        this.days.forEach((item,i)=>{
          e.target.parentNode.children[i].style.transform=`scale(${1-i*0.05},${1-i*0.05}) translateX(${i*150}px)`
        });
        e.target.style.transform=`scale(${1-i*0.05},${1-i*0.05}) translateX(${(i+0.3)*150}px)`
      }
    },
    getin:function(i,e){
      console.log(i)
      
      if(i==0){
        let name=document.getElementById('name');
        let some=document.getElementById('some');
        name.style.left='0vh';
        name.style.top='0px';
        name.style.transform='rotate(0deg)';
        some.style.opacity=1
        e.target.parentNode.style.left='40%';
        this.days.forEach((item,i)=>{
          e.target.parentNode.children[i].style.transform=""
        });
        return false
      }else{
        e.target.style.transform=`scale(${1-i*0.05},${1-i*0.05}) translateX(${i*100}px)`
      }
    },
    ...mapActions([
      'setLoading'
    ])
  }
}
</script>
<style lang="stylus" scoped>
  #Main{
    position absolute
    left 0
    right 0
    bottom 0
    top 80px
    border 1px solid black
    #pic{
      position absolute
      left 0
      top 0
      width 11%
      height 100%
      background-color black
      overflow hidden
      img{
        height 100%
        margin-left -13vw
        filter blur(1px)
      }
    }
    #name{
      transform rotate(0deg)
      font-size 100px
      position absolute
      left 0
      top 0px
      width 100vh
      height 15vw
      line-height 15vw
      font-family FFj
      transition  all 1s
      color #f1b253
      i{
        
        border-bottom 5px solid #d14733
      }
    }
    #some{
      position absolute
      left 0
      top 15vw
      width 37%
      height auto
      text-align right
      opacity 1 
      transition all 1s 0.5s
      font-size 30px
      &>p>span{
        font-size 40px
        font-family FFj
        color #d14733
      }
    }
    #d{
      position absolute
      left 40%
      right 0
      top 0px
      width 60%
      height 80%
      transition all 0.5s
    }
    
  }
</style>
