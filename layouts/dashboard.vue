<template>
  <div
    dir="rtl"
    class="relative flex min-h-screen flex-col justify-start overflow-hidden"
  >
    <nav class="md:mx-w-6xl p-4 md:container md:mx-auto md:py-8 xl:px-0">
      <div class="hidden lg:flex lg:items-center lg:justify-between">
        <a href="#" class="group flex items-center gap-2">
          <div
            class="rounded-md bg-blue-600 p-2 text-white group-hover:bg-blue-800"
          >
            <svg
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div class="text-base font-bold tracking-widest">پیشخوان</div>
        </a>
        <ul class="flex items-center space-x-4 text-sm font-semibold">
          <li v-for="({ title, link }, index) in nav" :key="index">
            <nuxt-link
              class="rounded-md px-2 py-2 text-gray-800 hover:bg-gray-200 xl:px-4"
              :to="link"
            >
              {{ title }}
            </nuxt-link>
          </li>
          <!-- for multy level -->
          <!-- <li class="relative">
              <a
                @click="open = !open"
                href="#"
                class="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200 flex gap-2 items-center"
              >
                Transactions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 stroke-current stroke-2 text-gray-800 transform duration-500 ease-in-out"
                  :class="open ? 'rotate-90' : ''"
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
              </a>
              <ul
                v-show="open"
                class="absolute top-10 left-0 bg-white p-4 rounded-md shadow overflow-hidden w-64"
              >
                <li>
                  <a
                    href="#"
                    class="p-4 text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
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
                    Transaction ABC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
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
                    Transaction DEF
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
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
                    Transaction GHI
                  </a>
                </li>
              </ul>
            </li> -->
        </ul>
        <ul class="flex space-x-2 text-sm font-semibold xl:space-x-4">
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
        </ul>
        <ul class="flex items-center gap-6">
          <li class="flex items-center gap-4">
            <a
              href="#"
              class="font-sans text-sm font-semibold tracking-wider text-gray-800"
            >
              <!-- firstname lastname -->
              {{ user.firstName }} {{ user.lastName }}
            </a>
            <!-- <div v-if="user.avatar" class="">
              <img :src="user.avatar" class="rounded-3xl h-10" alt="" />
            </div> -->
          </li>
          <li>
            <a href="#">
              <div class="rounded p-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 stroke-current text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="relative flex w-full justify-between lg:hidden">
        <a href="#" class="group flex items-start gap-2">
          <div
            class="rounded-md bg-blue-600 p-3 text-white group-hover:bg-blue-800"
          >
            <svg
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p class="text-sm font-light uppercase">
            Dashboard
            <span class="block text-base font-bold tracking-widest">
              Atom
            </span>
          </p>
        </a>
        <button
          type="button"
          class="rounded-md bg-gray-200 p-3"
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
        <div
          v-show="open_t"
          class="absolute top-14 left-0 right-0 z-20 w-full rounded-md border bg-white"
        >
          <ul class="p-4">
            <li class="rounded px-4 py-2 hover:bg-gray-200">
              <a href="#" class="flex items-center gap-4">
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
                My Account
              </a>
            </li>
            <li class="rounded px-4 py-2 hover:bg-gray-200">
              <a href="#" class="flex items-center gap-4">
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
                Transactions
              </a>
            </li>
            <li class="rounded px-4 py-2 hover:bg-gray-200">
              <a href="#" class="flex items-center gap-4">
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
                Cards
              </a>
            </li>
            <li class="rounded px-4 py-2 hover:bg-gray-200">
              <a href="#" class="flex items-center gap-4">
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
                Offers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
        <about />
        <square-loader />
      </div>
    </client-only>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  data() {
    return {
      open_t: false,
      nav: [
        {
          title: 'خانه',
          link: '/',
        },
        {
          title: 'اطلاعات شخصی',
          link: '/user/userprofile',
        },
        {
          title: 'رویداد ها',
          link: '/user/events',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      user: 'authentication/user',
      isLoggedIn: 'authentication/isLoggedIn',
      loading: 'loading',
    }),
  },
  mounted() {},
})
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-gray-100 text-gray-600;
}
</style>
