 <template>
        <div class='Tbox'>
                <ul class="nav_parent">
                    <router-link to="address">
                    <li class='address'>
                        <img src="static\images\taopiaoicon.png" alt="">
                        <b style="font-weight: bold;font-size:15px;">广州</b>
                        <span class="xiajiaobiao"></span>
                    </li>
                    </router-link>
                    <li class="hot_showing" @click="showhome()">正在热映</li>
                    <li class="about"  @click="showing()" >即将上映</li>
                    <li class='red_block' ></li>
                </ul>

        </div>
</template>

<script>
 import store from '@/store';
 import {getVideoData} from '@/api'
export default {
    name:'headnav',
    data(){
        return{


        }
    },
   methods:{
        showhome(){
            store.commit('ShowTabBar')
            $('.red_block').css({'left':'12.3125rem'})
            $('.hot_showing').css({'color':'#FF0A46','font-weight':'bold'})
            $('.about').css({'color':'black','font-weigth':'none'})
           
        },
        showing(){
            store.commit('Showing')
            $('.red_block').css({'left':'18rem',})
            $('.about').css({'color':'#FF0A46','font-weight':'bold'})
            $('.hot_showing').css({'color':'black','font-weigth':'none'})
        }
    },
     mounted(){
        let bian = this.$store.state.showing
         getVideoData().then(res=>{
      console.log(res)
    }) 
    }
}
</script>

<style >
.nav_parent{
    display: flex;
    flex-direction: row;
    position: relative;
}
.address{
    width: 6.625rem;
    list-style: 3.125rem;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.address>img{
    
    width: 1.625rem;
    height: 1.625rem;
    
}
 .red_block{
     width: 1rem;
     height: .125rem;
     position:absolute;
     background: #FF0C48;
     top:2.8125rem;
     left: 12.3125rem;
      transition: 0.5s;
 }

.hot_showing{
    width: 5.9375rem;
    line-height: 2.875rem;
    margin-left: 3.1875rem;
    text-align: center;
    font-weight: bold;
    color:#FF0C48;
   
}

.about{
    width: 5.9375rem;
    line-height: 2.875rem;
    text-align: center;
    


}


    .xiajiaobiao{
            width: 0;
            height: 0;
            border-width: .5rem;
            border-style: solid;
            border-color: black transparent transparent transparent;
            float: right;
    }
</style>