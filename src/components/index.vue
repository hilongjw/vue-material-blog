<script>
import mdl from 'material-design-lite/material'
import store from '../store/index'
var Cloud = store.state.Cloud;
export default {
  data(){
    self = this;
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
      store.actions.hideLoading();
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
      store.actions.showLoading();
      window.scrollTop = 0;
  },
  computed:{
    loginState(){
      return store.state.logined
    }
  },
  methods:{
    getData(){
      this.loadPost(self.site.skip,function(tmp){
        store.actions.hideLoading();
        self.posts = tmp
        self.site.skip = 10;
        self.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
      })
      
    },
    showLogin(){
      store.actions.showLogin();
      document.getElementById('indexDrawer').setAttribute('class','mdl-layout__drawer')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].setAttribute('class','mdl-layout__obfuscator')

      
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    hideLogin(event){
      if(event.target == document.getElementById('showLogin')){
        return true;
      }
      store.actions.hideLogin();
      store.actions.hideSign();
    },
    showModal(){
      store.actions.showModal('提示','你的文章太过糟糕，不能完成提交');
      document.getElementById('indexDrawer').setAttribute('class','mdl-layout__drawer')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].setAttribute('class','mdl-layout__obfuscator')

      
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    loadPost(skip,add){
      var Post = Cloud.Object.extend('Post');
      var query = new Cloud.Query(Post);
      var tmp = [];
      query.addDescending('updatedAt');
      query.skip(skip);
      query.limit(10);
      query.include('author')
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
              "author": object.get('author').getUsername(),
              "avatar":object.get('author').get('avatar'),
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
    clickMore(){
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
    goEntry(id){
      window.scrollTop = 0;
      this.$route.router.go('entry/'+id)
    }
  }
}
</script>
<style>
</style>
<template>
  <div @click="hideLogin" class="cov-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">{{site.name}}</span>
          
        </div>
      </header>
      <div id="indexDrawer" class="mdl-layout__drawer">
        <span class="mdl-layout-title">{{site.name}}</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" v-if="loginState.value" >{{loginState.user.getUsername()}}</a>
          <a class="mdl-navigation__link" id="showLogin" v-if="!loginState.value" v-tap="showLogin">Login</a>
          <a class="mdl-navigation__link" v-link="{path:'/write'}">New Post</a>
          <a class="mdl-navigation__link" v-tap="showModal" >Search</a>
          <a class="mdl-navigation__link" v-link="'entry/568f419000b0bca077d8caf4'">About</a>
        </nav>
      </div>
      <main class="mdl-layout__content">

        <div class="cov-blog__posts mdl-grid">

          <div v-link="{ name: 'entry', params: { id: post.id }}" class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" v-for="post in posts">
            <div class="mdl-card__media mdl-color-text--grey-50" :style="{'background-image': 'url('+post.frontcover+')'}">
              <h3><a >{{post.title}}</a></h3>
            </div>
            <div class="mdl-color-text--grey-600 mdl-card__supporting-text">{{post.text | shorttext}}
            </div>
            <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
              <div class="minilogo"><img :src="post.avatar" alt=""></div>
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
    </div>
    
</template>