<template>
    <div class="short-video">
        <video autoplay muted controls loop ref="video">
            <source :src="src" type="video/mp4" ref="source"/>
            지원하지 않는 태그 입니다.
        </video>
        <font-awesome-icon v-show="playState==='play'" class="icon" icon="pause"/>
        <font-awesome-icon v-show="playState==='pause'" class="icon" icon="play"/>
    </div>
</template>

<script>
export default {
    name:'ShortVideo',
    props: {
        src:String
    },
    data() {
        return {
            playState:'play' // play, pause, end
        }
    },
    mounted() {

        this.$refs['video'].addEventListener('playing',()=>{
            this.playState = 'play'
        },false);
        
        this.$refs['video'].addEventListener('pause',()=>{
            this.playState = 'pause'
        },false);
    },
    updated() {
        this.$refs['source'].src = this.src;
        this.$refs['video'].load();
    },
    methods: {
        videoHandler() {
            switch(this.playState) {
                case 'play': {
                    this.pause();
                }
                case 'pause': {
                    this.play();
                }
            }
        },
        play() {
            this.$refs['video'].play();
        },
        pause() {
            this.$refs['video'].pause();
        }
    }
}
</script>

<style scoped>
.short-video {
    background-color:black;
}
video {
    width:100%;
    height:100%;
}
.video-control {
    position:absolute;
}
.icon {
    color:var(--background-color);
    font-size:2rem;
    position:absolute;
    top:50%;
    margin-top:-1rem;
    transition:0.3s;
}
video::-webkit-media-controls-play-button {
    display:none;
}
video::-webkit-media-controls-fullscreen-button { 
    display: none !important; 
}
</style>