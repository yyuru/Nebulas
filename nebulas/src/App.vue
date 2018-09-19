<template>
  <div id="app" @mousemove="mouse" @click="click">
    <router-view/>
    <Mouse :style="{top:location.y+'px',left:location.x+'px'}" />
  </div>

</template>

<script>
import Mouse from './components/Mouse.vue'
export default {
  name: 'Nebulas',
  data(){
    return {
      location:{
        x:0,
        y:0
      }
    }
  },
  components:{
    Mouse
  },
  methods:{
    mouse:function(e){
      
      //let mouse=document.getElementById('Mouse');
      this.location.x=e.clientX-25;
      this.location.y=e.clientY-25;
    },
    click:function(){
      let mouse=document.getElementById('Mouse');
      mouse.style.animation="click 0.3s infinite";
      setTimeout(()=>{
        mouse.style.animation="";
      },300)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%

}
</style>
