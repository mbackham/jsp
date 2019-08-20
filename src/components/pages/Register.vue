<template>
  <div>
      <van-nav-bar
      title="用户注册"
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
        required>

        </van-field>
         <van-field
        v-model="password"
        type="password"
        label='密码'
        icon='clear'
        palaceholder='请输入密码'
        required>
        </van-field>
        <div class="register-button">
          <van-button @click="axiosRegisterUser" type="primary" size='large'>马上注册</van-button>
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
    password:''
  }
},
methods:{
  goBack(){
    this.$router.go(-1)
  },
  axiosRegisterUser(){
    // axios({
    //   url:url.registerUser,
    //   method:'post',
    //   data:{
    //     username:this.username,
    // password:this.password
    //   }

    // }).then(response=>{
    //   console.log(response)
    // })
    axios.post('http://localhost:3000/user/register',{
       username:this.username,
     password:this.password
    }).then(res=>{
      console.log(res)
      if(res.data.code==200){
        Toast.success(res.data.message)
      }else{
        console.log(res.data.message )
        Toast.fail('注册失败')
      }
    }).catch((err)=>{
      console.log(err)
    })
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