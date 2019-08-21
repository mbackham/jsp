<template>
  <div>
      <van-nav-bar
      title="用户登陆"
      left-text='返回'
      left-arrow
      @click-left='goBack '>
      </van-nav-bar>
      <div class="register-panel">
        <van-field
        v-model="username"
        label='用户名'
        icon='clear'
        palaceholder='请输入用户名'
        :error-message="usernameErrorMsg "
        required>

        </van-field>
         <van-field
        v-model="password"
        type="password"
        label='密码'
        icon='clear'
        palaceholder='请输入密码'
        :error-message='passwordErrorMsg'
        required>
        </van-field>
        <div class="register-button">
          <van-button @click="LoginAction()" type="primary" size='large' :loading="openLoading">登陆</van-button>
        </div>
      </div>
      </div>
</template>

<script>
import axios from 'axios';
 import Vue from 'vue' 
import {Toast} from 'vant'
Vue.prototype.$http = axios;
import url from '@/serviceApi.config.js'
export default {
data(){
  return{
    username:'',
    password:'',
    openLoading:false,//是否开启注册load状态
    usernameErrorMsg:'',//当用户名出现错误提示
    passwordErrorMsg:''//密码错的时候

 }
},
methods:{
  goBack(){
    this.$router.go(-1)
  },
  loginAction(){
  //  if(this.checkForm()){
  //    this.axiosLoginUser()
  //  }else{
     
  //  }
  this.checkForm()&& this.axiosLoginUser()
  },
  axiosLoginUser(){
          this.openLoading=true,

    axios.post('http://localhost:3000/user/login',{
       username:this.username,
     password:this.password
    }).then(res=>{
      console.log(res)
      if(res.data.code==200){

        Toast.success(res.data.message)
        this.$router.push('/')
      }else{
        console.log(res.data.message )
                this.openLoading=false

                Toast.fail('注册失败')

      }
    }).catch((err)=>{
      console.log(err)
              Toast.fail('注册失败')
                      this.openLoading=false


    })
  },
  //验证表单
  checkForm(){
    let isOk = true
    if(this.username.length<5){
      this.usernameErrorMsg = "用户名不能小于5位"
      isOk = false
    }else{
      this.username= ''
    }
    if(this.password.length<6){
      this.passwordErrorMsg = "密码不能小于6位"
      isOk = false
    }else{
      this.password=''
    }
    return isOk
  }
}
}
</script>

<style>
.register-panel{
  width:96%;
  border-radius: 5px;
  margin:20px auto;
  padding-bottom: 80px;

}
.register-button{
  padding-top:10px;
}

</style>