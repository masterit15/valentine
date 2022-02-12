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
    async auth({commit}, {name, password, departamentId}){
      const res = await $api.post('/user', {name, password, departamentId})
      console.log(res);
      // commit('set_User', res)
    }
  },
  getters: {

  }
}