<template>
    <span @click="$emit('delete', $events)">
        <button class="tag">
            <small id="delete-tag" >
                #
                {{title}}
                <font-awesome-icon class="delete icon" icon="times"/>
            </small>
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
.tag {
    font-size:16px;
    height:26px;
    border-radius: 13px;
    border:1px solid var(--placeholder-color);
    color:var(--placeholder-color);
    background-color:var(--background-color);
    margin:3px;
    padding:0px 12px 0px 12px;
    cursor: pointer ;
}
.tag:hover {
    border:1px solid var(--primary-color);
    color: var(--primary-color);
    cursor:pointer;
}
#delete-tag{
    background-color: transparent;
    border:transparent;
}
.delete {
    margin-left:5px;
}
</style>