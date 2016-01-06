<script>
import mdl from 'material-design-lite/material'
import store from '../store/index'

export default {
  data(){
    return{
      site:{
        name:'Cov Blog',
        skip:0
      },
      posts:[]
    }
  },
  asyncData: function(resolve, reject) {
    var self = this;
    this.loadPost(0,function(tmp){
      resolve({
              posts:tmp
            })
      self.site.skip = 10;
      self.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    })
    
  },
  ready:function(){
      window.scrollTop = 0;
  },
  methods:{
    showLogin:function(){
      store.actions.showLogin();
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    hideLogin:function(event){
      console.log(event)
      store.actions.hideLogin();
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    loadPost:function(skip,add){
      var Post = store.state.Cloud.Object.extend('Post');
      var query = new store.state.Cloud.Query(Post);
      var tmp = [];
      query.addDescending('updatedAt');
      query.skip(skip);
      query.limit(10);
      query.find({
        success: function(results) {
          var object = null;
          for (var i = 0; i < results.length; i++) {
            object = results[i];
            tmp.push({
              "id": object.id,
              "title": object.get('title'),
              "frontcover": object.get('frontcover'),
              "text": object.get('text'),
              "author": object.get('author'),
              "time": object.updatedAt,
              "favorite": object.get('favorite'),
              "comment": object.get('comment')
          });
            
          }
          (add)(tmp);
        },
        error: function(error) {
          console.log('Error: ' + error.code + ' ' + error.message);
        }
      });
    },
    clickMore:function(){
      var self = this;
      
      this.loadPost(this.site.skip,function(tmp){
        for(let i=0;i<tmp.length;i++){
           self.posts.push(tmp[i])
        }
        self.site.skip=self.site.skip+10;
        self.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
      })
    },
    goEntry:function(id){
      window.scrollTop = 0;
      this.$route.router.go('entry/'+id)
    }
  }
}
</script>
<style>
</style>
<template>
  <div @click="hideLogin(e)" class="cov-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">{{site.name}}</span>
          
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">{{site.name}}</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" v-link="{path:'/write'}">New Post</a>
          <a class="mdl-navigation__link" v-tap="showLogin">Login</a>
          <a class="mdl-navigation__link" href="">Search</a>
          <a class="mdl-navigation__link" href="">About</a>
        </nav>
      </div>
      <main class="mdl-layout__content">

        <div class="cov-blog__posts mdl-grid">

          <div class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" v-for="post in posts">
            <div class="mdl-card__media mdl-color-text--grey-50" :style="{'background-image': 'url('+post.frontcover+')'}">
              <h3><a v-link="'entry/'+(post.id)">{{post.title}}</a></h3>
            </div>
            <div class="mdl-color-text--grey-600 mdl-card__supporting-text">{{post.text | shorttext}}
            </div>
            <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
              <div class="minilogo"></div>
              <div>
                <strong>{{post.author}}</strong>
                <span>{{post.time | timeago}}</span>
              </div>
            </div>
          </div>

          <nav class="demo-nav mdl-cell mdl-cell--12-col">
            <div class="section-spacer"></div>
            <a v-tap="clickMore" class="demo-nav__button" title="show more">
              More
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                <i class="material-icons" role="presentation">arrow_forward</i>
              </button>
            </a>
          </nav>
        </div>
      </main>
      <div class="mdl-layout__obfuscator"></div>
    </div>
    
</template>