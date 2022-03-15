import { Plugin, Context } from '@nuxt/types'

import { LoadingOptions } from "~/store/loading/index"



declare module 'vue/types/vue' {
    // this.$myInjectedFunction inside Vue components
    interface Vue {
        $boxLoading: BoxLoading
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $boxLoading: BoxLoading
    }

    interface Context {
        $boxLoading: BoxLoading
    }
}

export class BoxLoading {
    private context: Context

    constructor(context: Context) { this.context = context }

    startLoading(options: LoadingOptions) {
        this.context.store.dispatch('loading/loading', options)
    }

    endLoading() {
        this.context.store.dispatch('loading/endLoading')
    }

    startLoadingEmpty() {
        this.context.store.dispatch('loading/loadingEmpty')
    }
}

const boxLoading: Plugin = (context, inject) => {
    const bl = new BoxLoading(context)
    inject('boxLoading', bl)
}

export default boxLoading

