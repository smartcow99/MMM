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
                {{translateUnit("subscriber", subscriber, $event).returnVal}}
            </div>
            <div id="like-count">
                    <font-awesome-icon id="fa-heart-icon" :icon="['far','heart']" @click="upLike"/>
                {{translateUnit("like", like, $event).returnVal}}
            </div>
            <div id="view-count">
                <font-awesome-icon id="fa-icon" :icon="['far','eye']"/>
                {{translateUnit("view", view, $event).returnVal}}
            </div>
       </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    data(){
        return{
            like:this.shortInfo.numOfHearts==null?0:this.shortInfo.numOfHearts,
            view:this.shortInfo.numOfViews==null?0:this.shortInfo.numOfViews,
            subscriber:this.shortInfo.numOfSubscribers==null?0:this.shortInfo.numOfSubscribers,
           hoverOn:false,
        }
    },
    computed:{
        ...mapState([
            'currentChannel',
            'currentShort',
            'recommendShortList'
        ]),
    },
    props:{
        shortInfo: Object,
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
            this.requestShortInfo(shortInfo.shortId);
            this.setShortPageOn(true);
        },
        onHover(){
            this.hoverOn=true;
        },
        offHover(){
            this.hoverOn=false;
        },
          translateUnit(element, data, event){
              console.log(data)
              if(element=="subscriber"){
                  if(data>=1000000){
                      data/=1000000;
                data=Math.floor(data*10)/10+'M';
            }
            else if(data>=1000 && data<1000000){
                data/=1000;
                data=Math.floor(data*10)/10+'K';
            }
                const returnVal=data;
                console.log(returnVal)
            return{
                returnVal,
            }
            }
            else if(element=="like"){
            if(data>=1000000){
                data/=1000000;
                data=Math.floor(data*10)/10+'M';
            }
            else if(data>=1000 && data<1000000){
                data/=1000;
                data=Math.floor(data*10)/10+'K';
            }const returnVal=data;
            return{
                returnVal,
            }
            }
        else{
            if(data>=1000000){
                data/=1000000;
                data=Math.floor(data*10)/10+'M';
            }
            else if(data>=1000 && data<1000000){
                data/=1000;
                data=Math.floor(data*10)/10+'K';
            }const returnVal=data;
            return{
                returnVal,
            }
        }
        },
       
    },
}
</script>

<style scoped>
*{
    font-family: 'rubik';
    font-size:14px;
}
.short-summary {
    /* border:1px solid #CCCCCC; */
    border-radius: 4px;
}
.shorts{
    position:relative;
    width:280px;
    height: 448px;
    background-color: white;
    border-radius: 8px;
    cursor:pointer;
    overflow:hidden;
    box-shadow:2px 2px 6px #999999;
    text-align:center;
}
.shorts:hover {
    transition:0.3s;
    box-shadow:4px 4px 6px #999999;
}
#hover{
    width:100%;
    height: 100%;
    cursor:pointer;
}
#shorts-title{
    margin-top:20px;
    color:white;
    position:relative;
    font-size:1.5em;
    top:-90%;    
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
#fa-heart-icon{
    width:40px;
    height:40px;
    color:var(--error-color);

}
.shorts-stat{
    margin-top:10px;
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