<template>
  <div id="app">
    <router-view/>
    <tab-ber  v-show="showTabbar"></tab-ber>
  </div>
</template>

<script>
import TabBer from './components/tabBar/tabBar'
export default {
  name: 'App',
  components:{
    TabBer
  },
  data(){
    return{
       showTabbar:true,
    }
  },
  mounted(){
    let ourl = window.location.href;
    let loginPageUrl= "http://localhost:8080/login";
    if(ourl ==loginPageUrl) {
      this.showTabbar = false
    }else{
      this.showTabbar = true
    }
  }
}
</script>

<style>
  
</style>
