<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index'
var Post = store.state.Cloud.Object.extend('Post');

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
    modal(){
      return store.state.modal;
    }
  },
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  methods:{
    hideModal(){
      store.actions.hideModal()
    }
  }
    
}
</script>
<style>
  .cov-modal{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 100;
  }
  .cov-modal .modal-btn{
    float: right;
  }
  .cov-modal .mdl-card__actions{
    position: absolute;
    bottom: 0;
  }
</style>
<template>
  <div class=" cov-modal mdl-card mdl-shadow--4dp" id="cov-modal" v-show="modal.show">
    <div class="mdl-card__supporting-text">
      {{modal.title}}
    </div>
    <div class="mdl-card__supporting-text">
      {{modal.text}}
    </div>
    <div class="mdl-card__actions">
     <a v-tap="hideModal" class="modal-btn mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">ok</a>
    </div>
  </div>
</template>