import { Plugin, Context } from '@nuxt/types'

import { CNotification as AboutOption } from '~/store/notification/index'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $about: About
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $about: About
  }

  interface Context {
    $about: About
  }
}

export class About {
  private context: Context

  constructor(context: Context) {
    this.context = context
  }

  success(options: AboutOption) {
    this.context.store.dispatch('notification/success', options)
  }

  error(options: AboutOption) {
    this.context.store.dispatch('notification/error', options)
  }

  info(options: AboutOption) {
    this.context.store.dispatch('notification/info', options)
  }
}

const boxLoading: Plugin = (context, inject) => {
  const ab = new About(context)
  inject('about', ab)
}

export default boxLoading
