<template>
    <div class="AddDiv">
        <label>Поделитесь своми мыслями</label><br>
        <div class="Post"><textarea class="Text" name="Text" v-model="new_post"></textarea></div>
        <div class="Sbutt"><button type="submit" @click="$emit('new_post_add', new_post)">Поделиться</button></div>
    </div>
</template>

<script>
    export default{
        data()
        {
            return{
                new_post: ''
            }
        },
    }
</script>

<style scoped>
    .Text{
        width: 100%;
        height: 100%;
    }
    .AddDiv{
        height: 75px;
        border: 1px double black;
    }
    .Post{
        height: 60%;
        float: left;
        width: 70%;
        border: 1px double black;
    }
    .Sbutt{
        height: 70%;
        float: right;
        width: 25%;
        margin-top: auto;
        margin-bottom: auto;
        position: relative;
        vertical-align: center;
        border: 1px double black;
    }
    .Sbutt button{
        margin-top:10%;
        vertical-align: center;
    }
    label{
        padding-left: 0;
        text-align: left;
    }
</style>