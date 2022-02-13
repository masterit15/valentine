import $api from '../../http'
export default {
  state: {
    departaments: []
  },
  mutations: {
    set_Departaments(state, departaments){
      state.departaments = departaments
    }
  },
  actions: {
    async getDepartament({commit}){
      const res = await $api.get('departament')
      commit('set_Departaments', res.data.departaments)
    }
  },
  getters: {
    departaments:  state=> state.departaments
  }
}