 <template>
  <div class="page">
    <ul class="vi_data" v-for="(obj) in detalis" :key="obj['_id']">
      <li>猫眼电影&gt;{{obj['title']}}</li>
      <li class="introduce">
        <div class="video_img" @click="video()">
          <img :src="obj['images']" alt />
          <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/poster-play.png" alt />
        </div>
        <div class="right_name">
          <h3>{{obj['title']}}</h3>
          <p>{{obj['english_name']}}</p>
          <p>{{obj['classify']}}</p>
          <p>
            {{obj['actors']}}
            <img
              class="small_img"
              src="http://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/movie-tag-2DIMAX.png"
              alt
            />
          </p>
          <p>
            <span>{{obj['release_date']}}</span>/
            <span>{{obj['time']}}分钟</span>>
          </p>
          <button>想看</button>&nbsp;
          <button>看过</button>
        </div>
      </li>
      <li class="video_data"  v-if="showVideo">
          <span @click="close()">关闭</span>
          <video width="350"  height="220"  controls webkit-playsinline="true" poster="http://p0.meituan.net/movie/ecd80352f311823b59c078b0aea4cef0929453.jpg@70q_750.0000111758709w" autoplay="autoplay" preload="preload"  :src="obj['video_data']"></video>
      </li>
      <ul class="give">
        
        <li class="give_top" >
          <img src="/static/images/logo.png" alt />
          <b>实时口碑</b>
          <span>980171&nbsp;人看过</span>
          <span>36912&nbsp;人想看&nbsp;&nbsp;&nbsp;</span>
        </li>
        <li class="renping">
          <div class="left">
            <h2>{{obj['grade']}}</h2>
            <p>177054人评</p>
          </div>
          <div id="right" class="right">
            <div>
              <div class="img_box">
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
              </div>
              <div class="progress_box1"></div>
              <span>66.9%</span>
            </div>

            <div>
              <div class="img_box">
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
              </div>
              <div class="progress_box2"></div>
              <span>66.9%</span>
            </div>

            <div>
              <div class="img_box">
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
              </div>
              <div class="progress_box3"></div>
              <span>66.9%</span>
            </div>
            <div>
              <div class="img_box">
                <img src="/static/images/star-not-graded.png" alt />
                <img src="/static/images/star-not-graded.png" alt />
              </div>
              <div class="progress_box4"></div>
              <span>66.9%</span>
            </div>
            <div>
              <div class="img_box">
                <img src="/static/images/star-not-graded.png" alt />
              </div>
              <div class="progress_box5"></div>
              <span>66.9%</span>
            </div>
          </div>
        </li>
        <li class="foot">
            <p>上映首周电影评分人数第一</p>
        </li>
      </ul>
      <li class="introduce2">
            <h1>简介</h1>
            <span @click="unfold()">{{ showcontent == true? "展开":"收起" }} <img  src="/static/images/arrow-right.png"  alt=""></span>
      </li>
      <li :class="{content:showcontent}" class="hehe">
          <p>
              {{obj["content"]}}
          </p>
      </li>
      <li class="actor">
         <h1>演职人员</h1>
            <span>{{ showcontent == true? "全部":"收起" }}<img  src="/static/images/arrow-right.png"  alt=""></span>
      </li>
        <li class="window_box">
            <ul class="actor_img" >
                <li v-for="(acto,index) in obj['actors_list_img']" :key="index"><img :src="acto['image']" alt=""><h3>{{acto['name']}}</h3><p>{{acto['play']}}</p></li>
            </ul>
        </li>
    </ul>
  </div>
</template>
   
<script>
import { getVideoDetalis } from "@/api";

export default {
  name: "videodata",
  data() {
    return {
      detalis: [],
      showcontent:true,
      showVideo:false,
    };
  },

  mounted() {
    let chanshu = { parameter: this.$route.params.msgKey };

    getVideoDetalis(chanshu).then(res => {
      this.detalis.push(res);
      // console.log(this.detalis)
    });
  },
  methods:{
      unfold(){
       this.showcontent = this.showcontent == true? false:true
      },
      video(){
        this.showVideo = true;
      },
      close(){
        this.showVideo = false;
      }
  },
   
};
</script>
     
<style>
.video_data>span{
  float: right;
  color:white;
  width: 2.5rem;
  height:2.5rem;
  background: black;
  text-align: center;
  line-height:2.5rem;
  border-radius:50%;
}
.video_data{
  width: 22.375rem;
  top:150px;
  position: fixed;
  z-index:100;
}
.actor_img p{
  line-height: .875rem;
  color:#727188;
  font-size:.625rem;
  text-align:center;

}
.actor_img h3{
    text-align:center;
    font-size:.6875rem;
    color:#dedee3;
    line-height:.9375rem;
}
.window_box{
  width:21.875rem;
  white-space: nowrap;

}
 .actor_img{
    display:flex;
    flex-direction:row;
    white-space: nowrap;
    overflow:scroll;
 }
