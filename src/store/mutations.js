import { SHOWLOGIN ,HIDELOGIN,SHOWSIGN ,HIDESIGN,SHOWMODAL,HIDEMODAL,LOGINING,LOGOUTING,SHOWLOADING,HIDELOADING} from './mutation-types'

export default {
 
  [SHOWLOGIN] (state) {
    state.login.show = true
  },
  [HIDELOGIN] (state) {
    state.login.show = false
  },
  [SHOWSIGN] (state) {
    state.sign.show = true
  },
  [HIDESIGN] (state) {
    state.sign.show = false
  },
  [SHOWMODAL] (state,title,text) {
    state.modal.show = true
    state.modal.title = title
    state.modal.text = text
  },
  [HIDEMODAL] (state) {
    state.modal.show = false
    state.modal.title = ''
    state.modal.text = ''
  },
  [LOGINING] (state,user){
    state.logined.value = true
    state.logined.user = user
  },
  [LOGOUTING] (state){
    state.logined.value = false
    state.logined.user = null
  },
  [SHOWLOADING] (state){
    state.loading = true
  },
  [HIDELOADING] (state){
    state.loading = false
  }
}
