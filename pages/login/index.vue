<template>
  <div class="h-screen w-screen flex-center">
    <div class="container mx-auto">
      <div
        class="flex max-w-sm mx-auto my-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl"
      >
        <div
          :class="
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          "
          style="background-image: url('img/login.jpg')"
          class="hidden bg-cover lg:block lg:w-1/2 transition-all transform-gpu duration-700 ease-out"
        >
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!4v1646566186841!6m8!1m7!1sCAoSLEFGMVFpcFAtVTBuUUdLSl9KOFRVSHBVOVc2c3NLeGJaSElQaWkzbGh3V0I4!2m2!1d35.7882112!2d51.42718499999999!3f280!4f20!5f0.7820865974627469"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="w-full h-full"
          ></iframe> -->
          <nuxt-link
            class="mt-2 cursor-pointer ml-2 hover:bg-opacity-50 px-4 py-2 bg-white bg-opacity-25 rounded-md inline-flex"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>

            بازگشت
          </nuxt-link>
        </div>

        <div
          :class="
            loaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          "
          class="w-full px-6 py-8 md:px-8 lg:w-1/2 transition-all transform-gpu duration-700 ease-out"
        >
          <h2
            class="text-2xl font-naskh font-semibold text-center text-gray-700 dark:text-white"
            @click="h"
          >
            کانون دانش آموختگان نیکان
          </h2>

          <p
            class="mb-16 text-base text-center mt-2 text-gray-600 dark:text-gray-200"
          >
            برای ادامه مطلب حساب کاربری خود وارد شوید
          </p>

          <!-- <a
            href="#"
            class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div class="px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>

            <span class="w-5/6 px-4 py-3 font-bold text-center">
              بازگشت به خانه
            </span>
          </a> -->

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              login with email</a
            >

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div class="mt-4">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
              >Email Address</label
            >
            <input
              id="LoggingEmailAddress"
              v-model="user.username"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div class="mt-4">
            <div class="flex justify-between">
              <label
                class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword"
                >Password</label
              >
              <a
                href="#"
                class="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >Forget Password?</a
              >
            </div>

            <input
              id="loggingPassword"
              v-model="user.password"
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div class="mx-auto mt-4">
            <vue-hcaptcha
              v-if="false"
              theme="dark"
              sitekey="073dbe4d-32be-4898-ad05-23a10d6e580b"
              @verify="h"
            ></vue-hcaptcha>
          </div>

          <div class="mt-8">
            <button
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              @click="login()"
            >
              Login
            </button>
          </div>

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a
              href="#"
              class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >or sign up</a
            >

            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// declare module hcaptcha {
//   export function close(): void
//   export function execute(): void
//   export function getRespKey(): string
//   export function getResponse(): string
//   export function remove(): void
//   export function render(): void
//   export function reset(): void
//   export function setData(): void
// }
import VueHcaptcha from '@hcaptcha/vue-hcaptcha'
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: { VueHcaptcha },
  middleware: ['unauthenticated'],
  data() {
    return {
      loaded: false,
      user: { username: 'mahdiyaranari', password: 'master33' },
    }
  },
  head: {
    script: [
      {
        src: 'https://js.hcaptcha.com/1/api.js',
        body: true,
        async: true,
        defer: true,
      },
    ],
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
    }),
  },

  watch: {
    isLoggedIn(newval: boolean) {
      if (newval) {
        let nextPath = this.$route.query.redirect
        if (nextPath) {
          if (Array.isArray(nextPath))
            nextPath = nextPath[0] ? nextPath[0] : '/'

          this.$router.push(decodeURIComponent(nextPath))
        } else {
          this.$router.push('/user/editprofile')
        }
      }
    },
  },
  mounted() {
    // @ts-ignore
    this.loaded = true
  },

  methods: {
    async login() {
      await this.$authentication().login(this.user)
    },
    h(e: string) {
      console.log(e)
    },
  },
})
</script>

