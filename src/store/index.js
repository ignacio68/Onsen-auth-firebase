import Vue from 'vue'
import Vuex from 'vuex'

import navigator from './modules/navigator'
import user from './modules/user'
import shared from './modules/shared'
import social from './modules/social'
import profile from './modules/profile'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    navigator,
    user,
    shared,
    social,
    profile
  }
})
