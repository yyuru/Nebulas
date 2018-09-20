<template>
  <div id="app">
    <router-view/>
    <!-- <Mouse :style="{top:location.y+'px',left:location.x+'px'}" /> -->
    <transition
      leave-active-class="animated rotateOutDownLeft"
      enter-active-class="animated rotateInDownLeft"
    >
        <Loading v-if="loading" />
    </transition>
  </div>

</template>

<script>
// import Mouse from './components/Mouse.vue'
import Loading from './components/Loading'
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
    Loading
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
