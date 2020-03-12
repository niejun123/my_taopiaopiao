 <template>
        <div v-show="showTabbar">
            <div class='list'>
                <ul>
                <router-link :to='obj.url' v-for='(obj,index) in navarr' :key='index' active-class="lick">
                    <li>
                        <img :src="obj.iconl" alt="" class='icon'>
                        <p class="op">{{obj.name}}</p>
                     
                    </li>
                </router-link>
                </ul> 
            </div>    
        </div>
</template>

<script>
export default {
        name:'tabber',
        data(){
            return{
                showTabbar:true,
                navarr:[
                    {
                      name:'热映',
                      url:'/homepage',
                      icon:'http://gw.alicdn.com/tfs/TB1L.8XilfH8KJjy1XbXXbLdXXa-66-66.png',
                      iconl:'http://gw.alicdn.com/tfs/TB1kDeeib_I8KJjy1XaXXbsxpXa-66-66.png'
                    },
                      {
                      name:'影院',
                      url:'/cinema',
                      icon:'http://gw.alicdn.com/tfs/TB1ScFoidzJ8KJjSspkXXbF7VXa-66-66.png',
                      iconl:'http://gw.alicdn.com/tfs/TB1kDeeib_I8KJjy1XaXXbsxpXa-66-66.png'
                    },
                      {
                      name:'我的',
                      url:`/mine`,
                      icon:'http://gw.alicdn.com/tfs/TB1_Ox9invI8KJjSspjXXcgjXXa-66-66.png',
                      iconl:'http://gw.alicdn.com/tfs/TB1kDeeib_I8KJjy1XaXXbsxpXa-66-66.png'
                    },
                ]
            }
        }, 
        mounted(){
            let ourl = windwo.location
            console.log(ourl)
        }  
}
</script>

<style>
        .icon{
            width:1.375rem;             
            height:1.375rem; 
            margin:0 auto;
        }
        .list{
            background: rgba(255, 255, 255, 0.7);

           position: fixed;
            bottom: 0rem;
        }
        .list>ul{
            display:flex;
        }
        .list>ul li{
            width: 7.8125rem;
            display: flex;
            text-align: center;
            flex-direction: column;
       
            font-size: .75rem;         
        }
        .lick{
            color:#FB5368;
        }
        .op{
            margin-top:.1875rem;
        }
</style>