 <template>
    <div>
          <button class="login" @click="login()" v-if="showLogin">登录</button>
        <ul  v-for="obj in userInfo" :key="obj['_id']">
            <li class="head_box" >
                  
                    <i :style="{'background-image':'url('+ obj['userImg'] +')'}"></i> <span>{{obj['name']}}</span>

                    <div @click="close()">
                        <span v-show="!showClose">.&nbsp;.&nbsp;.</span>
                        <ul v-show="showClose">
                            <li @click="tuichu()">退出登录</li>
                        </ul>
                    </div>
            </li>
            <li class="ticket">
                <div>
                    <img src="/static/images/dianying.png" alt="">
                    <span>电影票</span>
                </div>
                <div>
                    <img src="/static/images/youhuiquan.png" alt="">
                    <span>优惠券</span>
                </div>
            </li>
            <li class="taopiao_box">
                <span>淘票票乐影卡</span><i>&gt;</i>
            </li>

             <li class="taopiao_box">
                <span>帮助与反馈</span><i>咨询票小蜜&gt;</i>
            </li>
        </ul>
    </div>
</template>

<script>
import { getUserInfo } from "@/api";
 import store from '@/store';

 
export default {
    name:"mine",
    data(){
        return{
            userInfo:[],
            showLogin:true,
            showClose:false,
        }
    },
    mounted(){
        var url= window.location.href;
        var user_id =  url.split("?") //剪切url参数
     
        if(user_id[1] != undefined){
            window.location.href = user_id[0]
             window.localStorage.setItem("userId",user_id[1])
        } 
        var userinfo = window.localStorage.getItem("userId")
         this.showLogin = userinfo==undefined?true:false;
        var pser = {
            parse:userinfo,
        }
        getUserInfo(pser).then((res)=>{
            this.userInfo.push(res)
            console.log(this.userInfo)
        })
    },
    methods:{
        login(){
            location.href ="http://localhost:8080/login"
        },
        close(){
            this.showClose = this.showClose == true?false:true
        },
        tuichu(){
            window.localStorage.removeItem('userId')
            window.location.reload()
        },
        
    }
}
</script>

<style lang="less">
html,body{
    height: 100%;
    background-color: #f5f5f5 ;
}
.taopiao_box{
    height: 3.75rem;
    background: white;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 .9375rem;
    border-top:.0625rem solid #f5f5f5;
    span{
        color:#262626;   
        font-size:.875rem;
    }
    i{
        font-size:.6875rem;
        color:#bcbcbc;   

    }
}

.login{
    width:21.875rem;
    line-height: 3.125rem;
    text-align: center;
    color:white;
    margin:3.125rem 0 0 .75rem;
    background-image: linear-gradient(-90deg,#ff2e62,#f5003d);
}
     .ticket{
         height: 6.875rem;
         padding: 0 .9375rem;
         background: white;
         display:flex;
         justify-content: space-around;
         align-items: center;
         div{
             width:4.6875rem;
             height:4.25rem;
             display: flex;
             flex-direction:column;
             align-items: center;
             span{
                 margin-top:.625rem;
                font-size:.625rem;
                color:#848484; 
             }
         }
     }
        .head_box{
            height: 8.25rem;
            padding: 0 0 2.375rem 1.55rem;
            background-color:#ff2e62;
            display:flex;
           
            align-items: center;
                i{
                    width: 4.6875rem;
                    height:4.625rem;
                    display: inline-block;
                    border-radius: 50%;
                    background-size: 158%;
                    margin-right: 1.25rem;
                    background-position: center;
                    border:.125rem solid white;
                }
                span{
                    color:white;
                    font-size:1.9375rem;

                }
                div{
                    position: absolute;
                    top:.25rem;
                    right: .25rem;
                  span{
                    color:white;
                    font-size:1.125rem;
                  }
                  ul>li{
                    margin-top:.25rem;
                    float: right;
                    color:white;
                    font-size:1.125rem; 
                  }
                }
        }

</style>