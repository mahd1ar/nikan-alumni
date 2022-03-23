import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { timeout } from '~/data/utils'




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
    type: 'success' | 'error' | 'about' | 'info'
    id: number
}

export const state = () => ({
    notification: [] as StateNotification[],
})

enum Mutations {
    push = "PUSH"
}

export type RootState = ReturnType<typeof state>


export const getters: GetterTree<RootState, RootState> = {
    notifications: state => state.notification,
}

export const mutations: MutationTree<RootState> = {

    CLEAR: (state, id: number) => {

        const item = state.notification.find(i => i.id === id)

        if (item) {
            const index = state.notification.indexOf(item)
            state.notification.splice(index, index + 1)
        }
    },

    [Mutations.push]: (state, option: StateNotification) => {
        state.notification.push(option)
    }
}

export const actions: ActionTree<RootState, RootState> = {
    clear({ commit }, id: number) {

        commit('CLEAR', id)
    },
    async success({ commit, dispatch }, options: CNotification) {
        const newItem: StateNotification = {
            title: options.title,
            body: options.body || '',
            id: ~~(Math.random() * 1000),
            type: 'success',
            time: options.time || 3000
        }
        commit(Mutations.push, newItem);
        await timeout(newItem.time!);
        dispatch('clear', newItem.id)
    },

    async error({ commit, dispatch }, options: CNotification) {
        const newItem: StateNotification = {
            title: options.title,
            body: options.body || '',
            id: ~~(Math.random() * 1000),
            type: 'error',
            time: options.time || 3000
        }
        commit(Mutations.push, newItem);
        await timeout(newItem.time!);
        dispatch('clear', newItem.id)
    },

    async info({ commit, dispatch }, options: CNotification) {
        const newItem: StateNotification = {
            title: options.title,
            body: options.body || '',
            id: ~~(Math.random() * 1000),
            type: 'info',
            time: options.time || 3000
        }
        commit(Mutations.push, newItem);
        await timeout(newItem.time!);
        dispatch('clear', newItem.id)
    }
}
