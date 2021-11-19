<template>
<span>
        <button class="tag"># {{title}}<p id="delete-tag" @click="$emit('delete', $events)">x</p>
        </button>
        </span>
</template>

<script>
export default {
    emits:[
        'delete',
    ],
    props: {
        'title':String
    },
    method:{
        test(){
            console.log('delete');
        }
    }
}
</script>

<style scoped>
p{
    display:inline;
    cursor:pointer;
    font-size:18px;
}
.tag {
    border:1px solid var(--placeholder-color);
    color:var(--placeholder-color);
    background-color:var(--background-color);
    margin:0 10px 0 0;
}
#delete-tag{
    background-color: transparent;
    border:transparent;
    margin: 0 0 0 15px;
}
#delete-tag:hover{
    color:black;
}
</style>