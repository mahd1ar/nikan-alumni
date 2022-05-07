import { Middleware } from '@nuxt/types'

const unauthenticated: Middleware = (ctx) => {
  if (ctx.store.state.authentication.isLoggedIn) {
    if (ctx.route.query.action !== 'rp')
      return ctx.redirect('/user/userprofile')
  }
}

export default unauthenticated
