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
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })

    autosize(document.querySelector('#content'));
  },
  methods:{
    showModal(title,text){
      store.actions.showModal(title,text);
      
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    newPost(){
      var self = this;
      var post = new Post();
      
      var currentUser = store.state.Cloud.User.current();
      if (!currentUser) {
        self.showModal('提示','你还没登录呢，登录之后才能提交文章哦')
        return false;
      }

      post.save({
              "title": self.post.title,
              "frontcover": 'dist/shopping.jpg',
              "text": self.post.content,
              "author": currentUser,
              "favorite": 0
          }, {
        success: function(post) {
          self.showModal('提示','你的文章写的太棒了，已经完成提交。')
        },
        error: function(post, error) {
          self.showModal('提示', '你的文章写的太棒了，但是由于一些故障，没有完成提交。')
        }
      });
    }
  }
}
</script>
<style>
  .writing {
    background:#fff
  }
  .writing .mdl-layout__content{
      margin-top:112px;
    }
  @media screen and (max-width: 1024px){
    .writing .mdl-layout__content{
      margin-top:56px;
    }
  }
  .writing .mdl-navigation__link{
    cursor: pointer;
  }
  .writing .mdl-textfield {
    margin:1rem 0;
    width: 100%;
  }
  .writing .preview-content {
    border-radius: 2px;
    padding: 80px 56px;
    margin-bottom: 80px;
    min-height: 600px;
  }
</style>
<template>
<div class="writing mdl-layout mdl-js-layout mdl-layout--fixed-header
            mdl-layout--fixed-tabs">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title" v-link="{name:'home'}">Cov Blog</span>
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation -->
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" @click="newPost">完成</a>
      </nav>
    </div>
    <!-- Tabs -->
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#fixed-tab-1" class="mdl-layout__tab is-active">编辑</a>
      <a href="#fixed-tab-2" class="mdl-layout__tab">预览</a>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Cov Blog</span>
  </div>
  <main class="mdl-layout__content">
    <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
      <div class="page-content">
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet"></div>
          <div class="mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet"> 
               <div class="mdl-textfield mdl-js-textfield">
                <input  class="mdl-textfield__input" type="text" v-model="post.title">
                <label class="mdl-textfield__label">Title</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield">
                <textarea class="mdl-textfield__input" id="content" v-model="post.content" type="text" rows= "15"></textarea>
                <label class="mdl-textfield__label">Content</label>
              </div>
          </div>
          <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone"></div>
        </div>
       
      </div>
    </section>
    <section class="mdl-layout__tab-panel" id="fixed-tab-2">
      <div class="page-content">
        <div class="preview-container mdl-grid">
          <div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
          <div class="preview-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
            
            <h3>{{post.title}}</h3>
              {{{post.content | marked}}}
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
    
</template>