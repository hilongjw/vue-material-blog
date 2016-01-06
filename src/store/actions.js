import { INCREMENT, DECREMENT ,SHOWLOGIN ,HIDELOGIN} from './mutation-types'

export default {

  add: INCREMENT,
  cut: DECREMENT,
  showLogin: SHOWLOGIN,
  hideLogin:HIDELOGIN,

  incrementIfOdd: ({ dispatch, state }) => {
    if ((state.count + 1) % 2 === 0) {
      dispatch(INCREMENT)
    }
  },

  incrementAsync: ({ dispatch }) => {
    setTimeout(() => {
      dispatch(INCREMENT)
    }, 1000)
  }
}
