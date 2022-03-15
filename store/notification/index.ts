import { GetterTree, ActionTree, MutationTree } from 'vuex'




export type LoadingOptions = {
    lockScreen: boolean | undefined,
    message: string | undefined
} | string

export type CNotification = {
    title: string,
    body?: string,
    time?: number
}

interface StateNotification extends CNotification {
    type: 'success' | 'error' | 'about'
    id: number
}

export const state = () => ({
    notification: [] as StateNotification[],
})

enum Mutations {
    success = "LOADING",
    error = "ERROR",
    about = "ABOUT"
}

export type RootState = ReturnType<typeof state>


export const getters: GetterTree<RootState, RootState> = {
    notifications: state => state.notification,
}

export const mutations: MutationTree<RootState> = {
    [Mutations.success]: (state, option: CNotification) => {
        const x: StateNotification = {
            title: option.title,
            body: option.body || '',
            id: ~~(Math.random() * 1000),
            type: 'success',
            time: option.time || 3000
        }

        state.notification.push(x)

        window.setTimeout(() => {
            const index = state.notification.indexOf(x)
            state.notification.splice(index, index + 1)

        }, x.time)

    }
}

export const actions: ActionTree<RootState, RootState> = {
    success({ commit }, options: CNotification) {
        commit(Mutations.success, options)
    }
}
