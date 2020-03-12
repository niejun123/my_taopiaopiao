import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePage/HomePage'
import CinEma from '@/pages/cinema/CinEma'
import Mine from '@/pages/mine/mine'
import VideoDetalis from '@/pages/videoDetalis/vdDetalis'
import Login from '@/pages/login/login'
import AddRess from '@/pages/addRess/addRess'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name:'homepage',
      redirect:'/homepage'
    },
    {
      path:'/homepage',
      name:'home',
      component:HomePage,
        
    },
    {
      path:'/address',
      name:'address',
      component:AddRess
    },
    {
      path:'/cinema',
      name:'cinema',
      component:CinEma
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine, 
    },
    {
      path:'/vdetalis',
      name:'videodetalis',
      component:VideoDetalis
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
    
  ]
})
