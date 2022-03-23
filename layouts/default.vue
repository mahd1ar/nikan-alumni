<template>
  <div>
    <div
      v-if="$nuxt.context.isDev"
      class="fixed opacity-50 top-10 left-10 z-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
    >
      <div
        class="p-1"
        :class="{ 'bg-red-200': !isLoggedIn, 'bg-green-200': isLoggedIn }"
      >
        {{ isLoggedIn ? 'logged in' : 'logged out' }}
      </div>
      <span class="hidden sm:block">sm</span>
      <span class="hidden md:block">md</span>
      <span class="hidden lg:block">lg</span>
      <span class="hidden xl:block">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>
    <client-only>
      <div class="m-auto fixed bottom-10 right-20 z-30">
        <about />
        <square-loader />
      </div>
    </client-only>
    <Nuxt />
  </div>
</template>

<script lang="ts">
// String.prototype.toIndiaDigits = function () {
//     var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
//     return this.replace(/[0-9]/g, function (w) {
//         return id[+w]
//     });
// }
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/gh/rastikerdar/samim-font@v4.0.5/dist/font-face.css',
      },

      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap',
      },
    ],
  },
  computed: { ...mapGetters({ isLoggedIn: 'authentication/isLoggedIn' }) },
  mounted() {},
})
</script>