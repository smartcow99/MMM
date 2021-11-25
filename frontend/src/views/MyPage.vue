<template>
    <div class="entire-box page">
        <div class="info-box">
            <div class="tab">
                <router-link to="/mypage/" :class="{selected:$route.path==='/mypage' || $route.path==='/mypage/'}">
                    <span>마이페이지</span>
                </router-link>
                <span class="divider"></span>
                <router-link to="/mypage/purchase-history" :class="{selected:$route.path==='/mypage/purchase-history'}">
                    <span>구매 내역</span>
                </router-link> 
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name:'MyPage'
}
</script>

<style scoped>
div.entire-box{
    flex-direction: column;
    /* background-image:url('../assets/images/oriental-tiles.png'); */
    /* background-color:var(--primary-color); */
    background-repeat:repeat;
}
div.tab{
    display:inline-flex;
    flex-direction: row;
    justify-items: flex-start;
    font-size:1.5em;
    font-weight: bold;
    margin-top: 40px;
    background-color:var(--background-color);
}
div.tab a {
    padding:10px;
}
div.tab a span{
    padding:10px 0;
}
.selected span{
    border-bottom:5px solid var(--primary-color);
}
span.divider {
    width:1px;
    height:20px;
    background-color:var(--text-color);
    margin:auto 0;
}
</style>