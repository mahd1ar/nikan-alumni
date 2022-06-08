import { GetterTree, ActionTree, MutationTree } from 'vuex'

const initialState = {
  isLoading: false,
  lockScreen: false,
  loadingMessage: '',
  pageInTransition: false
}

export type LoadingOptions =
  | {
    lockScreen: boolean | undefined
    message: string | undefined
  }
  | string

export const state = () => ({
  ...initialState,
})

enum Mutations {
  loading = 'LOADING',
  reset = 'RESET',
  transitioning = 'TRANS'
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isLoading: (state) => state.isLoading,
  lockScreen: (state) => state.lockScreen,
  loadingMessage: (state) => state.loadingMessage,
}

export const mutations: MutationTree<RootState> = {
  [Mutations.loading]: (state, option?: LoadingOptions) => {
    state.isLoading = true
    if (typeof option === 'object') {
      state.loadingMessage = option?.message || ''
      state.lockScreen = option?.lockScreen || false
    } else if (option) {
      state.loadingMessage = option
      state.lockScreen = false
    } else {
      state.loadingMessage = 'در حال بارگذاری'
      state.lockScreen = false
    }
  },
  [Mutations.reset]: (state) => {
    Object.assign(state, initialState)
  },
  [Mutations.transitioning]: (state, val: boolean) => {
    state.pageInTransition = val
  },
}

export const actions: ActionTree<RootState, RootState> = {
  loading({ commit: c }, options: LoadingOptions) {
    c(Mutations.loading, options)
  },
  loadingEmpty({ commit: c }) {
    c(Mutations.loading, { message: '' } as LoadingOptions)
  },
  endLoading({ commit: c }) {
    c(Mutations.reset)
  },
  transitioning({ commit }, value: boolean) {
    commit(Mutations.transitioning, value)
  }
}
