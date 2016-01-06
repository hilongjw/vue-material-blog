#### Cov Blog?

一个由vue.js, material design lite, marked.js, leancloud构建的博客应用
preview -> [http://hilongjw.github.io/vue-material-blog/](http://hilongjw.github.io/vue-material-blog/)


## CovBlog想做什么？

* 一个简洁而优美的博客
* markdown格式书写
* 不依赖传统后端，在gh-pages也能部署和使用

## 有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(hilongjw#gmail.com, 把#换成@)
* QQ: 1025503881
* weibo: [@A2wesome](http://weibo.com/hilongjw)

![preview4](https://github.com/hilongjw/vue-material-blog/blob/master/preview4.png) 
![preview3](https://github.com/hilongjw/vue-material-blog/blob/master/preview3.png)

## 安装

```bash
git clone https://github.com/hilongjw/vue-material-blog.git
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```

启动服务(http://localhost:8080)
``` bash
npm run dev
```

发布代码
``` bash
npm run build
```

## 目录结构
<pre>
│  .gitignore          # 忽略无需git控制的文件  比如 node_modules
│  package.json        # 项目配置
│  readme.md           # 项目说明
│  index.html          # 首页
│
├─node_modules
│
├─build
│     │  webpack.base.config.js         # webpack 基础配置
│     │  webpack.dev.config.js          # webpack 开发配置
│     └─ webpack.prod.config.js         # webpack 生产配置
│
└─src
    │  app.vue         # 主vue
    │  main.js         # 启动配置
    │  router.js       # 路由
    │  filter.js       # 过滤器
    │  directive.js    # 指令
    │
    ├─components       # 组件
    │      index.vue
    │
    └─assets             
          │            
          │
          ├─ css        # 公用css
          │
          │
          ├─ font       # 字体
          │
          │
          └─ img        # 图片资源
</pre>

## 感谢

vue.js, vue-tap, material design lite, marked.js, leancloud 

向以上项目作者致敬