import { INCREMENT, DECREMENT } from './mutation-types'

export default {
  [INCREMENT] (state) {
    state.learn++
  },
  [DECREMENT] (state) {
    state.learn--
  }
}
