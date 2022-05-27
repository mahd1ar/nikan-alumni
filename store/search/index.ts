import { GetterTree, ActionTree, MutationTree } from 'vuex'



export type LoadingOptions =
    | {
        lockScreen: boolean | undefined
        message: string | undefined
    }
    | string

export const state = () => ({
    show: false
})


export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    showSearchBox: (state) => state.show,

}

export const mutations: MutationTree<RootState> = {

    toggleSearchBox: (state, nval: boolean) => {
        state.show = nval
    },
}

export const actions: ActionTree<RootState, RootState> = {
    toggleSearchBox({ commit, state }, nval?: boolean) {
        if (nval)
            commit("toggleSearchBox", nval)
        else
            commit("toggleSearchBox", !state.show)
    },

}
