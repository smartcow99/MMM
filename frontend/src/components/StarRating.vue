<template>
    <span>
        <span v-if="rate<0.5">
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<1">
            <font-awesome-icon class="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<1.5">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<2">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<2.5">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<3">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<3.5">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<4">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['fas','star-half-alt']"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>

        </span>
        <span v-else-if="rate<4.5">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['far','star']"/>
        </span>
        <span v-else-if="rate<5">
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" :icon="['fas','star-half-alt']"/>
        </span>
        <span v-else>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
            <font-awesome-icon class="star" icon="star"/>
        </span>
    </span>
</template>

<script>
import About from '../views/About.vue'
export default {
    components: { About },
    name:'StarRating',
    props: {
        'rate': Number
    }
}
</script>

<style>
.star {
    color:gold;
}
</style>