import { Plugin, Context } from '@nuxt/types'
import LOGIN_MUT from '@/apollo/mutation/login.gql'
import REFRESH_TOKEN_MUT from '@/apollo/mutation/refresh.gql'
import FETCHME from '@/apollo/queries/fetch-me.gql'
import {
  FetchMeQuery,
  LoginMutation,
  LoginMutationVariables,
  RefreshAuthTokenMutation,
  RefreshAuthTokenMutationVariables,
} from '@/types/types'
import { timeout } from '~/data/utils'
import {
  CookieUser,
  LocalStoreAuthentication as Authentication,
} from '~/data/utils/enums'
import { User } from '~/store/authentication'
import { Dict } from '~/data/utils/dictionary'

type userCreadit = { username: string; password: string }

class LoginStrategy {
  // private boxLoading: BoxLoading
  private ctx: Context

  readonly refreshTokenInterval = 4.98 * 60 * 1000 // 5 minut interval
  readonly loginExpriationThreshold = 4.98 * 60 * 1000
  readonly attemptToRefreshTheTokenThreshold = 3

  private _isLoggingIn = false

  private _attemptToRefreshTheToken = 0

  constructor(ctx: Context) {
    // this._attemptToRefreshTheToken = this.attemptToRefreshTheTokenThreshold
    this.ctx = ctx
    this.refreshHandler()
  }

  public async fetchMe() {
    console.log("fetch me")

    await this.ctx.app.apolloProvider.defaultClient.resetStore()
    const { data } = await this.ctx.app.apolloProvider.defaultClient.query<FetchMeQuery>({ query: FETCHME })

    if (data.viewer) {

      const user: User = {
        avatar: data.viewer.avatar?.url || "",
        email: data.viewer.email || "",
        firstName: data.viewer.firstName || "",
        lastName: data.viewer.lastName || "",
        id: data.viewer.id
      }
      this.setUser(user)
    } else console.error("[!!] no data.viewer")
  }

  private loginHandler(response: LoginMutation) {
    localStorage.setItem(
      Authentication.refreshToken,
      String(response.login?.refreshToken)
    )

    this.setCookie('trt', String(response.login?.refreshToken), 9999)

    console.log(
      'refreshtokenis',
      localStorage.getItem(Authentication.refreshToken)
    )

    this._attemptToRefreshTheToken = this.attemptToRefreshTheTokenThreshold

    if (response.login?.authToken) {
      this.setToken(response.login.authToken)

      if (response.login.user) {

        const user: User = {
          avatar: response.login.user.avatar?.url || "",
          email: response.login.user.email || "",
          firstName: response.login.user.firstName || "",
          lastName: response.login.user.lastName || "",
          id: response.login.user.id
        }
        this.setUser(user)
      } else console.error("[!!]there is no user prop in authToken")

      this.ctx.store.dispatch('authentication/login')
      window.setTimeout(() => {
        this.refreshHandler()
      }, this.refreshTokenInterval)
    }
    this.ctx.$boxLoading.endLoading()
  }

  private async refreshHandler() {
    const refreshToken = localStorage.getItem(Authentication.refreshToken)
    let flag = false
    if (refreshToken) {
      try {
        await this.refresh()

        this._attemptToRefreshTheToken = this.attemptToRefreshTheTokenThreshold
        this.ctx.$boxLoading.endLoading()
      } catch (error) {
        if (this._attemptToRefreshTheToken > 0) {
          this._attemptToRefreshTheToken--
          this.ctx.$boxLoading.startLoadingEmpty()
          // delete me later
          this.ctx.$boxLoading.startLoading(
            'attempt to login ' + this._attemptToRefreshTheToken
          )
          await timeout(4000)
          this.refreshHandler()
        } else {
          console.log('wath the fuck is happening')
          this.logout()
          flag = true
        }
      }

      if (flag === false) {
        await timeout(this.refreshTokenInterval)
        this.refreshHandler()
      }
    }
  }

