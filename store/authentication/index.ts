import { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface User {
  id: string
  firstName: string
  lastName: string
  avatar: string
  email: string
}

export const state = () => ({
  isLoggedIn: false,
  user: {
    id: '',
    firstName: '',
    lastName: '',
    avatar: '',
  } as User,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_LOGIN: (state, newVal: boolean) => (state.isLoggedIn = newVal),

  SET_USER: (state, user: User) => {
    let k: keyof typeof user

    for (k in user) {
      state.user[k] = user[k]
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  login({ commit: c }) {
    console.log('HI there')
    c('CHANGE_LOGIN', true)
  },
  logout({ commit: c }) {
    c('CHANGE_LOGIN', false)
  },
  setUser({ commit: c }, user: User) {
    c('SET_USER', user)
  },
  clearUser({ commit }) {
    const u: User = {
      avatar: '',
      email: '',
      firstName: '',
      id: '',
      lastName: '',
    }
    commit('SET_USER', u)
  },
}
