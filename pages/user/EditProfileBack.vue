<template>
  <div class="relative bg-gray-100 antialiased">
    <!-- Start Nav -->
    <modal :open.sync="modal.isOpen" :confirm="true" @yes="save">
      <template #title>
        <h1>
          {{ modal.title }}
        </h1>
      </template>
      <template #body>
        {{ modal.body }}
      </template>
    </modal>

    <!-- End Nav -->
    <!-- Start Main -->
    <main class="mx-w-6xl container mx-auto py-4">
      <div class="flex flex-col space-y-8">
        <!-- First Row -->
        <div
          class="grid grid-cols-1 gap-y-4 px-4 md:grid-cols-4 md:gap-6 xl:grid-cols-5 xl:p-0"
        >
          <div
            class="rounded-2xl border border-gray-50 bg-white p-6 md:col-span-2 xl:col-span-3"
          >
            <div class="flex flex-col space-y-6 md:h-full md:justify-between">
              <div class="flex justify-between">
                <span
                  class="text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Main Account
                </span>
                <span
                  class="text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Available Funds
                </span>
              </div>
              <div class="flex items-center justify-between gap-2 md:gap-4">
                <div class="flex flex-col space-y-4">
                  <h2
                    class="font-bold leading-tight tracking-widest text-gray-800"
                  >
                    Derol's Savings Account
                  </h2>
                  <div class="flex items-center gap-4">
                    <p class="text-lg tracking-wider text-gray-600">
                      **** **** *321
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                <h2
                  class="text-lg font-black tracking-wider text-gray-700 md:text-xl xl:text-3xl"
                >
                  <span class="md:text-xl">$</span>
                  92,817.45
                </h2>
              </div>
              <div class="flex gap-2 md:gap-4">
                <a
                  href="#"
                  class="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-xs font-semibold tracking-wider text-white hover:bg-blue-800 md:w-auto"
                >
                  Transfer Money
                </a>
                <a
                  href="#"
                  class="w-full rounded-lg bg-blue-50 px-5 py-3 text-center text-xs font-semibold tracking-wider text-blue-600 hover:bg-blue-600 hover:text-white md:w-auto"
                >
                  Link Account
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-span-2 flex flex-col justify-between rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 p-6"
          >
            <div class="flex flex-col">
              <p class="font-bold text-white">Lorem ipsum dolor sit amet</p>
              <p
                class="mt-1 max-w-sm text-xs font-light leading-tight text-gray-50 md:text-sm"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                soluta saepe consequuntur facilis ab a. Molestiae ad saepe
                assumenda praesentium rem dolore? Exercitationem, neque
                obcaecati?
              </p>
            </div>
            <div class="flex items-end justify-between">
              <a
                href="#"
                class="rounded-lg bg-blue-800 px-4 py-3 text-xs font-semibold tracking-wider text-white hover:bg-blue-600 hover:text-white"
              >
                Learn More
              </a>
              <img
                src="assets/calendar.png"
                alt="calendar"
                class="h-24 w-auto object-cover"
              />
            </div>
          </div>
        </div>
        <!-- End First Row -->
        <!-- Start Second Row -->
        <!-- <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6"
          >
            <div
              class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between"
            >
              <h2
                class="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider"
              >
                Expenses By Category
              </h2>
              <a href="#" class="text-xs text-gray-800 font-semibold uppercase"
                >More</a
              >
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
              <div class="flex justify-between items-start">
                <div class="flex flex-col">
                  <p class="text-xs text-gray-600 tracking-wide">
                    Foods & Beverages
                  </p>
                  <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
                  <span class="mt-4 text-xs text-gray-500"
                    >Last Transaction 3 Hours ago</span
                  >
                </div>
                <div class="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                  <img
                    src="assets/dish-2.png"
                    alt="icon"
                    class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                  />
                </div>
              </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
              <div class="flex justify-between items-start">
                <div class="flex flex-col">
                  <p class="text-xs text-gray-600 tracking-wide">Groceries</p>
                  <h3 class="mt-1 text-lg text-green-500 font-bold">$ 8,918</h3>
                  <span class="mt-4 text-xs text-gray-500"
                    >Last Transaction 3 Days ago</span
                  >
                </div>
                <div class="bg-green-500 p-2 md:p-1 xl:p-2 rounded-md">
                  <img
                    src="assets/grocery.png"
                    alt="icon"
                    class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                  />
                </div>
              </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
              <div class="flex justify-between items-start">
                <div class="flex flex-col">
                  <p class="text-xs text-gray-600 tracking-wide">Gaming</p>
                  <h3 class="mt-1 text-lg text-yellow-500 font-bold">
                    $ 1,223
                  </h3>
                  <span class="mt-4 text-xs text-gray-600"
                    >Last Transaction 4 Days ago</span
                  >
                </div>
                <div class="bg-yellow-500 p-2 md:p-1 xl:p-2 rounded-md">
                  <img
                    src="assets/gaming.png"
                    alt="icon"
                    class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                  />
                </div>
              </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
              <div class="flex justify-between items-start">
                <div class="flex flex-col">
                  <p class="text-xs text-gray-600 tracking-wide">
                    Trip & Holiday
                  </p>
                  <h3 class="mt-1 text-lg text-indigo-500 font-bold">
                    $ 5,918
                  </h3>
                  <span class="mt-4 text-xs text-gray-500"
                    >Last Transaction 1 Month ago</span
                  >
                </div>
                <div class="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md">
                  <img
                    src="assets/holiday.png"
                    alt="icon"
                    class="w-auto h-8 md:h-6 xl:h-8 object-cover"
                  />
                </div>
              </div>
            </div>
          </div> -->
        <!-- End Second Row -->
        <!-- Start Third Row -->
        <div
          class="grid grid-cols-1 items-start gap-y-4 px-4 md:grid-cols-5 md:gap-6 xl:p-0"
        >
          <div class="col-start-1 col-end-5">
            <h2
              class="text-xs font-bold tracking-wide text-gray-800 md:text-sm"
            >
              Summary Transactions
            </h2>
          </div>
          <div
            class="col-span-2 flex flex-col space-y-6 rounded-xl border border-gray-50 bg-white p-6"
          >
            <div
              class="flex grid grid-cols-1 items-center justify-between md:grid-cols-2 xl:grid-cols-3"
            >
              <div class="cursor-pointer border p-4">
                <span class="text-xs font-semibold text-gray-500">Daily</span>
                <h2 class="font-bold tracking-wider text-gray-800">$ 27.80</h2>
              </div>
              <div class="cursor-pointer border p-4">
                <span class="text-xs font-semibold text-gray-500">Weekly</span>
                <h2 class="font-bold tracking-wider text-gray-800">$ 192.92</h2>
              </div>
              <div class="cursor-pointer border p-4">
                <span class="text-xs font-semibold text-gray-500">Monthly</span>
                <h2 class="font-bold tracking-wider text-gray-800">$ 501.10</h2>
              </div>
            </div>
            <canvas id="myChart"></canvas>
          </div>
          <div
            class="col-span-3 flex flex-col space-y-6 rounded-xl border border-gray-50 bg-white p-6"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-sm font-bold tracking-wide text-gray-600">
                Latest Transactions
              </h2>
              <a
                href="#"
                class="rounded bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-500 hover:bg-blue-300"
                >More</a
              >
            </div>

            <div class="">
              <h2 class="text-lg font-semibold capitalize text-gray-700">
                Account settings
              </h2>

              <ValidationObserver v-slot="{ invalid }" tag="form">
                <fieldset
                  class="mt-4 flex flex-col gap-6"
                  :disabled="$fetchState.pending"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    name="first name"
                    rules="required|max:22"
                  >
                    <div>
                      <label class="text-gray-700" for="firstname">نام</label>
                      <input
                        id="firstname"
                        v-model="user.firstName"
                        type="text"
                        :class="{
                          'mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                          'border-gray-200': !errors[0],
                          'border-red-500': errors[0],
                        }"
                      />
                      <span
                        v-if="errors[0] !== undefined"
                        class="mx-2 mt-2 text-xs text-red-500"
                        >{{ errors[0] }}</span
                      >
                    </div>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="last name"
                    rules="max:22"
                  >
                    <div>
                      <label class="text-gray-700" for="lastname"
                        >نام خانوادگی</label
                      >
                      <input
                        id="lastname"
                        v-model="user.lastName"
                        type="text"
                        :class="{
                          'mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                          'border-gray-200': !errors[0],
                          'border-red-500': errors[0],
                        }"
                      />
                      <span
                        v-if="errors[0] !== undefined"
                        class="mx-2 mt-2 text-xs text-red-500"
                        >{{ errors[0] }}</span
                      >
                    </div>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="description"
                    rules="max:225"
                  >
                    <div>
                      <label class="text-gray-700" for="description"
                        >بیوگرافی</label
                      >
                      <textarea
                        id="description"
                        v-model="user.description"
                        placeholder="چند خط درباره خودت بنویس"
                        name="description"
                        cols="30"
                        rows="5"
                        type="text"
                        :class="{
                          'mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                          'border-gray-200': !errors[0],
                          'border-red-500': errors[0],
                        }"
                      ></textarea>

                      <span
                        v-if="errors[0] !== undefined"
                        class="mx-2 mt-2 text-xs text-red-500"
                        >{{ errors[0] }}</span
                      >
                    </div>
                  </validation-provider>

                  <div>
                    <label class="text-gray-700" for="emailAddress"
                      >Email Address</label
                    >
                    <input
                      id="emailAddress"
                      disabled
                      :value="user.email"
                      type="email"
                      class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                    />
                  </div>

                  <validation-provider
                    v-slot="{ errors }"
                    name="occupation"
                    rules="max:22"
                  >
                    <div>
                      <label class="text-gray-700" for="occupation">شغل</label>
                      <input
                        id="occupation"
                        v-model="user.occupation"
                        type="text"
                        :class="{
                          'mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                          'border-gray-200': !errors[0],
                          'border-red-500': errors[0],
                        }"
                      />
                      <span
                        v-if="errors[0] !== undefined"
                        class="mx-2 mt-2 text-xs text-red-500"
                        >{{ errors[0] }}</span
                      >
                    </div>
                  </validation-provider>
                </fieldset>

                <div class="mt-6 flex justify-end">
                  <button
                    :disabled="invalid"
                    class="rounded bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-500 hover:bg-blue-100"
                    @click.prevent="confirm"
                  >
                    ذخیره
                  </button>
                </div>
              </ValidationObserver>
            </div>
          </div>
        </div>
        <!-- End Third Row -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import Vue from 'vue'
