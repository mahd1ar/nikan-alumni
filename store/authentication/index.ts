import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    isLoggedIn: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    isLoggedIn: state => state.isLoggedIn,
}

export const mutations: MutationTree<RootState> = {
    CHANGE_LOGIN: (state, newVal: boolean) => (state.isLoggedIn = newVal),
}

export const actions: ActionTree<RootState, RootState> = {
    login({ commit: c }) {
        c("CHANGE_LOGIN", true)
    },
    logout({ commit: c }) {
        c("CHANGE_LOGIN", false)
    },
}
