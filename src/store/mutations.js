import { INCREMENT, DECREMENT,SHOWLOGIN ,HIDELOGIN} from './mutation-types'

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
  }
}
