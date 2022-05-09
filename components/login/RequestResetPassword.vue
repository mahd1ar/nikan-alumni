<template>
  <div
    class="relative w-full transform-gpu px-6 py-8 transition-all duration-700 ease-out md:px-8 lg:w-1/2"
  >
    <h2
      class="text-center font-naskh text-2xl font-semibold text-gray-700 dark:text-white"
    >
      فراموشی رمز عبور
    </h2>

    <p
      class="mt-2 mb-12 text-center text-base text-gray-600 dark:text-gray-200"
    >
      برای تنظیم مجدد پسورد ایمیل یا کد دانش آموختگی خود را وارد کنید
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
        class="mb-2 block text-sm font-medium text-gray-200"
        for="LoggingEmailAddress"
      >
        Email or Student Code
      </label>
      <input
        v-model="email"
        placeholder="email"
        class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        type="email"
      />

      <p class="mt-2 text-right text-xs leading-7 text-slate-400">
        چنانچه ایمیل یا کد دانش آموختگی خود را فراموش کرده اید با دبیرخانه تماس
        برقرار کنید
      </p>
    </div>

    <div class="mx-auto mt-4">
      <vue-hcaptcha
        v-if="false"
        theme="dark"
        sitekey="073dbe4d-32be-4898-ad05-23a10d6e580b"
        @verify="verified = true"
      ></vue-hcaptcha>
    </div>

    <div class="mt-8">
      <button
        class="w-full transform rounded bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        @click="sendpassword"
      >
        ارسال لینک تغییر پسورد
      </button>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

      <nuxt-link
        :to="{ path: '/login', query: {} }"
        class="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
      >
        بازگشت به صفحه ورود
      </nuxt-link>

      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    </div>

    <!-- overlay -->
    <transition name="v-circle">
      <div
        v-if="loading"
        class="flex-center absolute top-0 left-0 h-full w-full bg-white"
      >
        <loading-indicator></loading-indicator>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueHcaptcha from '@hcaptcha/vue-hcaptcha'
import sendResetPasswordql from '@/apollo/mutation/send-reset-password.gql'
import {
  SendResetPasswordMutation,
  SendResetPasswordMutationVariables,
} from '~/types/types'
import { Dict } from '~/data/utils/dictionary'
import { timeout } from '~/data/utils'

export default Vue.extend({
  components: { VueHcaptcha },
  data() {
    return {
      loading: false,
      verified: false,
      email: 'a.mahdiyar7@yahoo.com',
    }
  },
  methods: {
    async sendpassword() {
      // check if email is existed

      const variables: SendResetPasswordMutationVariables = {
        clientMutationId: 'uppass' + ~~(Date.now() / 10000),
        username: this.email,
      }
      try {
        this.loading = true

        const { data } = await this.$apollo.mutate<SendResetPasswordMutation>({
          mutation: sendResetPasswordql,
          variables,
        })
        if (data?.sendPasswordResetEmail?.user?.email) {
          const msg =
            'لینک بازیابی به آدرس ' +
            data.sendPasswordResetEmail.user.email +
            'ارسال شد'
          this.$about.success({ title: msg, time: 6000 })
          console.log(data)
          await timeout(3000)
          this.$router.push({ path: '/login' })
        } else {
          const msg = ' لینک بازیابی ارسال شد '
          this.$about.success({ title: msg, time: 6000 })
          console.log(data)
          await timeout(3000)
          this.$router.push({ path: '/login' })
        }
      } catch (error) {
        if (String(error).search('There is no user registered') !== -1)
          this.$about.error({
            title: Dict.general_err,
            body: 'ایمیل یا کد وارد شده صحیح نیست',
          })
        else console.error(error)
      } finally {
        await timeout(700)
        this.loading = false
      }
    },
  },
})
</script>
