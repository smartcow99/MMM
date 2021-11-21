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
    font-size:16px;
    height:26px;
    border-radius: 13px;
    border:1px solid var(--placeholder-color);
    color:var(--placeholder-color);
    background-color:var(--background-color);
    margin:0 10px 0 0;
}
.tag:hover {
    border:1px solid var(--primary-color);
    color: var(--primary-color);
    cursor:pointer;
}
#delete-tag{
    background-color: transparent;
    border:transparent;
    margin: 0 0 0 15px;
}
#delete-tag:hover{
    font-weight: bold;
}
</style>