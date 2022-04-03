import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { User } from './authentication'
import {
  CookieUser,
  LocalStoreAuthentication as Authentication,
} from '~/data/utils/enums'

export const state = () => ({
  documentLoaded: false,
  isLoading: 0,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  documentLoaded: (state) => state.documentLoaded,
  loading: (state) => state.isLoading,
}

export const mutations: MutationTree<RootState> = {
  LOADING(state, v: number) {
    state.isLoading = v
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ dispatch }, { app }) {
    const exp = app.$cookies.get(Authentication.expiration)

    if (exp && parseInt(exp) - Date.now() > 0) {
      console.log(exp)
      dispatch('authentication/login')
      try {
        const user = {} as User
        user.id = app.$cookies.get(CookieUser.id)
        user.avatar = app.$cookies.get(CookieUser.avatar)
        user.firstName = app.$cookies.get(CookieUser.firstName)
        user.lastName = app.$cookies.get(CookieUser.lastName)
        user.email = app.$cookies.get(CookieUser.email)
        dispatch('authentication/setUser', user)
      } catch (error) {
        console.error('there is no cookie ', error)
        dispatch('authentication/clearUser')
      }
    }
  },
  loadingStart({ commit }) {
    commit('LOADING', true)
  },
  loadingEnded({ commit }) {
    commit('LOADING', true)
  }
}
