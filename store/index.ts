import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { User } from './authentication'
import { CookieUser, LocalStoreAuthentication as Authentication } from '~/data/utils/enums'



export const state = () => ({
    documentLoaded: false,
})


export type RootState = ReturnType<typeof state>


export const getters: GetterTree<RootState, RootState> = {
    documentLoaded: state => state.documentLoaded,
}

export const mutations: MutationTree<RootState> = {

}

export const actions: ActionTree<RootState, RootState> = {
    nuxtServerInit({ dispatch }, { app }) {

        const exp = app.$cookies.get(Authentication.expiration)

        if (exp && parseInt(exp) - Date.now() > 0) {
            console.log(exp)
            dispatch("authentication/login")

            const user = {} as User
            user.id = app.$cookies.get(CookieUser.id)
            user.avatar = app.$cookies.get(CookieUser.avatar)
            user.firstName = app.$cookies.get(CookieUser.firstName)
            user.lastName = app.$cookies.get(CookieUser.lastName)
            user.email = app.$cookies.get(CookieUser.email)
            dispatch("authentication/setUser", user)
        }

    }
}
