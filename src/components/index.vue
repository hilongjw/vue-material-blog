<script>
import mdl from 'material-design-lite/material.js'
export default {
	data(){
		return{
			posts:[]
		}
	},
	asyncData: function(resolve, reject) {
		var self = this;
	      this.$http.get('dist/posts.json').then(function (response) {
	          resolve({
	          	posts:response.data
	          })

	      }, function (response) {
	      });
	},
	ready:function(){
	    window.scrollTop = 0;
	},
	methods:{

		goEntry:function(id){
			window.scrollTop = 0;
			this.$route.router.go('entry/'+id)
		}
	}
}
</script>

<template>
	<div class="demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">
        <div class="demo-blog__posts mdl-grid">

          <div class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" v-for="post in posts">
            <div class="mdl-card__media mdl-color-text--grey-50" :style="{'background-image': 'url('+post.frontcover+')'}">
              <h3><a v-link="'entry/'+(post.id+1)">{{post.title}}</a></h3>
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
            <a class="demo-nav__button" title="show more">
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