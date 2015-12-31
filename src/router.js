module.exports = function(router){
	router.map({
		'*':{
			component: require('./components/index.vue')
		},
		'/': {
            component: require('./components/index.vue')
        },
        'entry/:id':{
        	component: function (resolve) {
			  require(['./components/entry.vue'], resolve)
			}
        }
    })
	
}