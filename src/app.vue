<script>
import loading from './components/loading.vue'

export default {
  components: {
    'login': function(resolve) {
      require(['./components/login.vue'], resolve)
    },
    'modal': function(resolve) {
      require(['./components/modal.vue'], resolve)
    },
    'loading': loading
  }
}
</script>
<template>
  <loading></loading>
  <router-view></router-view>
  <login></login>
  <modal></modal>
</template>
<style src="material-design-lite/material.css"></style>
<style>
.app-loading {
  display: none;
}

::-webkit-scrollbar {
  width: 0;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: local('Material Icons'), local('MaterialIcons-Regular'), url(assets/fonts/material.woff2) format('woff2');
}

.mdl-layout__header {
  position: fixed;
}

.demo-layout-transparent .mdl-layout__header,
.demo-layout-transparent .mdl-layout__drawer-button {
  color: white;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

body::before {
  background-size: cover;
  background-attachment: fixed;
  content: '';
  will-change: transform;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
}

@media (max-width: 512px) and (-webkit-min-device-pixel-ratio: 1.5),
(max-width: 512px) and (min-resolution: 1.5dppx),
(max-width: 1024px) and (-webkit-max-device-pixel-ratio: 1.5),
(max-width: 1024px) and (max-resolution: 1.5dppx) {
  body::before {
    background-image: url('assets/img/bg_1024.jpg');
  }
}

@media (min-width: 513px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1.5),
(min-width: 513px) and (max-width: 1024px) and (min-resolution: 1.5dppx),
(min-width: 1025px) and (max-width: 2048px) and (-webkit-max-device-pixel-ratio: 1.5),
(min-width: 1025px) and (max-width: 2048px) and (max-resolution: 1.5dppx) {
  body::before {
    background-image: url('assets/img/bg_2048.jpg');
  }
}

@media (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 1.5),
(min-width: 1025px) and (min-resolution: 1.5dppx),
(min-width: 2049px) and (-webkit-max-device-pixel-ratio: 1.5),
(min-width: 2049px) and (max-resolution: 1.5dppx) {
  body::before {
    background-image: url('assets/img/bg_2880.jpg');
  }
}

body .cov-blog {
  font-family: 'Roboto', 'Helvetica', sans-serif;
}

.cov-blog .cov-blog__posts {
  max-width: 900px;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin: 0 auto;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.cov-blog.mdl-layout .mdl-layout__content {
  padding-top: 230px;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.cov-blog .mdl-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  min-height: 360px;
}

.cov-blog .mdl-card__title {
  padding: 16px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.cov-blog .mdl-card__media {
  box-sizing: border-box;
  background-size: cover;
  padding: 24px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  cursor: pointer;
}

.cov-blog .mdl-card__media a,
.cov-blog .mdl-card__title a {
  color: inherit;
}

.cov-blog .mdl-card__supporting-text {
  width: 100%;
  padding: 16px;
  min-height: 64px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.cov-blog .mdl-card__supporting-text strong {
  font-weight: 400;
}

.cov-blog .mdl-card__media ~ .mdl-card__supporting-text {
  min-height: 64px;
}

.cov-blog .mdl-card__supporting-text:not(:last-child) {
  box-sizing: border-box;
  min-height: 76px;
}

.cov-blog:not(.cov-blog--blogpost) .mdl-card__supporting-text ~ .mdl-card__supporting-text {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.cov-blog .mdl-card__actions:first-child {
  margin-left: 0;
}

.cov-blog .meta {
  box-sizing: border-box;
  padding: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: auto;
}

.cov-blog .meta > .meta__favorites {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 0 8px;
  font-size: 13px;
  font-weight: 500;
}

.cov-blog .meta > .meta__favorites .material-icons {
  font-size: 2em;
  cursor: pointer;
  margin-left: 12px;
}

.cov-blog .mdl-card .meta.meta--fill {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.cov-blog .meta > *:first-child {
  margin-right: 16px;
}

.cov-blog .meta > * {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.cov-blog.is-small-screen .cov-blog__posts > .mdl-card.coffee-pic {
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
}

.cov-blog.is-small-screen .cov-blog__posts > .mdl-card.something-else {
  -webkit-box-ordinal-group: 0;
  -webkit-order: -1;
  -ms-flex-order: -1;
  order: -1;
}

.cov-blog .coffee-pic .mdl-card__media {
  background-image: url('assets/img/coffee.jpg');
}

.cov-blog .something-else .mdl-card__media {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.cov-blog .something-else > button {
  position: absolute;
  top: 0;
  right: 28px;
  -webkit-transform: translate(0px, -28px);
  -ms-transform: translate(0px, -28px);
  transform: translate(0px, -28px);
}

.cov-blog .something-else .mdl-card__media {
  font-size: 13px;
  font-weight: 500;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.cov-blog .something-else .mdl-card__media img {
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
}

.cov-blog .something-else .mdl-card__supporting-text {
  background-color: #F5F5F5;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.cov-blog .on-the-road-again .mdl-card__media {
  background-image: url('assets/img/road.jpg');
}

.cov-blog .shopping .mdl-card__media {
  background-image: url('assets/img/shopping.jpg');
}

.cov-blog .cov-blog__posts > .demo-nav {
  margin: 12px 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;
  font-weight: 500;
}

.cov-blog .cov-blog__posts > .demo-nav > .demo-nav__button {
  color: white;
  text-decoration: none;
}

.cov-blog .cov-blog__posts > .demo-nav .mdl-button {
  color: rgba(0, 0, 0, 0.54);
  background-color: white;
}

.cov-blog .cov-blog__posts > .demo-nav > .demo-nav__button:first-child .mdl-button {
  margin-right: 16px;
}

.cov-blog .cov-blog__posts > .demo-nav > .demo-nav__button:last-child .mdl-button {
  margin-left: 16px;
}

.cov-blog .mdl-card > a {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
}

.cov-blog .mdl-card h3 {
  margin: 0;
}

.cov-blog .mdl-card h3 a {
  text-decoration: none;
}

.cov-blog .mdl-card h3.quote:before,
.cov-blog .mdl-card h3.quote:after {
  display: block;
  font-size: 3em;
  margin-top: 0.5em;
}

.cov-blog .mdl-card h3.quote:before {
  content: '“';
}

.cov-blog .mdl-card h3.quote:after {
  content: '”';
}

.cov-blog--blogpost .custom-header {
  background-color: transparent;
}

.cov-blog--blogpost .cov-blog__posts > .mdl-card .mdl-card__media {
  background-image: url('assets/img/road_big.jpg');
  height: 280px;
}

.cov-blog--blogpost .comments {
  background-color: #EEE;
}

.cov-blog--blogpost .meta > * {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.cov-blog--blogpost .meta + .mdl-card__supporting-text {
  border: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.cov-blog--blogpost .meta + .mdl-card__supporting-text p {
  max-width: 512px;
  margin: 16px auto;
  font-size: 16px;
  line-height: 28px;
}

.cov-blog--blogpost .comments {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 32px;
  box-sizing: border-box;
}

.cov-blog--blogpost .comments > div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-diretion: row;
  margin-bottom: 16px;
}

.cov-blog--blogpost .comments > div .mdl-textfield {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-right: 16px;
  color: rgb(97, 97, 97);
}


/* Workaround for Firefox.
 * User agent stylesheet kept overwriting the font in FF only.
 */

.cov-blog--blogpost .comments > div .mdl-textfield .mdl-textfield__input {
  font-family: 'Roboto', 'Helvetica', sans-serif;
}

.cov-blog--blogpost .comments > div .mdl-textfield input,
.cov-blog--blogpost .comments > div .mdl-textfield textarea {
  resize: none;
}

.cov-blog--blogpost .comments > div button {
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.24);
  color: white;
}

.cov-blog--blogpost .comments .comment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.cov-blog--blogpost .comments .comment > .comment__header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 16px;
}

.cov-blog--blogpost .comments .comment > .comment__header > .comment__avatar {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 16px;
}

.cov-blog--blogpost .comments .comment > .comment__header > .comment__author {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.cov-blog--blogpost .comments .comment > .comment__text {
  line-height: 1.5em;
}

.cov-blog--blogpost .comments .comment > .comment__actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.8em;
  margin-top: 16px;
}

.cov-blog--blogpost .comments .comment > .comment__actions button {
  margin-right: 16px;
  color: rgba(0, 0, 0, 0.24);
}

.cov-blog--blogpost .comments .comment > .comment__answers {
  padding-top: 32px;
  padding-left: 48px;
}

.cov-blog--blogpost .demo-back {
  position: absolute;
  top: 16px;
  left: 16px;
  color: white;
  z-index: 9999;
}

.cov-blog .section-spacer {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.cov-blog .something-else {
  overflow: visible;
  z-index: 10;
}

.cov-blog .amazing .mdl-card__title {
  background-color: #263238;
}

.cov-blog .minilogo {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  overflow: hidden;
}

.cov-blog .minilogo img {
  width: 100%;
  height: 100%;
}


/* Fixes for IE 10 */

.mdl-grid {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.cov-blog .mdl-mini-footer {
  margin-top: 80px;
  height: 120px;
  padding: 40px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
}

@media all and (max-width: 768px) {
  .cov-blog.mdl-layout .mdl-layout__content {
    padding-top: 0!important;
  }
  .mdl-layout__drawer-button {
    margin: 4px;
    color: rgb(255, 255, 255);
  }
  .login-card-wide.mdl-card {
    width: 90%!important;
    margin: auto;
  }
}
</style>
<style src="./assets/css/normalize.css"></style>