import {
  ValidationProvider,
  extend,
  ValidationObserver,
  configure,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import onLoggedOut from '@/mixins/on-logged-out'
import fetchMe from '@/apollo/queries/fetch-me.gql'
import {
  FetchMeQuery,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '~/types/types'
import updateUserMutation from '@/apollo/mutation/update-user.gql'
import { Dict } from '~/data/utils/dictionary'

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  })
}

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
})

interface UserObject {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar: string
  occupation: string
  description: string
}

export default Vue.extend({
  components: { ValidationProvider, ValidationObserver },
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  data() {
    return {
      modal: {
        isOpen: false,
        title: Dict.dashboard_saveinfo_title,
        body: Dict.dashboard_saveinfo_body,
      },
      open: false,
      open_t: false,
      userTemplate: {} as UserObject,
      user: {
        id: '',
        firstName: '',
        lastName: '',
        avatar: '',
        email: '',
        description: '',
        occupation: '',
      } as UserObject,
    }
  },
  async fetch() {
    try {
      const { data } = await this.$apollo.query<FetchMeQuery>({
        fetchPolicy: 'no-cache',
        query: fetchMe,
      })
      console.log(data.viewer)

      if (data.viewer) {
        const user = {} as UserObject

        user.id = data.viewer.id
        user.firstName = data.viewer.firstName || ''
        user.lastName = data.viewer.lastName || ''
        user.email = data.viewer.email || ''
        user.avatar = data.viewer.avatar?.url || ''
        user.occupation = data.viewer.user_acf?.occupation || ''
        user.description = data.viewer.description || ''

        this.userTemplate = Object.freeze(user)

        let k: keyof typeof user

        for (k in user) {
          this.user[k] = user[k]
        }
      }
    } catch (error) {
      console.error(error)
    }
  },

  mounted() {
    // @ts-ignore
    window.edit = this
  },

  methods: {
    confirm() {
      this.modal.isOpen = true
    },

    async save() {
      let flag = true

      const updatedUser = {} as UpdateUserMutationVariables

      updatedUser.id = this.userTemplate.id

      let k: keyof UserObject
      // let k: keyof UpdateUserMutationVariables

      for (k in this.userTemplate) {
        if (this.user[k] !== this.userTemplate[k]) {
          console.log(k, ' is changed')
          // @ts-ignore
          updatedUser[k] = this.user[k]
          flag = false
        }
      }
      if (flag) {
        this.$about.info({ title: Dict.form_no_changes })
        return false
      } else {
        try {
          await this.$apollo.mutate<UpdateUserMutation>({
            mutation: updateUserMutation,
            variables: updatedUser,
          })
          this.$about.success({ title: 'SUCCESS', body: 'UPDATE_USER_SUCESS' })

          await this.$fetch()
        } catch (error) {
          console.error(error)
          this.$about.error({ title: 'UPDATE_USER_ERR' })
        }
      }
    },
    async submit() {
      const mutation = gql`
        mutation changeuser {
          updateUser(
            input: {
              id: "dXNlcjox"
              lastName: "tokhmekhar"
              occupation: "anatr mantar"
            }
          ) {
            clientMutationId
            user {
              id
              firstName
              lastName
            }
          }
        }
      `

      const d = await this.$apollo.mutate({ mutation })
      console.log(d)
    },
  },
})
</script>

<style scoped>
input:disabled,
button:disabled,
textarea:disabled {
  @apply bg-gray-200 text-gray-400 transition-colors;
}
</style>
