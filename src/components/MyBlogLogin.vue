<template>
    <div>
        <p v-if="wrong">Повторите попытку</p>
        <p>Логин</p>
        <input v-model="login" type="text">
        <p>Пароль</p>
        <input v-model="psw" type="password">
        <p><button>Регистрация</button><button @click="on_login">Вход</button><br></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            login:'',
            psw:'',
            wrong: false
        }
    },
    methods:{
        on_login(){
            console.log('enter')
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({login: this.login, psw: this.psw})
            }
            fetch("http://127.0.0.1:8101/login", requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log('resp')
                console.log(json.status)
                if(json.status === 0)
                    this.wrong = true;
                else
                    this.$router.push('/main_page/' + json.login)
            });
        },
    }
}
</script>