  public async login(
    data: userCreadit
  ): Promise<[Error | null, LoginMutation | null]> {
    if (this._isLoggingIn) {
      console.info('LOGGING IN PLEASE WA')
      return [Error('busy at the moment'), null]
    }

    this._isLoggingIn = true

    await this.logout()

    try {
      this.ctx.$boxLoading.startLoading('لطفا شکیبا باشید ')

      const { data: response } =
        await this.ctx.app.apolloProvider.defaultClient.mutate<
          LoginMutation,
          LoginMutationVariables
        >({
          mutation: LOGIN_MUT,
          variables: {
            ...data,
            clientMutationId: String(~~(Math.random() * 100000)),
          },
        })

      if (!response) {
        throw new Error('empty response')
      }

      this.loginHandler(response)

      return [null, response]
    } catch (error) {
      this.logout()
      if (String(error).toLowerCase().search('network error') === -1) {
        await timeout(600);
        this.ctx.$about.error({
          title: Dict.AUTH_LOGIN_ERROR,
          body: Dict.AUTH_LOGIN_WRONG_PASSWD,
        })
      }

      return [Error(String(error)), null]
    } finally {
      this._isLoggingIn = false
    }
  }

  public async refresh() {
    console.log('Refreshing...')
    await this.ctx.app.apolloProvider.defaultClient.clearStore()
    await this.ctx.$apolloHelpers.onLogout()

    const variables: RefreshAuthTokenMutationVariables = {
      clientMutationId: String(~~(Math.random() * 10000)),
      jwtRefreshToken: localStorage
        .getItem(Authentication.refreshToken)
        ?.trim(),
    }

    const { data } = await this.ctx.app.apolloProvider.defaultClient.mutate<
      RefreshAuthTokenMutation,
      RefreshAuthTokenMutationVariables
    >({ mutation: REFRESH_TOKEN_MUT, variables })

    if (data?.refreshJwtAuthToken?.authToken) {

      this.setToken(data?.refreshJwtAuthToken?.authToken)
      this.ctx.store.dispatch('authentication/login')
      this.fetchMe()
      return data
    } else throw new Error('empty token')
  }

  public signout(title?: string) {

    if (typeof title === 'undefined')
      title = Dict.signout_seeusoon

    this.ctx.$about.success({ title, time: 6000 })
    this.logout()
  }

  public silentSignout() {
    this.logout()
  }

  private async logout() {
    await this.ctx.store.dispatch('authentication/logout')
    await this.ctx.$apolloHelpers.onLogout()
    this.clearStorage()
    this.ctx.$boxLoading.endLoading()
  }

  public logoutAndGoHome() {
    this.logout()
  }

  private setToken(token: string) {
    this.setCookie(
      Authentication.expiration,
      String(Date.now() + this.loginExpriationThreshold),
      this.loginExpriationThreshold / 1000
    )
    this.setCookie('nuxt-apollo', token, this.loginExpriationThreshold / 1000)
    localStorage.setItem(Authentication.authToken, String(token))
    this.ctx.$apolloHelpers.onLogin(token, undefined, { path: '/' })
    localStorage.setItem('tt', token)
  }

  private setUser(user: User) {
    console.log("setuser", user)
    this.ctx.store.dispatch('authentication/setUser', user)

    const infinity = 10 * 365 * 24 * 60 * 60
    this.setCookie(CookieUser.id, user.id, infinity)
    this.setCookie(
      CookieUser.avatar,
      user.avatar,
      infinity
    )
    this.setCookie(CookieUser.email, user.email, infinity)
    this.setCookie(
      CookieUser.firstName,
      user.firstName,
      infinity
    )
    this.setCookie(
      CookieUser.lastName,
      user.lastName,
      infinity
    )

  }

  private setCookie(key: string, value: string, maxAge: number) {
    this.ctx.app.$cookies.set(key, value, {
      path: '/',
      maxAge,
    })
  }

  private getCookie(key: string) {
    return this.ctx.app.$cookies.get(key)
  }

  private clearCookie(key: string) {
    this.ctx.app.$cookies.remove(key)
  }

  private clearStorage() {
    console.log('cleaning up')

    localStorage.removeItem(Authentication.authToken)
    localStorage.removeItem(Authentication.refreshToken)

    this.clearCookie(Authentication.expiration)
    this.ctx.app.apolloProvider.defaultClient.clearStore()
    this.ctx.app.$cookies.remove('nuxt-apollo')

    this.clearCookie(CookieUser.id)
    this.clearCookie(CookieUser.avatar)
    this.clearCookie(CookieUser.email)
    this.clearCookie(CookieUser.firstName)
    this.clearCookie(CookieUser.lastName)

    this.ctx.store.dispatch('authentication/clearUser')
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
  const loginStrategy = new LoginStrategy(context)

  inject('authentication', () => {
    return loginStrategy
  })
}

export default authentication
