import Vue from 'vue'
import Vuex from 'vuex'
import user from './user-module'
import message from './message-module'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      user,
      message
    },
    plugins: [createPersistedState()]
  })

  return Store
}
