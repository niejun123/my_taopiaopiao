 <template>
        <div>
            <ul >
                <li v-for="(obj,index) in vdata" @click="navigt(obj['_id'])" :key="index" class="lists">
                    <div>
                        <img :src="obj.images" alt="">
                    </div>
                    <div class='right_box'>
                        <h5>{{obj.title}}</h5>
                        <p>淘票票评分&nbsp;<span style="color:#ffb658">{{obj.grade}}</span></p>
                        <p>导演:{{obj.actors_list_img[0]['name']}}</p>
                        <p>主演:{{obj.actors}}</p>
                        <span>今日最热</span>
                    </div>
                    <div class='maipiao'>
                        <button>购票</button>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
import { getVideoData } from "@/api";
import store from '@/store';
export default {
  name: "listVideo",
  data() {
    return {
        vdata :[]
    };
  },
  mounted() {
    getVideoData().then(res => {
       this.vdata = res
    });
  },
  methods:{
    navigt(id){
   
        this.$router.push({  
            path:   '/vdetalis:_id',   
            name: 'videodetalis',  
            params: {   
                msgKey:id  
            }  
      
        })  
    }  
  }
};
</script>

<style>
.maipiao{
   line-height: 9.0625rem;
}
.maipiao>button{
    width:3.125rem;
    height:1.75rem;
    background-image: linear-gradient(to right,#FF4299,#FF3371);
    border-radius:.9375rem;
    font-size:.75rem;
    color:white;
    outline-style: none;        
}
    .lists{
        height: 8.9375rem;
        display:flex;
        margin:0rem .9375rem 0rem .9375rem;
        border-bottom: .0625rem solid #F7F7F7; 
        border-top: .0625rem solid #F7F7F7; 

    }
    .lists>div>img{
        width: 4rem;
        height: 5.875rem;
        margin:.9375rem .6875rem 0 0;
    }
    .right_box{
        width: 13.75rem;
        margin-top:.625rem;
    }
    .right_box>h5{
        font-weight:bold;
        font-size: 1rem;
        line-height: 1.75rem;
        
    }
    .right_box>span{
        width: 3.4375rem;
        float:left;
        color:#F2577D;
        border:.0625rem solid #F2577D;
        font-size:.75rem;
        line-height: .75rem; 
        margin-top:.125rem;
    }
    .right_box>p{
        font-size:.8125rem;
        color:#7E7E7e;
        line-height:1.4375rem;
    }
</style>