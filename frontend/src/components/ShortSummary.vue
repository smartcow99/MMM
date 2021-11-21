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
                <font-awesome-icon id="fa-icon" :icon="['far','user-circle']" />
                {{subscriber}}
            </div>
            <div id="like-count">
                    <font-awesome-icon id="fa-icon" :icon="['far','heart']" @click="upLike"/>
                    {{like}}
            </div>
            <div id="view-count">
                <font-awesome-icon id="fa-icon" :icon="['far','eye']"/>
                {{view}}
            </div>
       </div>
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
    width:280px;
    height: 448px;
}
.shorts{
    position:relative;
    height: 370px; 
    background-color: white;
    border-radius: 8px;
    cursor:pointer;
    overflow:hidden;
}
#hover{
    width:100%;
    height: 100%;
    cursor:pointer;
}
#shorts-title{
    color:white;
    position:relative;
    font-size:28px;
    top:-99%;    
}
img{
    width:100%;
    height:100%;
    transition: all 0.35s ease;
}
img:hover{
    filter:brightness(50%);
}
#fa-icon{
    width:40px;
    height:40px;
}
.shorts-stat{
    height:75px;
    display:flex;
    flex-direction:row;
    justify-content: space-around; 
    align-items: center;  
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