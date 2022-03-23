import { Middleware } from '@nuxt/types'

const authentication: Middleware = (ctx) => {


    if (!ctx.store.state.authentication.isLoggedIn) {
        if (process.client)
            ctx.$about.success({ title: "LOGIN_REQ" })

        if (ctx.route.fullPath)
            return ctx.redirect('/login?redirect=' + encodeURIComponent(ctx.route.fullPath))
        else
            return ctx.redirect('/login')

    }

}

export default authentication