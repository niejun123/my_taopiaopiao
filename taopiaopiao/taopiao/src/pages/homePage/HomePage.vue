 <template>
  <div>
    <head-nav></head-nav>
    <ban-ner></ban-ner>
    <list-video></list-video>
  </div>
</template>

<script>
import HeadNav from "../../components/home/headNav";
import BanNer from "../../components/home/banNer";
import ListVideo from '../../components/home/listVideo'
import axios from "axios";
 

export default {
  components: {
    BanNer,
    HeadNav,
    ListVideo
  },
  mounted() {
   
    
  }
};
</script>

<style>
</style>