.actor_img::-webkit-scrollbar{display: none}

 .actor_img>li>img{
     width:4.1875rem;
     height:5.9375rem;
 }
 .actor_img>li{
    width:4.1875rem;
    height:7.9375rem;
    margin-right:.4375rem;
 }
.introduce2>span>img,.actor>span>img{
    width:.3125rem;
    transform: rotate(90deg);
}
.introduce2,.actor{
    line-height: 1.875rem;
    display: flex;
    justify-content:space-between;
}
.introduce2>h1,.actor>h1{
    color:white;
    font-size:.8125rem;
}
.introduce2>span,.actor>span{
    color:#9695a7;
    font-size:.6875rem;
    
}
.content{
    height:3.9375rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
    overflow: hidden;
}
.hehe>p{
    color:white;
    font-size:.75rem;
    line-height: 1.25rem;
}
.foot>p{
    color:#ffe9a5;
    font-size:.6875rem;
    line-height: 1.75rem;
}
.img_box {
  width: 2.4rem;
  margin: .25rem 0.3125rem 0 0;
  line-height: 0.5625rem;
}
.img_box > img {
  float: right;
  width: 0.3125rem;
  height: 0.3125rem;
  margin: -0.14375rem 0.1875rem 0.1875rem -0.125rem;
}
.right > div > span {
  color: gray;
  font-size: 0.375rem;
}
.right > div {
  display: flex;
  align-items: center;
}
.progress_box1{ background-image: linear-gradient(90deg, #ffb500 66%, gray 44%);}
.progress_box2{ background-image: linear-gradient(90deg, #ffb500 66%, gray 44%);}
.progress_box3{ background-image: linear-gradient(90deg, #ffb500 66%, gray 44%);}
.progress_box4{ background-image: linear-gradient(90deg, #ffb500 66%, gray 44%);}
.progress_box5{ background-image: linear-gradient(90deg, #ffb500 66%, gray 44%);}
.progress_box1,.progress_box2,.progress_box3,.progress_box4,.progress_box5{
  width: 5.3125rem;
  height: 0.25rem;
  margin-right: .1875rem;
}

.renping > .left > p {
  font-size: 0.5rem;
  color: #848393;
  line-height: 1.0625rem;
  text-align: end;
}
.renping > .left > h2 {
  color: #f5ab02;
  font-size: 1.375rem;
  line-height: 1.875rem;
  margin-top: 1rem;
  text-align: end;
}
.renping > .left {
  width: 6.875rem;
  float: left;
  padding-right: 1.25rem;
}
.renping > .right {
  width: 13.0625rem;
  float: left;
  padding-top: 0.75rem;
}
.renping {
  border-bottom: 0.1875rem solid #282650;
  overflow: hidden;
  display: flex;
  flex-flow: row;
  padding-bottom:1.25rem;
}
.give_top {
  overflow: hidden;
}
.give_top > span {
  font-size: 0.625rem;
  line-height: 1.875rem;
  color: #90909e;
  float: right;
}
.give_top > b {
  color: white;
  font-size: 0.6875rem;
  line-height: 1.875rem;
}
.give_top > img {
  width: 0.75rem;
  height: 0.75rem;
}
.give {
  width: 20.625rem;
  height: 9.0625rem;
  background: #161533;
  border-radius: 0.1875rem;
  padding: 0 0.625rem;
}

.page {
  background-color: #1c1a40;
  padding: 0 0.75rem;
}
.introduce {
  display: flex;
  margin-bottom: 0.75rem;
}
.video_img {
  position: relative;
}
.video_img > img:nth-child(1) {
  width: 5.3125rem;
  height: 7.1875rem;
}

.video_img > img:nth-child(2) {
  width: 1.875rem;
  height: 1.875rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
.introduce .small_img {
  width: 2.5rem;
  height: 0.875rem;
}
.vi_data > li:nth-child(1) {
  color: white;
  font-size: 0.75rem;
  line-height: 2.8125rem;
}
.right_name {
  margin-left: 0.625rem;
}
.right_name > h3 {
  color: white;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.625rem;
}
.right_name > p {
  color: #78778e;
  font-size: 0.6875rem;
  line-height: 0.875rem;
}
.right_name > button {
  width: 7.6875rem;
  height: 1.5625rem;
  background: #6b6a83;
  border-radius: 0.1875rem;
  font-size: 0.75rem;
  color: #e0e0e5;
}
.right_name > button > img {
  width: 0.875rem;
  height: 0.875rem;
}
</style>