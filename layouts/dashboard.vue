<template>
  <div
    dir="rtl"
    class="relative flex min-h-screen flex-col justify-start overflow-hidden"
  >
    <div class="border-b-2">
      <nav class="md:mx-w-6xl p-4 md:container md:mx-auto md:py-4 xl:px-0">
        <div class="hidden lg:flex lg:items-center lg:justify-between">
          <div class="group flex items-center gap-2">
            <div
              class="rounded-full bg-sky-50 p-1 text-sky-400 group-hover:bg-sky-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                class="h-10 w-10 p-2"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path
                    d="M6.572 37.428A21.904 21.904 0 0 1 2 24C2 11.85 11.85 2 24 2s22 9.85 22 22c0 5.056-1.705 9.713-4.572 13.428"
                  />
                  <path
                    d="M12.303 31.697A13.935 13.935 0 0 1 10 24c0-7.732 6.268-14 14-14s14 6.268 14 14c0 2.843-.847 5.488-2.303 7.697"
                  />
                  <path d="m24 30l16 16H8l16-16Z" clip-rule="evenodd" />
                </g>
              </svg>
            </div>
            <div class="flex translate-y-1 transform flex-col">
              <div class="text-base font-bold tracking-widest">پیشخوان</div>
              <div class="text-xs">
                {{ user.firstName }} {{ user.lastName }}
              </div>
            </div>
          </div>
          <ul class="flex items-center gap-2 text-sm font-semibold">
            <li v-for="({ title, link }, index) in nav" :key="index">
              <nuxt-link
                class="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-200 xl:px-4"
                :to="link"
              >
                {{ title }}
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link
            class="mr-10 flex flex-row-reverse items-center justify-center gap-4 px-2 py-2 text-sm text-gray-500 hover:bg-gray-100 xl:px-4"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-sky-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            بازگشت به خانه
          </nuxt-link>
          <!-- <ul class="flex space-x-2 text-sm font-semibold xl:space-x-4">
            <li>
              <a href="#">
                <div class="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="rounded p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 stroke-current text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul> -->
          <ul class="flex items-center gap-6">
            <li>
              <div title="exit">
                <div
                  class="flex cursor-pointer gap-2 overflow-hidden rounded-md bg-sky-50 p-1 px-3 text-sky-400 hover:bg-white"
                  @click="exitModal.open = true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="h-6 w-6"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    />
                  </svg>

                  خروج
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative flex w-full justify-between lg:hidden">
          <div class="group flex items-start gap-2">
            <div class="group flex items-center gap-2">
              <div
                class="rounded-full bg-sky-50 p-1 text-sky-400 group-hover:bg-sky-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  class="h-10 w-10 p-2"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <path
                      d="M6.572 37.428A21.904 21.904 0 0 1 2 24C2 11.85 11.85 2 24 2s22 9.85 22 22c0 5.056-1.705 9.713-4.572 13.428"
                    />
                    <path
                      d="M12.303 31.697A13.935 13.935 0 0 1 10 24c0-7.732 6.268-14 14-14s14 6.268 14 14c0 2.843-.847 5.488-2.303 7.697"
                    />
                    <path d="m24 30l16 16H8l16-16Z" clip-rule="evenodd" />
                  </g>
                </svg>
              </div>
              <div class="flex translate-y-1 transform flex-col">
                <div class="text-base font-bold tracking-widest">پیشخوان</div>
                <div class="text-xs">
                  {{ user.firstName }} {{ user.lastName }}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="rounded-full bg-white p-3 text-sky-400"
            @click="open_t = !open_t"
          >
            <svg
              v-show="!open_t"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <svg
              v-show="open_t"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <transition name="v-openwindow">
            <div
              v-if="open_t"
              class="absolute top-14 left-0 right-0 z-20 w-full rounded-md border bg-white"
              @click="open_t = false"
            >
              <div class="p-4">
                <nuxt-link
                  v-for="({ title, link }, index) in nav"
                  :key="index"
                  :to="link"
                  class="flex items-center gap-4 rounded px-4 py-2 hover:bg-gray-200 text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {{ title }}
                </nuxt-link>
                <button
                  class="mt-2 mr-4 w-full text-right text-red-500"
                  @click="exitModal.open = true"
                >
                  خروج از حساب کاربری
                </button>
              </div>
            </div>
          </transition>
        </div>
      </nav>
    </div>

    <!-- development hints -->
    <div
      v-if="$nuxt.context.isDev"
      class="fixed top-10 left-10 z-50 opacity-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
    >
      <div class="text-white">loading : {{ loading }}</div>
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
      <div class="fixed bottom-10 right-20 z-30 m-auto">
        <div class="js-fireworks absolute right-0 bottom-0"></div>
        <about />
        <square-loader />
      </div>
    </client-only>
    <Nuxt />
    <modal :open.sync="exitModal.open" :confirm="true" @yes="exit">
      <template #title>
        <h1>{{ exitModal.title }}</h1>
      </template>
      <template #body>
        {{ exitModal.body }}
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Dict } from '~/data/utils/dictionary'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  data() {
    const data = {
      open_t: false,
      exitModal: {
        title: Dict.dashboard_signout_title,
        body: Dict.dashboard_signout_body,
        open: false,
      },
      nav: [
        {
          title: 'اطلاعات کاربر',
          link: '/user/userprofile',
        },
        {
          title: 'رویداد ها',
          link: '/user/events',
        },
        {
          title: ' تخفیفات',
          link: '/user/coupons',
        },
      ],
    }
    if (this.$device.isMobile)
      data.nav.push({
        title: 'بازگشت به خانه',
        link: '/',
      })
    return data
  },
  head: {
    title: 'dashboard',
  },
  computed: {
    ...mapGetters({
      user: 'authentication/user',
      isLoggedIn: 'authentication/isLoggedIn',
      loading: 'loading',
    }),
  },
  methods: {
    exit() {
      this.$authentication().signout()
    },
  },
})
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-gray-100 text-tm-black;
}
</style>
