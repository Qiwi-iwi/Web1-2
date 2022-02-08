<template>
    <div class="PListDiv">
        <MyBlogPost v-for="u_post of posts" :key="u_post.user_id" 
                v-bind:post="u_post">
        </MyBlogPost>
    </div>
</template>
<script>

import MyBlogPost from './MyBlogPost.vue'
export default {
    data(){
        return {
            posts:{}
        }
    },
    components:{
        MyBlogPost
    },
    props:['login'],
    methods:{
        get_posts(){
            console.log(this.login)
            console.log('load posts')
            fetch('http://127.0.0.1:8101/posts/' + this.login)
            .then(response => response.json())
            .then(json => {
                this.posts = json
            })
        },
    },
    mounted(){
        this.get_posts();
    }
}
</script>
<style scoped>
    .PListDiv{
        height: 80%;
    }
</style>