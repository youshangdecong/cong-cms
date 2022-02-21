import {
  getUserList,
  newUser,
  editUser,
  deleteUser
} from '@/network/request/user/user'
import type { Module } from 'vuex'
import type { rootState } from '../../type'
import type { systemState } from './type'

const userModule: Module<systemState, rootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userListTotalCount: 0,
      department: [],
      departmentTotalCount: 0,
      roleList: [],
      roleListTotalCount: 0,
      menuList: [],
      menuListTotalCount: 0,
      categoryList: [],
      categoryListTotalCount: 0,
      goodsList: [],
      goodsListTotalCount: 0
    }
  },
  mutations: {
    changeUserList(state, payload: any) {
      state.userList = payload.list
      state.userListTotalCount = payload.totalCount
    },
    changeDepartmentList(state, payload: any) {
      state.department = payload.list
      state.departmentTotalCount = payload.totalCount
    },
    changeRoleList(state, payload: any) {
      state.roleList = payload.list
      state.roleListTotalCount = payload.totalCount
    },
    changeMenuList(state, payload: any) {
      state.menuList = payload.list
      state.menuListTotalCount = payload.totalCount
    },
    changeCategoryList(state, payload: any) {
      state.categoryList = payload.list
      state.categoryListTotalCount = payload.totalCount
    },
    changeGoodsList(state, payload: any) {
      state.goodsList = payload.list
      state.goodsListTotalCount = payload.totalCount
    }
  },
  actions: {
    async getListAction({ commit }, payload: any) {
      const { data, name } = payload
      const userList = await getUserList(data, name)
      switch (name) {
        case 'users':
          commit('changeUserList', userList.data)
          break
        case 'department':
          commit('changeDepartmentList', userList.data)
          break
        case 'role':
          commit('changeRoleList', userList.data)
          break
        case 'menu':
          commit('changeMenuList', userList.data)
          break
        case 'category':
          commit('changeCategoryList', userList.data)
          break
        case 'goods':
          commit('changeGoodsList', userList.data)
          break
      }
    },
    async newUserAction({ dispatch }, payload: any) {
      await newUser(payload)
      const { name } = payload
      dispatch('getListAction', {
        data: { offset: 0, size: 10 },
        name
      })
    },
    async editUserAction({ dispatch }, payload: any) {
      await editUser(payload)
      const { name } = payload
      dispatch('getListAction', {
        data: { offset: 0, size: 10 },
        name
      })
    },
    async deleteUserAction({ dispatch }, payload: any) {
      // console.log('123123')

      await deleteUser(payload)
      const { name } = payload
      dispatch('getListAction', {
        data: { offset: 0, size: 10 },
        name
      })
    }
  },
  getters: {},
  modules: {}
}

export default userModule
