export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nikan-final',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/hello.client.js',

    { src: '~/plugins/authentication.ts', mode: 'client' },
    { src: '~/plugins/loading.ts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "@nuxtjs/apollo",
    // '@nuxtjs/auth-next'
    'nuxt-leaflet',
  ],

  apollo: {
    tokenName: "nuxt-apollo", // specify token name
    cookieAttributes: {
      expires: 7 // optional, default: 7 (days)
    },
    defaultOptions: {
      $query: {
        fetchPolicy: "network-only",
        errorPolicy: "all"
      }
    },
    watchLoading: "~/plugins/loadingHandler.js",
    errorHandler: '~/plugins/apollo-error-handler.js',

    clientConfigs: {
      default: "~/plugins/apollo-client-config.js",
      //  {
      //   httpEndpoint: 'http://localhost/woonuxt/graphql'
      // },
      // authenticationType: 'Bearer',
    }
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // auth: {
  //   strategies: {
  //     graphql: {
  //       scheme: '~/schemes/graphqlScheme.js',
  //     },
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login?logout=true',
  //     callback: false,
  //     home: '/dashboard',
  //   },
  // },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
