import {
  requerstMenus,
  requestLoginAction,
  requestUserInfo
} from '@/network/request/login/login'
import router from '@/router'
import { pccatch } from '@/utils/catch'
import { routerMenu } from '@/utils/routerMenu'
import type { Module } from 'vuex'
import type { rootState } from '../type'
import type { loginState } from './type'
const loginModule: Module<loginState, rootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, payload: any) {
      // state.userInfo = payload
      state.token = payload
      pccatch.setCatch('token', payload)
    },
    changeUserInfo(state, payload: any) {
      state.userInfo = { ...payload }
    },
    changeUserMenu(state, payload: any) {
      state.userMenus = payload
    }
  },
  // getters: {},
  actions: {
    async actionAccountLogin({ commit }, payload: any) {
      if (payload.name && payload.password) {
        const resuleData = await requestLoginAction(payload)
        // 保存token
        console.log(resuleData)

        const { id, token } = resuleData.data
        commit('changeToken', token)

        // console.log(resuleData)
        // 保存 用户信息
        const userInfo = await requestUserInfo(id)

        const userInfoData = userInfo.data
        pccatch.setCatch('userInfo', userInfoData)
        commit('changeUserInfo', userInfoData)

        //获取用户菜单
        // console.log(userInfo)

        const roleId = userInfoData.role.id
        console.log(userInfo)

        const userMenus = await requerstMenus(roleId)
        console.log(userMenus)

        const MenusData = userMenus.data

        routerMenu(MenusData, router)

        pccatch.setCatch('userMenus', MenusData)

        commit('changeUserMenu', MenusData)

        router.push('/main')
      }
    },
    actionAccountCacth({ commit }) {
      const token = pccatch.getCatch('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = pccatch.getCatch('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = pccatch.getCatch('userMenus')
      if (userMenus) {
        commit('changeUserMenu', userMenus)
        routerMenu(userMenus, router)
      }
    }
  }
}

export default loginModule
