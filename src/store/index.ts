import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './mian/system'
import analysis from './mian/analysis'
import type { rootState, State } from './type'
const store = createStore<rootState>({
  state() {
    return {
      name: 'cong',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login,
    system,
    analysis
  }
})

export const useStoreFn = () => {
  // const name = pccatch.getCatch('name')
  // const password = pccatch.getCatch('password')
  // console.log(useStore)

  // store.dispatch('login/actionAccountLogin', {
  //   name,
  //   password
  // })

  store.dispatch('login/actionAccountCacth')
}

export function useStore(): Store<State> {
  return useVuexStore()
}

export default store
