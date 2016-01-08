import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import AV from 'avoscloud-sdk';
AV.initialize('2037J60rIoY1FFLAWHPTLY9M-gzGzoHsz', 'D0ShkNgI2SSL6WheRA8nK6pE');

Vue.use(Vuex)

const state = {
  learn:0,
  Cloud:AV,
  login:{
    show:false
  },
  sign:{
    show:false
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept(['./actions', './mutations'], () => {
    const newActions = require('./actions').default
    const newMutations = require('./mutations').default
    store.hotUpdate({
      actions: newActions,
      mutations: newMutations
    })
  })
}

export default store
