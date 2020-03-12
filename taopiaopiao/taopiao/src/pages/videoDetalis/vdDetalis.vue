 <template>
        <div>
            <v-detalis></v-detalis>
            <video-data></video-data>
        
        </div>
</template>

<script>

import VDetalis from '../../components/vdetalis/maoyan'
import VideoData from '../../components/vdetalis/videodata'
export default {
    name:'videoDetalis',
    components:{
        VDetalis,
        VideoData
    },
    data(){
        return{
            detalis:[]
        }
    },
    mounted(){
         
    },
    methods:{
        request(){
      
        }
    }
}
</script>

<style>

</style>