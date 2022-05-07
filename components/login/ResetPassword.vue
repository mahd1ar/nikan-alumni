<template>
  <div
    class="w-full transform-gpu px-6 py-8 transition-all duration-700 ease-out md:px-8 lg:w-1/2"
  >
    <h2
      class="text-center font-naskh text-2xl font-semibold text-gray-700 dark:text-white"
    >
      بازیابی پسورد
    </h2>

    <p
      class="mb-16 mt-2 text-center text-base text-gray-600 dark:text-gray-200"
    >
      پسورد جدید خود را وارد کنید
    </p>

    <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

      <a
        href="#"
        class="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
      >
        reset password</a
      >

      <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
    </div>

    <div class="mt-4">
      <div class="flex justify-between">
        <label
          class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
          for="password"
          >Password</label
        >
      </div>

      <input
        id="password"
        v-model="user.password"
        class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        type="password"
      />
    </div>
    <div class="mt-4">
      <div class="flex justify-between">
        <label
          class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
          for="confirmpassword"
          >Confirm Password</label
        >
      </div>

      <input
        id="confirmpassword"
        v-model="user.confirmpassword"
        class="block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
        type="password"
      />

      <p
        v-if="valid.show"
        dir="rtl"
        class="mt-5 text-right text-sm text-red-400"
      >
        {{ valid.message }}
      </p>
    </div>

    <div class="mt-8">
      <button
        v-if="loading"
        class="w-full transform rounded bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        disabled
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          class="mx-auto h-6 w-6 text-center"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <circle cx="18" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin=".67"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin=".33"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
          <circle cx="6" cy="12" r="0" fill="currentColor">
            <animate
              attributeName="r"
              begin="0"
              calcMode="spline"
              dur="1.5s"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
              repeatCount="indefinite"
              values="0;2;0;0"
            />
          </circle>
        </svg>
      </button>
      <button
        v-else
        class="w-full transform rounded bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        @click="changePassword"
      >
        تغییر رمز عبور
      </button>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

      <a
        href="#"
        class="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400"
        >or sign up</a
      >

      <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dict } from '~/data/utils/dictionary'
import ResetPasswordGql from '@/apollo/mutation/reset-password.gql'
import {
  ResetPasswordMutation,
  ResetPasswordMutationVariables,
} from '~/types/types'
import { formatError } from '~/data/utils'
const isEqual: <T>(a: T, b: T) => Boolean = require('lodash.isequal')
interface Validation {
  isValid: boolean
  message: string
  show: boolean
}
export default Vue.extend({
  data() {
    return {
      loading: false,
      user: {
        password: '',
        confirmpassword: '',
      },
    }
  },
  computed: {
    valid(): Validation {
      const password = this.user.password
      const confirmpassword = this.user.confirmpassword

      if (password === '' && confirmpassword === '') {
        return {
          isValid: false,
          message: Dict.rp_incorrect,
          show: false,
        }
      }

      if (password.length < 8)
        return { show: true, isValid: false, message: Dict.rp_min_6char }

      if (confirmpassword === '') {
        return {
          show: false,
          isValid: false,
          message: Dict.rp_dosenot_match,
        }
      }

      if (isEqual(password, confirmpassword) === false) {
        return {
          message: Dict.rp_dosenot_match,
          show: true,
          isValid: false,
        }
      }

      return {
        show: false,
        isValid: true,
        message: '',
      }
    },
  },
  methods: {
    async changePassword() {
      if (this.valid.isValid === false) {
        this.$about.error({ title: Dict.general_err, body: this.valid.message })
        return
      }
      try {
        this.loading = true
        if (!this.$route.query.key) throw new Error(' no key')
        if (!this.$route.query.login) throw new Error(' no login')

        const variables: ResetPasswordMutationVariables = {
          key: this.$route.query.key as string,
          login: this.$route.query.login as string,
          password: this.user.password,
          clientMutationId: 'rpp' + ~~(Date.now() / 1000),
        }

        await this.$apollo.mutate<ResetPasswordMutation>({
          mutation: ResetPasswordGql,
          variables,
        })

        this.$about.success({ title: 'رمزعبور با موفقیت عوض شد' })
        this.$authentication().silentSignout()
        this.$router.push('/login')
      } catch (error) {
        console.error(error)
        this.$about.error({
          title: Dict.general_err,
          body: formatError(error),
        })
      } finally {
        this.loading = false
      }
    },
  },
})
</script>
