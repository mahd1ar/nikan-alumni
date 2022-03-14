import { Plugin, Context } from '@nuxt/types'

import { RootState } from "@/store/confirm/index"

class Confirm {
    ctx: Context
    constructor(ctx: Context) {
        this.ctx = ctx;
    }

    ask(options: RootState["options"]) {

    }

    alert() {

    }
}

declare module 'vue/types/vue' {
    // this.$myInjectedFunction inside Vue components
    interface Vue {
        $confirm(): Confirm
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$confirm inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $confirm(): Confirm
    }
    // nuxtContext.$confirm
    interface Context {
        $confirm(): Confirm
    }
}

// declare module 'vuex/types/index' {
//   // this.$confirm inside Vuex stores
//   interface Store<S> {
//     $confirm(creadit : userCreadit): void
//   }
// }

const authentication: Plugin = (context, inject) => {
    console.log("authentication is initialized")


    const c = new Confirm(context);

    inject('confirm', () => {
        return c
    })
}

export default authentication

