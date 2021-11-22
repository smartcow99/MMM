<template>
    <div class="entire-box page">
        <div class="info-box">
            <div class="tab">
                <router-link to="/mypage/">마이페이지</router-link> &nbsp;&nbsp;|&nbsp;&nbsp;
                <router-link to="/mypage/purchase-history">구매 내역</router-link> 
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
}
div.tab{
    display:flex;
    flex-direction: row;
    justify-items: flex-start;
    font-size:28px;
    font-weight: bold;
    margin-bottom: 20px;
}
div.info-box{
    position: absolute;
    margin-top:70px;
    margin-left:70px;
}

</style>