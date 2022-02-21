import type { Module } from 'vuex'
import type { rootState } from '../../type'
import type { IanalysisState } from './type'
import { getAmountList } from '@/network/request/main/analysis/analysis'
import {
  getCategoryInfo,
  getAddressList
} from '@/network/request/main/analysis/analysis'

const analysis: Module<IanalysisState, rootState> = {
  namespaced: true,
  state() {
    return {
      amountList: [],
      goodsCountList: [],
      goodsAdressList: [],
      goodsSalesList: [],
      goodsCollectionList: []
    }
  },
  mutations: {
    changeAmountlist(state, payload: any) {
      state.amountList = payload
    },
    changeCountList(state, payload: any) {
      state.goodsCountList = payload
    },
    changeAdressList(state, payload: any) {
      state.goodsAdressList = payload
    },
    changeSalesList(state, payload: any) {
      state.goodsSalesList = payload
    },
    changeCollectionLis(state, payload: any) {
      state.goodsCollectionList = payload
    }
  },
  getters: {},
  actions: {
    async actionAmountList({ commit }) {
      const result = await getAmountList()
      commit('changeAmountlist', (result as any).data)
    },
    // 这里多个请求不建议用 async awit
    actionGetGoodsInfo({ commit }) {
      function _handle(params: string, mutationName: string) {
        getCategoryInfo(params).then((res) => {
          commit(mutationName, (res as any).data)
        })
      }
      _handle('count', 'changeCountList')
      _handle('sale', 'changeSalesList')
      _handle('favor', 'changeCollectionLis')
      getAddressList().then((res) => {
        commit('changeAdressList', (res as any).data)
      })
    }
  },
  modules: {}
}

export default analysis
