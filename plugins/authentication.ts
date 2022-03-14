import { Plugin, Context } from '@nuxt/types'
import LOGIN_MUT from "@/apollo/mutation/login.gql"
import REFRESH_TOKEN_MUT from "@/apollo/mutation/refresh.gql"

import { LoginMutation, LoginMutationVariables, RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables } from '@/types/types'
import { timeout } from '~/data/utils'

type userCreadit = { username: string, password: string }

enum Authentication {
    authToken = 'authentication.authToken',
    refreshToken = 'authentication.refreshToken',
    email = 'authentication.user.email',
    id = 'authentication.user.id'
}

class LoginStrategy {

    private ctx: Context

    readonly refreshTokenInterval = 60 * 5 * 1000; // 5 minut interval

    private _kickoutInterval = 0

    constructor(ctx: Context) {

        this.ctx = ctx;
        this.refreshHandler()

    }

    private loginHandler(response: LoginMutation) {

        localStorage.setItem(Authentication.refreshToken, String(response.login?.refreshToken))
        localStorage.setItem(Authentication.email, String(response.login?.user?.email))
        localStorage.setItem(Authentication.id, String(response.login?.user?.id))
        // if(response.login?.user?.jwtAuthExpiration){


        //     const  timeout = Math.abs( parseInt( response.login.user.jwtAuthExpiration) * 1000 - Date.now() )

        //     this._kickoutInterval = window.setTimeout(() => {
        //             this.logout()
        //     }, timeout);

        // }

        if (response.login?.authToken) {
            this.setToken(response.login.authToken);
            this.ctx.store.dispatch("authentication/login");
            window.setTimeout(() => {
                this.refreshHandler()
            }, this.refreshTokenInterval)
        }
    }

    private async refreshHandler() {
        const refreshToken = localStorage.getItem(Authentication.refreshToken)

        if (refreshToken) {

            try {
                await this.refresh()
                console.log("refresh handler is called")


            } catch (error) {

                this.logout()
            }
            await timeout(this.refreshTokenInterval)
            this.refreshHandler()
        }
    }

    public async login(data: userCreadit) {
        this.logout()

        try {

            const { data: response } = await this.ctx.app.apolloProvider.defaultClient.mutate<LoginMutation, LoginMutationVariables>({ mutation: LOGIN_MUT, variables: { ...data, clientMutationId: String(~~(Math.random() * 100000)) } })

            if (!response) {

                throw new Error("empty response")
            }

            this.loginHandler(response)



            return response


        } catch (error) {
            console.error("login failed", error)
            this.logout()
        }
    }

    public async refresh() {

        const { defaultClient: apollo } = this.ctx.app.apolloProvider

        const variables: RefreshAuthTokenMutationVariables = {
            clientMutationId: String(~~(Math.random() * 10000)),
            jwtRefreshToken: localStorage.getItem(Authentication.refreshToken)
        }

        const { data } = await apollo.mutate<RefreshAuthTokenMutation, RefreshAuthTokenMutationVariables>({ mutation: REFRESH_TOKEN_MUT, variables })

        if (data?.refreshJwtAuthToken?.authToken) {

            this.setToken(data?.refreshJwtAuthToken?.authToken)
            this.ctx.store.dispatch("authentication/login")
            return data

        }
        else
            throw new Error("empty token")

    }

    logout() {
        this.ctx.store.dispatch("authentication/logout")
        this.ctx.$apolloHelpers.onLogout()
        this.clearStorage()
    }

    private setToken(token: string) {
        localStorage.setItem(Authentication.authToken, String(token))
        this.ctx.$apolloHelpers.onLogin(token)
    }

    private clearStorage() {

        localStorage.removeItem(Authentication.authToken)
        localStorage.removeItem(Authentication.refreshToken)
        localStorage.removeItem(Authentication.id)
        localStorage.removeItem(Authentication.email)

    }

}

declare module 'vue/types/vue' {
    // this.$myInjectedFunction inside Vue components
    interface Vue {
        $authentication(): LoginStrategy
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$authentication inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $authentication(): LoginStrategy
    }
    // nuxtContext.$authentication
    interface Context {
        $authentication(): LoginStrategy
    }
}

// declare module 'vuex/types/index' {
//   // this.$authentication inside Vuex stores
//   interface Store<S> {
//     $authentication(creadit : userCreadit): void
//   }
// }

const authentication: Plugin = (context, inject) => {
    console.log("authentication is initialized")


    const loginStrategy = new LoginStrategy(context);

    inject('authentication', () => {
        return loginStrategy
    })
}

export default authentication

