<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index'

export default {
  data(){
    return{
      login:{
        username:"",
        password:"",
        passwordType:'password'
      },
      sign:{
        username:"",
        password:"",
        passwordType:'password'
      }
    }
  },
  computed:{
    login(){
      return store.state.login;
    },
    sign(){
      return store.state.sign;
    }
  },
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  methods:{
    showModal(title,text){
      store.actions.showModal(title,text);
      
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    showSign(){
      store.actions.hideLogin()
      store.actions.showSign()
       this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
    },
    showLogin(){
      store.actions.showLogin()
      store.actions.hideSign()
       this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
    },
    Signup(){
      var self = this;
      let isEmail = store.state.common.isEmail;

      if(!isEmail.test(this.sign.username)){
        this.showModal('提示','请输入正确的邮件地址')
        return false;
      }

      if(this.sign.password.length<6){
        this.showModal('提示','请使用更加复杂的密码')
        return false;
      }
      
      var user = new store.state.Cloud.User();
      user.set('username', this.sign.username);
      user.set('password', this.sign.password);
      user.set('email', this.sign.username);


      user.signUp(null, {
        success: function(user) {
          self.showModal('提示','注册成功啦,赶快登录吧')
          self.showLogin();
          self.login.username = self.sign.username;
          self.login.password = self.sign.password;

        },
        error: function(user, error) {
          self.showModal('提示','注册失败'+ error.message)
          console.log('Error: ' + error.code + ' ' + error.message);
        }
      });
    },
    logIn(){
      var self = this;
      let isEmail = store.state.common.isEmail;
      if(!isEmail.test(this.login.username)){
        this.showModal('提示','请输入正确的邮件地址')
        return false;
      }

      if(this.login.password.length<6){
        this.showModal('提示','请使用更加复杂的密码')
        return false;
      }

      store.state.Cloud.User.logIn(this.login.username, this.login.password, {
        success: function(user) {
          store.actions.logIning(user)
          store.actions.hideLogin()
        },
        error: function(user, error) {
          self.showModal('提示','登录失败'+ error.message)
        }
      });
    }
  }
    
}
</script>
<style>
  .login-card-wide.mdl-card {
    width: 512px;
  }
  .login-card-wide > .mdl-card__title {
    color: #fff;
    height: 176px;
    background: url('../assets/img/welcome_card.jpg') center / cover;
  }
  .login-card-wide > .mdl-card__menu {
    color: #fff;
  }
  .login-bg{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 100;
  }
  .login-bg .login-card-wide{
    
  }
  .login-bg .input-box{
    text-align: center;
  }
  .login-bg .login-btn{
    float: right;
  }
</style>
<template>
  <div class="login-bg" v-if="login.show">
    <div class="login-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Please Login</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <div class="input-box">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" pattern="([A-Za-z0-9][-A-Za-z0-9]+\@)+([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}" v-model="login.username" type="text">
            <label class="mdl-textfield__label">E-mail</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" v-model="login.password" type="password">
            <label class="mdl-textfield__label">Password</label>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="showSign">
          Sign up
        </a>
         <a class="login-btn mdl-button mdl-button--colored mdl-js-button  mdl-button--raised mdl-js-ripple-effect" v-tap="logIn">
          Log in
        </a>
      </div>
    </div>
  </div>

  <div class="login-bg" v-if="sign.show">
    <div class="login-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Welcome to sign up</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <div class="input-box">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" pattern="([A-Za-z0-9][-A-Za-z0-9]+\@)+([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}" v-model="sign.username" type="text">
            <label class="mdl-textfield__label">E-mail</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" v-model="sign.password" type="password">
            <label class="mdl-textfield__label">Password</label>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="showLogin">
          Log in
        </a>
         <a class="login-btn mdl-button mdl-button--colored mdl-js-button  mdl-button--raised mdl-js-ripple-effect" v-tap="Signup">
          Sign up
        </a>
      </div>
    </div>
  </div>
  
    
</template>