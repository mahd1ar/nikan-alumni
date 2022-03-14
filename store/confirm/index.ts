import { GetterTree, ActionTree, MutationTree } from 'vuex'

// enum DialogMUT {
//     ask = "ASK",
// }
const initialState = {

    isOpen: false,
    message: "",
    options: [
        {
            ok: true,
            text: 'ok'
        },
        {
            ok: false,
            text: 'cancel'
        }
    ]
}



export const state = () => ({
    ...initialState
})

export type RootState = ReturnType<typeof state>

// export const getters: GetterTree<RootState, RootState> = {
//     isLoggedIn: state => state.isLoggedIn,
// }

export const mutations: MutationTree<RootState> = {
    ASK: (state, options: RootState["options"]) => {
        state.options.splice(0, state.options.length - 1)
        options.forEach(i => {
            state.options.push(i)
        })
    },
    RESET: (state) => {
        Object.assign(state, initialState)
    }
}

export const actions: ActionTree<RootState, RootState> = {
    ask({ commit: c }, options: RootState["options"]) {
        c("ASK", options)
    },
    answer({ commit: c }, optionNumber: number) {
        // reset
    },
    logout({ commit: c }) {
        c("CHANGE_LOGIN", false)
    },
}
