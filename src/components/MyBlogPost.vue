<template>
    <div class="PostText">
        <p>Автор: {{post.login}}</p>
        <p>{{post.text}}</p>
    </div>
</template>

<script>
export default{
    props:['post']
}
</script>

<style scoped>
    .PostText{
        border: 1px double black;
        text-align: left;
        margin: 4px;
    }
    .PostText p{
        margin-left: 5px;
        margin-right: 5px;
    }
</style>