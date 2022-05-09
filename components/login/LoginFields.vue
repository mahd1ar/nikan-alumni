<template>
  <div
    class="w-full transform-gpu px-6 py-8 transition-all duration-700 ease-out md:px-8 lg:w-1/2"
  >
    <h2
      class="text-center font-naskh text-2xl font-semibold text-gray-700 dark:text-white"
    >
      کانون دانش آموختگان نیکان
    </h2>

    <p
      class="mb-16 mt-2 text-center text-base text-gray-600 dark:text-gray-200"
    >
      برای ادامه مطالب وارد حساب کاربری خود وارد شوید
    </p>

    <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

      <a
        href="#"
        class="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
      >
        login with email</a
      >

      <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
    </div>

    <div class="mt-4">
      <label
        class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
        for="LoggingEmailAddress"
        >Email Address</label
      >
      <input
        id="LoggingEmailAddress"
        v-model="user.username"
        class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        type="email"
      />
    </div>

    <div class="mt-4">
      <div class="flex justify-between">
        <label
          class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
          for="loggingPassword"
          >Password</label
        >
        <nuxt-link
          :to="{
            path: '/login',
            query: { action: 'request_for_reset_password' },
          }"
          href="#"
          class="text-xs text-gray-500 hover:underline dark:text-gray-300"
          >Forget Password?</nuxt-link
        >
      </div>

      <input
        id="loggingPassword"
        v-model="user.password"
        class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
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
        class="w-full transform rounded bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        @click="login"
      >
        ورود
      </button>
    </div>

    <!-- <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

      <a
        href="#"
        class="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
        >or sign up</a
      >

      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha'

export default Vue.extend({
  components: { VueHcaptcha },
  data() {
    const isDev = this.$nuxt.context.isDev
    return {
      user: {
        username: isDev ? 'a.mahdiyar7@yahoo.com' : '',
        password: isDev ? 'master33' : '',
      },
    }
  },
  methods: {
    async login() {
      if (this.user.username === '' || this.user.password === '') {
        this.$about.error({ title: 'خطا در نام کاربری یا رمز عبور' })
        return
      }

      await this.$authentication().login(this.user)
    },
  },
})
</script>
