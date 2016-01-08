import { INCREMENT, DECREMENT ,SHOWLOGIN ,HIDELOGIN,SHOWSIGN ,HIDESIGN,SHOWMODAL,HIDEMODAL} from './mutation-types'

export default {
  [INCREMENT] (state) {
    state.learn++
  },
  [DECREMENT] (state) {
    state.learn--
  },
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
  }
}
