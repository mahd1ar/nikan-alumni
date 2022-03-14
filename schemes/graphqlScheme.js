import { gql } from 'graphql-tag'

import { LocalScheme } from '~auth/runtime'


export class RefreshController {
  $auth
  _refreshPromise = null

  constructor(scheme) {
    this.$auth = scheme.$auth
  }

  // Multiple requests will be queued until the first has completed token refresh.
  handleRefresh() {
    // Another request has started refreshing the token, wait for it to complete
    if (this._refreshPromise) {
      return this._refreshPromise
    }

    return this._doRefresh()
  }

  // Returns a promise which is resolved when refresh is completed
  // Call this function when you intercept a request with an expired token.

  _doRefresh() {
    this._refreshPromise = new Promise((resolve, reject) => {
      this.scheme
        .refreshTokens()
        .then((response) => {
          this._refreshPromise = null
          resolve(response)
        })
        .catch((error) => {
          this._refreshPromise = null
          reject(error)
        })
    })

    return this._refreshPromise
  }
}

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username , password: $password }) {
      authToken
      refreshToken
          user {
      jwtAuthExpiration
      jwtAuthToken
      jwtRefreshToken
      jwtUserSecret
    }
    }
  }
`


export const LOGOUT_MUTATION = gql`
  mutation LogOutMutation {
    logOut
  }
`

export const USER_DETAILS_QUERY = gql`
  query UserDetailsQuery {
    viewer {
      id
      firstName
      lastName
      email
    }
  }
`



export default class GraphQLScheme extends LocalScheme {

  constructor(auth, options) {
    super(auth, options)
    this.refreshController = new RefreshController(this)
  }

  async login(credentials, { reset = true } = {}) {

    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app

    // Ditch any leftover local tokens before attempting to log in
    if (reset) {
      this.$auth.reset({ resetInterceptor: false })
    }

    // Make login request
    const response = await apolloClient
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: credentials,
      })
      .then(({ data }) => data && data.login)

    // Update our cookie token
    this.token.set(response.authToken)

    // Set our graphql-token so subsequent graphql request are authenticated
    await $apolloHelpers.onLogin(response.token)

    // Fetch user
    await this.fetchUser() // We will define this function next

    return response.authToken
  }

  refreshTokens() {
    console.log("refreshTokens called")
    // Token and refresh token are required but not available
    if (!this.check().valid) {
      return Promise.resolve()
    }

    // Get refresh token status
    const refreshTokenStatus = this.refreshToken.status()

    // Refresh token is expired. There is no way to refresh. Force reset.
    if (refreshTokenStatus.expired()) {
      this.$auth.reset()
      throw new ExpiredAuthSessionError()
    }

    // Delete current token from the request header before refreshing, if `tokenRequired` is disabled
    if (!this.options.refreshToken.tokenRequired) {
      this.requestHandler.clearHeader()
    }

    const data = {
      [this.options.refreshToken.data]: this.refreshToken.sync()
    }

    return this.$apollo
      .mutate({
        mutation: refreshTokenMutation,
        variables: data
      })
      .then(({ data }) => {
        return data.refreshToken
      })
      .then((data) => {
        if (!data.success) {
          return Promise.reject(data)
        }
        return { data }
      })
      .then((response) => {
        // Update tokens
        this.updateTokens(response, { isRefreshing: true })
        return response
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: 'refreshToken' })
        return Promise.reject(error)
      })
  }


  fetchUser() {

    const {
      apolloProvider: { defaultClient: apolloClient },
    } = this.$auth.ctx.app

    // Token is required but not available
    if (!this.check().valid) {
      return
    }

    // Try to fetch user
    return apolloClient
      .query({
        query: USER_DETAILS_QUERY,
      })
      .then(({ data }) => {
        if (!data.viewer) {
          const error = new Error(`User Data response not resolved`)
          return Promise.reject(error)
        }
        // Set the auth user
        this.$auth.setUser(data.viewer)

        return data.viewer
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: 'fetchUser' })
        return Promise.reject(error)
      })
  }

  async logout() {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app

    await apolloClient
      .mutate({
        mutation: LOGOUT_MUTATION,
      })
      .catch(() => {
        // Handle errors
      })

    // Reset regardless
    $apolloHelpers.onLogout()
    return this.$auth.reset({ resetInterceptor: false })
  }

  initializeRequestInterceptor() {
    // Instead of initializing axios interceptors, Do nothing
    // Since we are not using axios
  }

  reset() {
    this.$auth.setUser(false)
    this.token.reset()
  }
}