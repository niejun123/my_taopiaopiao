  <template>
            <div class="bigbox">
                <ul>
                    <li class="login_box">
                        <img :src="titleImg" alt="">
                        <h3>Login...</h3>
                    </li>
                    <li>
                        <form action="http://localhost:3000/userLogin" method="post">
                            <div class="shu_ru_kuang">
                                <input type="text" v-model="username"  name="username" placeholder="手机号/邮箱/会员名">
                                <i @click="quxiao1()" v-show="show1">x</i>

                            </div>
                            <div  class="shu_ru_kuang">
                                <input type="password"  v-model="password"  name="password" placeholder="请输入密码">
                                <i @click="quxiao2()" v-show="show2">x</i>
                            </div>
                            <div class="duanxin">
                                <a href="">短信验证码登录</a> <a href="#">免费注册</a>
                            </div>
                            <input type="submit" class='submit' value="登录">
                        </form>
                    </li>
                  
                </ul>
            </div>
</template>

<script>
export default {
    name:'login_page',
    data(){
        return{
            show1:false,
            show2:false,
            username:null,
            password:null,
            titleImg:'/static/images/yeying.png'
        }
    },
     methods:{
        quxiao1(){
             this.username ='';
         },
         quxiao2(){
             this.password ='';
         }
         
     },
    mounted(){
        console.log(this.username)
    },
    watch:{
        username:{
            handler(newName,oldName){
               this.titleImg = newName.length>0?'/static/images/yeying_biyan.png':'/static/images/yeying.png';
               this.show1 = newName.length > 0?true:false;
            }
        },
         password:{
            handler(newName,oldName){
                  this.titleImg = newName.length>0?'/static/images/yeying_biyan.png':'/static/images/yeying.png';
               this.show2 = newName.length > 0?true:false
            }
        }
    }
}
</script>

<style lang="less">
    @width: 20.625rem;

    .duanxin{
        display:flex;
        justify-content: space-between;
        a{
          color:#4e4e4e;  
          font-size:.875rem;
          line-height: 3.75rem;
        }
    }

    .bigbox{
        padding:0 1.5rem;
    }
    .shu_ru_kuang{
        width: @width;
        height:4.5625rem;
        border-bottom:.125rem solid #ff9f72;
        display:flex;
        align-items: flex-end;
        justify-content:space-between;
        padding-bottom: .4375rem;
        padding-left:.3125rem;
        input{
            width: 18.75rem;
            font-size:.9375rem;
        }
        i{
            font-size:1.25rem;
            
        }
    }
    .login_box{
        height:8rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        img{
            width: 5rem;
            height:5rem;
        }
    }
    .submit{
        width:@width;
        line-height: 2.8125rem;
        color:white;
        font-size:1rem;
        background-image: linear-gradient(90deg, #ff8f00,#ff5100);
        border-radius:1.4375rem;
    }
</style>