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
    async auth({commit}, {username, departamentId, avatar}){
      const res = await $api.post('/user', {username, departamentId, avatar})
      commit('set_User', res.data.user)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      return res.data.success
    }
  },
  getters: {

  }
}