import { Middleware } from '@nuxt/types'

const unauthenticated: Middleware = (ctx) => {
  if (ctx.store.state.authentication.isLoggedIn) {
    return ctx.redirect('/user/editprofile')
  }
}

export default unauthenticated