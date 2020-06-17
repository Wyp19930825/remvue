import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameList: [],
    gameList1: []
  },
  mutations: {
    listgame(state, [games]) {
      state.gameslist = games
    },
    listgame1(state, [games1]) {
      state.gameslist1 = games1
    }
  },
  actions: {},
  modules: {}
})
