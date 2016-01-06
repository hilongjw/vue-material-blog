module.exports = function(router){
	router.map({
		'*':{
			component: function (resolve) {
			  require(['./components/index.vue'], resolve)
			}
		},
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
        'entry/:id':{
        	name:'entry',
        	component: function (resolve) {
			  require(['./components/entry.vue'], resolve)
			}
        }
    })
	
}