import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        showing:true,  //热映还是上映
        MineUrl:null,
    },
    mutations:{
        ShowTabBar(state){
            state.showing = true
        },
        Showing(state){
            state.showing =  false
        }
    },
   
})