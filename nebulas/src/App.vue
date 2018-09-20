<template>
  <div id="app" @mousemove="mouse" @click="click" onselectstart="return false">
    <router-view/>
    <Mouse :style="{top:location.y+'px',left:location.x+'px'}" />
    <transition
      leave-active-class="animated rotateOutDownLeft"
      enter-active-class="animated rotateInDownLeft"
    >
        <Loading v-if="loading" />
    </transition>
    <Music @mouseover.native="mouseHover" @mouseout.native="mouseLeave"/> 
  </div>

</template>

<script>
 import Mouse from './components/Mouse.vue'
import Loading from './components/Loading'
import Music from './components/Music'
import {mapGetters} from 'vuex'
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
  computed:{
    ...mapGetters([
      'loading'
    ])
  },
  components:{
    Loading,
    Music,
    Mouse
  },
  methods:{
    mouse:function(e){
      
      let mouse=document.getElementById('Mouse');
      this.location.x=e.clientX-25;
      this.location.y=e.clientY-25;
    },
    click:function(){
      let mouse=document.getElementById('Mouse');
      mouse.style.animation="click 0.3s infinite";
      setTimeout(()=>{
        mouse.style.animation="";
      },300)
    },
    mouseHover:function(){
      let mouse=document.getElementById('M-inner');
      mouse.style.backgroundColor='rgba(75,111,157,0.3)';
    },
    mouseLeave:function(){
      let mouse=document.getElementById('M-inner');
      mouse.style.backgroundColor='rgba(128,128,128,0.1)';
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
