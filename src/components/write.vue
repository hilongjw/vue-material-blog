<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index'
var Post = store.state.Cloud.Object.extend('Post');
var Cloud = store.state.Cloud

export default {
    data() {
            return {
                post: {
                    title: '',
                    content: "",
                    frontImg:null
                }
            }
        },
        ready: function() {
            this.$nextTick(function() {
                componentHandler.upgradeAllRegistered();
            })
            autosize(document.querySelector('#content'));
        },
        computed: {
            loginState() {
                return store.state.logined
            }
        },
        methods: {
            showLogin() {
                    store.actions.showLogin();
                    document.getElementById('indexDrawer').setAttribute('class', 'mdl-layout__drawer')
                    document.getElementsByClassName('mdl-layout__obfuscator')[0].setAttribute('class', 'mdl-layout__obfuscator')


                    this.$nextTick(function() {
                        componentHandler.upgradeAllRegistered();
                    })
                },
            hideLogin(event) {
                if (event.target == document.getElementById('showLogin')) {
                    return true;
                }
                store.actions.hideLogin();
                store.actions.hideSign();
            },
            showModal(title, text) {
                store.actions.showModal(title, text);

                this.$nextTick(function() {
                    componentHandler.upgradeAllRegistered();
                })
            },
            newPost() {
                var self = this;
                var post = new Post();

                var currentUser = store.state.Cloud.User.current();
                if (!currentUser) {
                    self.showModal('提示', '你还没登录呢，登录之后才能提交文章哦')
                    return false;
                }
                if (self.post.title == '') {
                    self.showModal('提示', '标题都没有写呢')
                    return false;
                }
                if (self.post.content == '') {
                    self.showModal('提示', '文章内容都没有写呢')
                    return false;
                }
                if(self.post.frontImg == null){
                    self.post.frontImg = 'dist/shopping.jpg';
                }
                post.save({
                    "title": self.post.title,
                    "frontcover": self.post.frontImg,
                    "text": self.post.content,
                    "author": currentUser,
                    "favorite": 0
                }, {
                    success: function(post) {
                        self.showModal('提示', '你的文章写的太棒了，已经完成提交。')
                    },
                    error: function(post, error) {
                        self.showModal('提示', '你的文章写的太棒了，但是由于一些故障，没有完成提交。')
                    }
                });
            },
            upImg(){
                var self = this;
                console.log(1);
                var fileUploadControl = document.getElementById('frontImg');
                if (fileUploadControl.files.length < 1) {
                     self.showModal('提示', '文件类型异常')
                     return false;
                }
                var file = fileUploadControl.files[0];
                var name = 'avatar.jpg';

                var avFile = new Cloud.File(name, file);
                avFile.save().then(function() {
                    self.post.frontImg = avFile.url()
                }, function(error) {
                  self.showModal('提示', error.message)
                });
            
            }
        }
        
}
</script>
<style>
.writing {
    background: #fff
}

.writing .mdl-layout__content {
    margin-top: 112px;
}

@media screen and (max-width: 1024px) {
    
}

.writing .mdl-navigation__link {
    cursor: pointer;
}

.writing .mdl-textfield {
    margin: 1rem 0;
    width: 100%;
}

.writing .preview-content {
    border-radius: 2px;
    padding: 220px 56px 56px 56px;
    margin-bottom: 80px;
    min-height: 600px;
    position: relative;
}

.writing .preview-content .mdl-card__title{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 200px;
}
.writing .mdl-layout__header-row {
    height: 56px;
    padding: 0 16px 0 0px;
}

.writing .mdl-layout-title {
    padding-left: 20px;
}
.writing .mdl-card {
  width: 512px;
}
.writing .mdl-card__title {
    position: relative;
    color: #fff;
    height: 176px;
    background: url(../assets/img/welcome_card.jpg) center/cover;
}
#frontImg{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>
<template>
    <div @click="hideLogin" class="writing mdl-layout mdl-js-layout mdl-layout--fixed-header
            mdl-layout--fixed-tabs">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <div class="demo-back">
                    <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="'/'" title="go back" role="button">
                        <i class="material-icons" role="presentation">arrow_back</i>
                    </a>
                </div>
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
        <main class="mdl-layout__content">
            <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
                <div class="page-content">
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet"></div>
                        <div class="mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet">
                            <div class="mdl-card__title" :style="{'background-image': 'url('+(post.frontImg == null ? 'dist/welcome_card.jpg' : post.frontImg)+')'}">
                                <h2 class="mdl-card__title-text" >{{post.title=='' ? '文章的封面图' : post.title}}</h2>
                                 <div class="mdl-card__menu">
                                <button id="demo-menu-lower-right"
                                          class="mdl-button mdl-js-button mdl-button--icon">
                                    <i class="material-icons">more_vert</i>
                                  </button>

                                  <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                      for="demo-menu-lower-right">
                                    <li class="mdl-menu__item"><input @change="upImg" type="file" id="frontImg">修改</li>
                                  </ul>
                                  </div>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="text" v-model="post.title">
                                <label class="mdl-textfield__label">Title</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <textarea class="mdl-textfield__input" id="content" v-model="post.content" type="text" rows="15"></textarea>
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
                        <div class="mdl-card__title" :style="{'background-image': 'url('+(post.frontImg == null ? 'dist/welcome_card.jpg' : post.frontImg)+')'}">
                                <h2 class="mdl-card__title-text" >{{post.title=='' ? '文章的封面图' : post.title}}</h2>
                            </div>
                            <!-- <h3>{{post.title}}</h3> --> {{{post.content | marked}}}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
