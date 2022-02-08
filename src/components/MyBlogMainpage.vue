<template>
    <div class="MainDiv">
        <div class="LeftPanel">
            <a @click="on_click" class="bot5">Все посты</a><br>
            <router-link to="/" class="bot5">Выход</router-link>
        </div>
        <div class="RightPanel">
            <MyBlogPostAdder @new_post_add="on_post_add"></MyBlogPostAdder>
            <MyBlogPList ref="PList" v-bind:login="c_login"></MyBlogPList>
        </div>
    </div>
</template>

<script>
import MyBlogPList from './MyBlogPList.vue'
import MyBlogPostAdder from './MyBlogPostAdder.vue'
export default{
    data(){
        return {
            c_login: this.login
        }
    },
    props:{
        login:{
            type: String,
            default: 'default'
        }
    },
    components:{
        MyBlogPList,
        MyBlogPostAdder
    },
    methods:{
        on_post_add(new_post){
            console.log('add post');
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({text: new_post, login: this.c_login })
            };
            console.log(requestOptions.body);
            fetch("http://127.0.0.1:8101/add_post", requestOptions)
            .then(response => this.$refs.PList.get_posts())
        },
        on_click(){
            console.log('on_click')
            this.c_login = 'default'
            this.$refs.PList.get_posts()
        }
    }
}
</script>

<style scoped>
    .LeftPanel{
        align-content: right;
        float: left;
        width: 22%;
        margin-left: 22%;
        height: 100%;
        border: 1px double black;
    }
    .LeftPanel button{
        border: none;
        background-color: white;
    }
    .RightPanel{
        float: right;
        height: 100%;
        margin-right: 20%;
        width: 35%;
        border: 1px double black;
    }
    .MainDiv{
        height: 100%;
    }
    a.bot5 {
        display: block;
        width:80px;
        margin: 20px auto;
        vertical-align: top;
        padding: 7px 20px;
        font-family: inherit;
        font-size: 15px;
        color: #111;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 0 2px rgba(255, 255, 255, 1);
        background-color: #ccc;
        background-clip: padding-box;
        border: 1px solid;
        border-color: #202020 #1a1a1a #111;
        border-radius: 2px;
        background-image: -webkit-linear-gradient(top, #efefef, #777);
        background-image: -moz-linear-gradient(top, #efefef, #777);
        background-image: -o-linear-gradient(top, #efefef, #777);
        background-image: linear-gradient(to bottom, #efefef, #777);
        -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0 1px 1px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.2);
    }
    a.bot5:hover {
        background-color: #aaaaaa;
        background-image: -webkit-linear-gradient(top, #ccc, #555);
        background-image: -moz-linear-gradient(top, #ccc, #555);
        background-image: -o-linear-gradient(top, #ccc, #555);
        background-image: linear-gradient(to bottom, #ccc, #555);
    }
    a.bot5:active, .bot5.active {
        background-color: #b42f32;
        border-color: #1c1c1c #202020 #222;
        -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
    }
</style>