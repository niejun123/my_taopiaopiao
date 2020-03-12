 <template>
  <div class="cat_box">
    <ul class='small_box'>
      <li>
        <img src="http://s0.meituan.net/bs/myfe/canary/file/asgard/images/avatar.png" alt />
      </li>
      <li class='zhi'>
          <h6>猫眼</h6>
          <p>在线选座，热门影视，爱上看电影</p>
      </li>
      <li>
            <button>立即下载</button> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "maoyan",
  data() {
    return {};
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style>
.cat_box {
  height: 3.3125rem;
  background: white;
  box-sizing: border-box;
}

.small_box{
  

    display: flex;
   align-items: baseline; 
 
}
  
.small_box h6{
    font-size:.875rem;
              
}
.zhi{
   margin-left:.625rem;
}
.small_box p{
    color:#909090;
    font-size: .6875rem;
    line-height:1.125rem;   
    
}
.cat_box>ul>li>img {
  width: 2.1875rem;
  height: 2.1875rem;
   margin:.625rem 0 0 .625rem;
}
.cat_box button{
    width:3.75rem;
    height:1.6875rem;
    outline-style: none;
    background-color:#ef4238;
    color:white;
    font-size:.6875rem;
    border-radius:.0625rem ;
    margin-left:5.375rem;
}
</style>