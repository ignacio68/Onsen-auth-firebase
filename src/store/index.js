import Vue from 'vue'
import Vuex from 'vuex'

import navigator from './modules/navigator'
import user from './modules/user'
import shared from './modules/shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    navigator,
    user,
    shared
  }
})
