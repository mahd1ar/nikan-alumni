import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { User } from './authentication'
import {
  CookieUser,
  LocalStoreAuthentication as Authentication,
} from '~/data/utils/enums'
import { WPapi } from '~/data/GlobslTypes'

export const state = () => ({
  documentLoaded: false,
  isLoading: 0,
})

export type RootState = ReturnType<typeof state>
export type GlobalState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  documentLoaded: (state) => state.documentLoaded,
  loading: (state) => state.isLoading,
}

export const mutations: MutationTree<RootState> = {
  LOADING(state, v: number) {
    state.isLoading = v
  },
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ dispatch, rootState }, { app, route }) {
    const exp = app.$cookies.get(Authentication.expiration)

    if (exp && parseInt(exp) - Date.now() > 0) {
      console.log(exp)
      dispatch('authentication/login')
      try {
        const user = {} as User
        user.id = app.$cookies.get(CookieUser.id)
        user.avatar = decodeURIComponent(app.$cookies.get(CookieUser.avatar))
        user.firstName = app.$cookies.get(CookieUser.firstName)
        user.lastName = app.$cookies.get(CookieUser.lastName)
        user.email = app.$cookies.get(CookieUser.email)
        dispatch('authentication/setUser', user)
      } catch (error) {
        console.error('there is no cookie ', error)
        dispatch('authentication/clearUser')
      }
    }

    if (route.path === '/v3' || route.path === '/') {
      console.log(route.path)
      dispatch('navigation/toggleDarkMenu', false)
    } else
      dispatch('navigation/toggleDarkMenu', true)
    // @ts-ignore
    if (rootState.navigation.menu.find(i => i.href === '/video').submenu.length === 0) {

      this.$axios.get<WPapi.categories.RootObject[]>('wp-json/wp/v2/categories?per_page=100').then(res => {

        dispatch('navigation/makeVideoSubmenu',
          (res.data.filter(i => i.parent === 5))
        )
      })
    }
  },
  loadingStart({ commit }) {
    commit('LOADING', true)
  },
  loadingEnded({ commit }) {
    commit('LOADING', true)
  },
}
