<template>
  <div id="Main">
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
  </div>
</template>
<script>
import Daily from './Daily.vue'
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
    Daily
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
      console.log(i)
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
        e.target.parentNode.style.left='30%';
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
    top 50px
    border 1px solid black
    #d{
      position absolute
      left 30%
      right 0
      top 50px
      width 60%
      height 80%
      transition all 0.5s
    }
  }
</style>
