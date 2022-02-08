<template>
  <div>
    <!--<MyBlogMainpage v-bind:user_id="user_id"></MyBlogMainpage>
    -->
    <!--<MyBlogLogin></MyBlogLogin>-->
    <div class="Header">
      <h1>My Blog</h1>
      <hr>
    </div>
    <div class="Content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MyBlogLogin from './components/MyBlogLogin.vue'
import MyBlogMainpage from './components/MyBlogMainpage.vue'
export default {
  name: 'App',
  data(){
    return {
      user_id: 1
    }
  },
  components: {
    MyBlogMainpage,
    MyBlogLogin
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
.Content{
  padding-top: 5px;
}
.Header{
 margin: auto;
  width: 60%;
  color: white;
  padding-bottom: 5px;
  background-color: Indigo;
}
</style>
