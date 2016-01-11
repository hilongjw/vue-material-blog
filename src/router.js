module.exports = function(router){
	router.map({
		'/': {
			name:'home',
            component: function (resolve) {
			  require(['./components/index.vue'], resolve)
			}
        },
        '/write': {
        	name:'write',
            component: function (resolve) {
			  require(['./components/write.vue'], resolve)
			}
        },
        '/edit/:id': {
        	name:'edit',
            component: function (resolve) {
			  require(['./components/write.vue'], resolve)
			}
        },
        '/test': {
        	name:'write',
            component: function (resolve) {
			  require(['./components/await.vue'], resolve)
			}
        },
        'entry/:id':{
        	name:'entry',
        	component: function (resolve) {
			  require(['./components/entry.vue'], resolve)
			}
        }
    })

    router.redirect({
      // 重定向任意未匹配路径到 /
      '*': '/'
    })
	
}