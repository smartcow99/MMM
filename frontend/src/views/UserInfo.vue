<template>
    <div>
        <div class="box">
            <img :src="userInfo['profile']" alt="내 프로필"/>
            <Btn theme="primary">프로필 사진 변경</Btn>
            <p>사진 용량 제한</p>
        </div>
        <div class="box">
            <span>이름</span><input type="text"/>
            <span>생년월일</span><input type="date"/>
        </div>
        <div class="box">
            로그인 정보
            <span>아이디</span><input type="text"/>
            <span>비밀번호</span><Btn theme="gray" @click="changePassword">비밀번호 변경</Btn>
            <div v-if="changePasswordState">
                <span>새 비밀번호</span><input type="password"/>
                <span>비밀번호 재입력</span><input type="password"/>
            </div>
        </div>
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
import { mapState } from 'vuex'
export default {
    name: 'UserInfo',
    components: {
        Btn
    },
    data() {
        return {
            name:'',
            changePasswordState:false
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    },
    methods: {
        changePassword() {
            //비번 변경 넣긴 했는데 아마 못쓰게 막아놨습니다.
            alert('! 데모버전에서 비밀번호 변경은 막혀있습니다. !')
        }
    }
}
</script>

<style>
.box {
    border:1px solid var(--placeholder-color);
}
</style>