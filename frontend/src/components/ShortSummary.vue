<template>
    <div class="short-summary" @click="openShort(shortInfo)">
       <div class="shorts" @mouseover="onHover" @mouseout="offHover">
           <div v-if="hoverOn" id="hover">
               <img src="@/assets/images/testThumbnail.png">
               <span id="shorts-title">{{shortInfo['title']}}</span>
           </div>
           <img v-else src="@/assets/images/testThumbnail.png">

       </div>
       <div class="shorts-stat">
            <div id="subscriber-count">
                <font-awesome-icon :icon="['far','user-circle']" />
                {{subscriber}}
            </div>
            <div id="like-count">
                    <font-awesome-icon :icon="['far','heart']" @click="upLike"/>
                    {{like}}
            </div>
            <div id="view-count">
                <font-awesome-icon :icon="['far','eye']"/>
                {{view}}
            </div>
       </div>
       
        <!-- {{shortInfo['title']}} -->
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    data(){
        return{
            subscriber:'150k',
            like:'2.5k',
            view:'1m',
            // subscriber:currentChannel.subscriber,
            // like:currentShort.like,
            // view:currentShort.view,
            hoverOn:false,
        }
    },
    computed:{
        ...mapState([
            'currentChannel',
            'currentShort'
        ])
    },
    props:{
        shortInfo: Object
    },
    methods: {
        ...mapActions([
            'requestShortInfo',
            'upShortLikeCount'
        ]),
        ...mapMutations([
            'setShortPageOn'
        ]),
        openShort(shortInfo) {
            this.requestShortInfo(shortInfo);
            this.setShortPageOn(true);
        },
        onHover(){
            this.hoverOn=true;
        },
        offHover(){
            this.hoverOn=false;
        },
        upLike(){
            console.log('test')
            // this.upShortLikeCount();
        }

    }
}
</script>

<style scoped>
*{
    font-family: 'rubik';
    font-size:14px;
}
.short-summary {
    border:1px solid #cccccc;
    border-radius: 4px;
}
.shorts{
    position:relative;
    width:200px;
    height: 300px;
    background-color: white;
    border-radius: 4px;
    cursor:pointer;

}
#hover{
    position:relative;
    width:100%;
    height: 100%;
    cursor:pointer;
    background-color:black;
    opacity: 0.7;
}
#shorts-title{
    position:absolute;
    
}
img{
    width:100%;
    height:100%;
}
font-awesome-icon{
    width:50px;
    height:50px;
}
.shorts-stat{
    display:flex;
    flex-direction:row;
    justify-content: space-around;   
}
#subscriber-count{
    display:flex;
    flex-direction: column;
    align-items: center;
}
#like-count{
    display:flex;
    flex-direction: column;
    align-items: center;
}
#view-count{
    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>