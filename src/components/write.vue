<script>
import mdl from 'material-design-lite/material.js'
import AV from 'avoscloud-sdk'

AV.initialize('2037J60rIoY1FFLAWHPTLY9M-gzGzoHsz', 'D0ShkNgI2SSL6WheRA8nK6pE');
var Post = AV.Object.extend('Post');

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
  },
  methods:{
    newPost:function(){
      var self = this;
      var post = new Post();

      post.save({
              "title": self.post.title,
              "frontcover": 'dist/img/shopping.jpg',
              "text": self.post.content,
              "author": 'longjw',
              "favorite": 0,
              "comment": []
          }, {
        success: function(post) {
          // 成功保存之后，执行其他逻辑.
          console.log('New object created with objectId: ' + post.id);
        },
        error: function(post, error) {
          // 失败之后执行其他逻辑
          // error 是 AV.Error 的实例，包含有错误码和描述信息.
          console.log('Failed to create new object, with error message: ' + error.message);
        }
      });
    }
  }
}
</script>
<style>
  body::before {
    background:none;
  }
  .mdl-layout__content{
      margin-top:112px;
    }
  @media screen and (max-width: 1024px){
    .mdl-layout__content{
      margin-top:56px;
    }
  }
  .mdl-navigation__link{
    cursor: pointer;
  }
  .mdl-textfield {
    margin:1rem 0;
    width: 100%;
  }
  .preview-content {
    border-radius: 2px;
    padding: 80px 56px;
    margin-bottom: 80px;
    min-height: 600px;
  }
</style>
<template>

<!-- Simple header with fixed tabs. -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header
            mdl-layout--fixed-tabs">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title" v-link="{path:'/'}">Cov Blog</span>
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
                <input class="mdl-textfield__input" type="text" v-model="post.title">
                <label class="mdl-textfield__label">Title</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield">
                <textarea class="mdl-textfield__input" v-model="post.content" type="text" rows= "15"></textarea>
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