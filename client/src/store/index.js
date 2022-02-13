import { createStore } from 'vuex'
import departamentModule from './modules/departament.module'
import userModule from './modules/user.module'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    departamentModule
  }
})
