<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="static\images\banner1.png" alt=""></div>
             <div class="swiper-slide"><img src="static\images\banner1.png" alt=""></div>
              <div class="swiper-slide"><img src="static\images\banner1.png" alt=""></div>
        </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

 
export default {
  name:'banner',
      data(){
          return{
              video:[]
          }
      },
  mounted() {
      
  
  }
};
//swiper
</script>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
var mySwiper = new Swiper('.swiper-container',{
pagination: {
    el: '.swiper-pagination',
},
observer: true,
})
</script>
 
<style>
  .swiper-slide>img{
        width: 23.4375rem;
    }  
     
</style>