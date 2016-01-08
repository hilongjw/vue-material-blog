import {INCREMENT, DECREMENT ,SHOWLOGIN ,HIDELOGIN,SHOWSIGN ,HIDESIGN,SHOWMODAL,HIDEMODAL} from './mutation-types'

export default {

  add: INCREMENT,
  cut: DECREMENT,
  showLogin: SHOWLOGIN,
  hideLogin:HIDELOGIN,
  showSign: SHOWSIGN,
  hideSign:HIDESIGN,
  showModal: SHOWMODAL,
  hideModal:HIDEMODAL,

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
