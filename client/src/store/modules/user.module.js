import $api from '../../http'
export default {
  state: {
    user: null
  },
  mutations: {
    set_User(state, user){
      state.user = user
    }
  },
  actions: {
    async auth({commit}, {name, departamentId}){
      const res = await $api.post('/user', {name, departamentId})
      commit('set_User', res.data.user)
    }
  },
  getters: {

  }
}