module.exports = function(router){
	router.map({
		'*':{
			component: require('./components/index.vue')
		},
		'/': {
            component: require('./components/index.vue')
        },
        '/write': {
            component: function (resolve) {
			  require(['./components/write.vue'], resolve)
			}
        },
        'entry/:id':{
        	component: function (resolve) {
			  require(['./components/entry.vue'], resolve)
			}
        }
    })
	
}