<template>
  <div class="relative bg-gray-100 antialiased">
    <!-- Start Main -->
    <main class="mx-w-6xl container mx-auto py-4">
      <div class="flex flex-col space-y-8">
        <!-- First Row -->

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
                    name="mobile"
                    :rules="{ regex: /^(\d|\+)\d+$/, min: 11, max: 15 }"
                  >
                    <div>
                      <label class="text-gray-700" for="lastname">
                        تلفن همراه
                      </label>
                      <input
                        id="lastname"
                        v-model="user.mobile"
                        type="text"
                        dir="ltr"
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

                  <div
                    class="flex flex-row-reverse items-center justify-end gap-2"
                  >
                    <label class="text-sm" for="location"> آدرس محل کار </label>
                    <input
                      id="location"
                      v-model="location.show"
                      type="checkbox"
                    />
                  </div>
                  {{ socialMedias }}
                  <transition name="v-openwindow">
                    <map-picker
                      v-show="location.show"
                      :lat.sync="location.default.x"
                      :lng.sync="location.default.y"
                      :disabled="false"
                    ></map-picker>
                  </transition>

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
        <div class="mx-auto max-w-md gap-y-4 px-4 md:gap-6 xl:p-0">
          <div
            class="col-span-2 flex flex-col justify-between rounded bg-gradient-to-r from-blue-500 to-blue-800 p-6"
          >
            <div class="flex flex-col">
              <p class="font-bold text-white">
                مشاهده ی کارت کارت ویزیت انلاین
              </p>

              <nuxt-link
                class="mt-4 flex flex-row-reverse items-center justify-center gap-2 text-gray-50"
                to="/user/vcard"
              >
                <p class="max-w-sm text-xs font-light leading-tight md:text-sm">
                  <code> https://nikan-alumni.com/user/vcard/35 </code>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style="color: #f3f4f6"
                  class="ml-auto"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </main>
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
  </div>
</template>

<script lang="ts">
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
import { FetchMeQuery, UpdateUserMutationVariables } from '~/types/types'
import updateUserMutation from '@/apollo/mutation/update-user.gql'
import { Dict } from '~/data/utils/dictionary'
import MapPicker from '~/components/form/MapPicker.vue'
import { BioHandler } from '~/data/utils'

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
  mobile: string
  jobLocation: string
}

export default Vue.extend({
  components: { ValidationProvider, ValidationObserver, MapPicker },
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  data() {
    return {
      open: false,
      open_t: false,
      userTemplate: {} as UserObject,
      location: {
        default: {
          // this is tehran location
          x: 0,
          y: 0,
        },
        show: true,
      },
      socialMedias: { instagram: '', linkedin: '', twitter: '' },
      user: {
        id: '',
        firstName: '',
        lastName: '',
        avatar: '',
        email: '',
        description: '',
        occupation: '',
        mobile: '',
        jobLocation: '',
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
        user.mobile = data.viewer.user_acf?.mobile || ''
        const description = data.viewer.description || ''
        const { biography, socialMedias } = BioHandler.decompose(description)
        user.description = biography
        this.socialMedias.instagram = socialMedias.instagram
        this.socialMedias.linkedin = socialMedias.linkedin
        this.socialMedias.twitter = socialMedias.twitter

        user.jobLocation = ''
        this.location.show = false
        if (data.viewer.user_acf?.jobLocation) {
          const latlng = data.viewer.user_acf.jobLocation.split(',')
          if (latlng.length === 2) {
            if (parseFloat(latlng[0]) && parseFloat(latlng[1])) {
              user.jobLocation = data.viewer.user_acf.jobLocation
              this.location.show = true
              this.location.default.x = parseFloat(latlng[0])
              this.location.default.y = parseFloat(latlng[1])
            }
          }
        }

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
  watch: {
    'location.show'(nval: boolean) {
      if (nval && !this.location.default.x) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.location.default.x = position.coords.latitude
              this.location.default.y = position.coords.longitude
            },
            () => {
              this.location.default.x = tehranLocation.x
              this.location.default.y = tehranLocation.y
            }
          )
        } else {
          this.location.default.x = tehranLocation.x
          this.location.default.y = tehranLocation.y
        }
      }
    },
  },

  mounted() {
    // @ts-ignore
    window.eu = this
  },

  methods: {
    async save() {
      let flag = true

      const updatedUser = {} as UpdateUserMutationVariables
      updatedUser.clientMutationId = 'upusr' + ~~(Math.random() * 1000)
      updatedUser.id = this.userTemplate.id
      this.user.jobLocation =
        this.location.default.x + ',' + this.location.default.y

      const urls = Object.entries(this.socialMedias).map((i) => i[1])
      this.user.description = BioHandler.compose(this.user.description, urls)

      console.log(this.userTemplate)

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
        console.log({ updatedUser })
        return
        try {
          await this.$apollo.mutate({
            mutation: updateUserMutation,
            variables: updatedUser,
          })
          this.$about.success({
            title: 'SUCCESS',
            body: Dict.UPDATE_USER_SUCESS,
          })

          await this.$fetch()
        } catch (error) {
          console.error(error)
          this.$about.error({ title: Dict.UPDATE_USER_ERR })
        }
      }
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
