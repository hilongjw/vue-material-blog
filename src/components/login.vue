<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index'
var Post = store.state.Cloud.Object.extend('Post');

export default {
  data(){
    return{
      post:{
        title:'',
        content:""
      }
    }
  },
  computed:{
    login(){
      return store.state.login;
    }
  },
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  methods:{

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
            <input class="mdl-textfield__input" type="text">
            <label class="mdl-textfield__label">E-mail</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text">
            <label class="mdl-textfield__label">Password</label>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Sign up
        </a>
         <a class="login-btn mdl-button mdl-button--colored mdl-js-button  mdl-button--raised mdl-js-ripple-effect">
          Log in
        </a>
      </div>
    </div>
  </div>
  
    
</template>