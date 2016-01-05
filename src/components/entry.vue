<script>
import mdl from 'material-design-lite/material.js'
import AV from 'avoscloud-sdk';
AV.initialize('2037J60rIoY1FFLAWHPTLY9M-gzGzoHsz', 'D0ShkNgI2SSL6WheRA8nK6pE');
var Post = AV.Object.extend('Post');

export default {
  data(){
    return{
      state:{
        favorite:false,
        commentTmp:''
      },
      post:{}
    }
  },
  ready:function(){
    console.log(componentHandler)
    componentHandler.upgradeAllRegistered();
  },
  asyncData: function(resolve, reject) {
    var self = this;
    this.loadPost(0,function(tmp){
      resolve({
              post:tmp
            });
      self.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    })
  },
  methods:{
    loadPost:function(skip,add){
      var query = new AV.Query(Post);
      var tmp = null;
      
      query.get(this.$route.params.id, {
          success: function(post) {
            var object = post;
            tmp = {
              "id": object.id,
              "title": object.get('title'),
              "frontcover": object.get('frontcover'),
              "text": object.get('text'),
              "author": object.get('author'),
              "time": object.updatedAt,
              "favorite": object.get('favorite'),
              "comment": object.get('comment')
          };
            
          (add)(tmp);

          },
          error: function(object, error) {
            // 失败了.
            console.log(object);
          }
      });
    },
    tapFavorite:function(){
      var self = this;
      var query = new AV.Query(Post);
      query.get(this.$route.params.id, {
          success: function(post) {
            
            if(self.state.favorite){
              self.state.favorite = false;
              self.post.favorite--;
              post.increment('favorite',-1);
            }else{
              self.state.favorite = true;
              self.post.favorite++;
              post.increment('favorite',1);
            }

            post.save();

          },
          error: function(object, error) {
            // 失败了.
            console.log(object);
          }
      });
      
    },
    addComment:function(){

       var self = this;
      var query = new AV.Query(Post);
      query.get(this.$route.params.id, {
          success: function(post) {
            
             post.add('comment', {
                "avatar": "dist/img/co2.jpg",
                "name": "cov的朋友们",
                "time": new Date(),
                "text": self.state.commentTmp
            });
             self.post.comment.push({
                "avatar": "dist/img/co2.jpg",
                "name": "cov的朋友们",
                "time": new Date(),
                "text": self.state.commentTmp
            })

            post.save();

          },
          error: function(object, error) {
            // 失败了.
            console.log(object);
          }
      });
    },
    goNext:function(type){
      var self = this;
      if(type==='next'){
        this.$http.get('dist/posts.json').then(function (response) {
          
          if(response.data[self.post.id+1] != undefined ){
            document.documentElement.scrollTop = document.body.scrollTop =0
            self.post = response.data[self.post.id+1]
            self.$route.router.go(self.post.id+1)
          }
          
        }, function (response) {
        });
      }else{
        this.$http.get('dist/posts.json').then(function (response) {
          
          if(response.data[self.post.id-1] != undefined){
            document.documentElement.scrollTop = document.body.scrollTop =0
            self.post = response.data[self.post.id-1]
            self.$route.router.go(self.post.id+1)
          }
          
        }, function (response) {
        });
      }
    }
  },
  ready:function(){
    window.scrollTop = 0;
  }
}
</script>
<style>
  .faed{
    color:rgb(255,64,129);
  }
</style>
<template>

<div class="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
        <div class="demo-back">
          <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="'/'" title="go back" role="button">
            <i class="material-icons" role="presentation">arrow_back</i>
          </a>
        </div>
        <div class="demo-blog__posts mdl-grid">
          <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
            <div class="mdl-card__media mdl-color-text--grey-50">
              <h3>{{post.title}}</h3>
            </div>
            <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">
              <div class="minilogo"></div>
              <div>
                <strong>{{post.author}}</strong>
                <span>{{post.time | timeago}}</span>
              </div>
              <div class="section-spacer"></div>
              <div class="meta__favorites" v-tap="tapFavorite">
                 {{post.favorite}} <i class="material-icons" role="presentation" :class="{'faed':state.favorite}">favorite</i>
                <span class="visuallyhidden">favorites</span>
              </div>
              <div>
                <i class="material-icons" role="presentation">bookmark</i>
                <span class="visuallyhidden">bookmark</span>
              </div>
              <div>
                <i class="material-icons" role="presentation">share</i>
                <span class="visuallyhidden">share</span>
              </div>
            </div>
            <div class="mdl-color-text--grey-700 mdl-card__supporting-text">
              {{{post.text | marked}}}
            </div>
            <div class="mdl-color-text--primary-contrast mdl-card__supporting-text comments">
              <div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <textarea rows=1 class="mdl-textfield__input" v-model="state.commentTmp"></textarea>
                  <label for="comment" class="mdl-textfield__label">Join the discussion</label>
                </div>
                <button v-tap="addComment" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                  <i class="material-icons" role="presentation">check</i><span class="visuallyhidden">add comment</span>
                </button>
              </div>
              <div class="comment mdl-color-text--grey-700" v-for="comment in post.comment">
                <header class="comment__header">
                  <img :src="comment.avatar" class="comment__avatar">
                  <div class="comment__author">
                    <strong>{{comment.name}}</strong>
                    <span>{{comment.time | timeago}}</span>
                  </div>
                </header>
                <div class="comment__text">
                  {{comment.text}}
                </div>
                <nav class="comment__actions">
                  <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                    <i class="material-icons" role="presentation">thumb_up</i><span class="visuallyhidden">like comment</span>
                  </button>
                  <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                    <i class="material-icons" role="presentation">thumb_down</i><span class="visuallyhidden">dislike comment</span>
                  </button>
                  <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                    <i class="material-icons" role="presentation">share</i><span class="visuallyhidden">share comment</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <nav class="demo-nav mdl-color-text--grey-50 mdl-cell mdl-cell--12-col">
            <a v-tap="goNext('next')" class="demo-nav__button">
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role="presentation">
                <i class="material-icons">arrow_back</i>
              </button>
              Newer
            </a>
            <div class="section-spacer"></div>
            <a v-tap="goNext('last')" class="demo-nav__button">
              Older
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role="presentation">
                <i class="material-icons">arrow_forward</i>
              </button>
            </a>
          </nav>
        </div>
      </main>
      <div class="mdl-layout__obfuscator"></div>
    </div>
    
</template>