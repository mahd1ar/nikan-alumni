<template>
  <main class="mx-w-6xl container mx-auto py-4">
    <div class="flex flex-col space-y-8">
      <!-- First Row -->

      <div
        class="grid grid-cols-1 items-start gap-y-4 px-4 md:grid-cols-5 md:gap-6 xl:p-0"
      >
        <div class="col-start-1 col-end-5">
          <h2 class="text-xs font-bold tracking-wide text-gray-800 md:text-sm">
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
              <fieldset class="mt-4 flex flex-col gap-6" :disabled="loading">
                <validation-provider
                  v-slot="{ errors }"
                  name="first name"
                  rules="required|max:22"
                >
                  <div>
                    <label class="text-gray-700" for="firstname">نام</label>
                    <input
                      id="firstname"
                      v-model="editUser.firstName"
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
                      v-model="editUser.lastName"
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
                      v-model="editUser.mobile"
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
                      v-model="editUser.bio"
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
                    v-model="editUser.email"
                    disabled
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
                {{ editUser.socialMedias }}
                <transition name="v-openwindow">
                  <map-picker
                    v-show="location.show"
                    :lat="editUser.jobLocation.lat"
                    :lng="editUser.jobLocation.lng"
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
                      v-model="editUser.occupation"
                      type="text"
                      :class="{
                        'mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                        'border-gray-200': !errors[0],
                        'border-red-500': errors[0],
                      }"
                      @input="xxx($event)"
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
            <p class="font-bold text-white">مشاهده ی کارت کارت ویزیت انلاین</p>

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
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  ValidationProvider,
  extend,
  ValidationObserver,
  configure,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import isEqual from 'lodash.isequal'
import MapPicker from '~/components/form/MapPicker.vue'
import { UserFullProfile } from '~/data/GlobslTypes'
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

const tehranLocation = {
  x: 35.6967329,
  y: 51.2097332,
}

export default Vue.extend({
  components: { ValidationProvider, ValidationObserver, MapPicker },
  props: {
    user: { type: Object as PropType<UserFullProfile>, required: true },
    loading: { type: Boolean },
  },
  data() {
    return {
      model: {
        isOpen: false,
        title: Dict.dashboard_saveinfo_title,
        body: Dict.dashboard_saveinfo_body,
      },
      location: {
        show: true,
      },
      editUser: {} as UserFullProfile,
    }
  },
  watch: {
    'location.show'(nval: boolean) {
      if (nval && !this.editUser.jobLocation.lat) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.editUser.jobLocation.lat = position.coords.latitude
              this.editUser.jobLocation.lng = position.coords.longitude
            },
            () => {
              this.editUser.jobLocation.lat = tehranLocation.x
              this.editUser.jobLocation.lng = tehranLocation.y
            }
          )
        } else {
          this.editUser.jobLocation.lat = tehranLocation.x
          this.editUser.jobLocation.lng = tehranLocation.y
        }
      }
    },
  },
  created() {
    const user = {} as UserFullProfile
    let k: keyof typeof user

    for (k in this.user) {
      if (typeof k === 'object') {
        user[k] = Object.assign({}, this.user[k])
      } else if (typeof k === 'string' || typeof k === 'number') {
        // @ts-ignore
        user[k] = this.user[k]
      }
    }

    this.editUser = user

    if (this.editUser.jobLocation.lat === 0) {
      this.location.show = false
    }
  },
  mounted() {
    // @ts-ignore
    window.ui = this
  },
  methods: {
    confirm() {
      this.model.isOpen = true
    },
    save() {
      // let flag = true

      console.log(isEqual(this.user, this.editUser))

      // this.editUser.jobLocation =
      //   this.location.default.x + ',' + this.location.default.y

      // const urls = Object.entries(this.socialMedias).map((i) => i[1])
      // this.user.description = BioHandler.compose(this.user.description, urls)

      // console.log(this.userTemplate)

      // let k: keyof UserObject
      // // let k: keyof UpdateUserMutationVariables

      // for (k in this.userTemplate) {
      //   if (this.user[k] !== this.userTemplate[k]) {
      //     console.log(k, ' is changed')
      //     // @ts-ignore
      //     updatedUser[k] = this.user[k]
      //     flag = false
      //   }
      // }
      // if (flag) {
      //   this.$about.info({ title: Dict.form_no_changes })
      //   return false
      // } else {
      //   console.log({ updatedUser })
      //   return
      //   try {
      //     await this.$apollo.mutate({
      //       mutation: updateUserMutation,
      //       variables: updatedUser,
      //     })
      //     this.$about.success({
      //       title: 'SUCCESS',
      //       body: Dict.UPDATE_USER_SUCESS,
      //     })

      //     await this.$fetch()
      //   } catch (error) {
      //     console.error(error)
      //     this.$about.error({ title: Dict.UPDATE_USER_ERR })
      //   }
      // }
    },
  },
})
</script>
