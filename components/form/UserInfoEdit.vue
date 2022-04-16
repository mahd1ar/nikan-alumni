<template>
  <main class="mx-w-6xl container mx-auto">
    <div class="flex flex-col space-y-8">
      <!-- First Row -->

      <div
        class="grid grid-cols-1 items-start gap-y-4 px-4 md:grid-cols-5 md:gap-6 xl:p-0"
      >
        <div
          class="col-span-3 flex flex-col space-y-6 rounded-xl border border-gray-50 bg-white p-6"
        >
          <div class="">
            <h2 class="text-lg font-semibold capitalize text-gray-700">
              اطلاعات کاربر
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

                <validation-provider v-slot="{ errors }" name="mobile">
                  <!-- :rules="{ regex: /^(\d|\+)\d+$/, min: 11, max: 15 }" -->
                  <div>
                    <label class="text-gray-700" for="lastname">
                      تلفن ثابت
                    </label>
                    <input
                      id="lastname"
                      v-model="editUser.phone"
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

                <div class="bg-gray-50 border-dashed py-5 px-3 border-2">
                  <h3 class="text-gray-700">آپلود عکس</h3>
                  <p class="mt-3 text-gray-500 leading-7">
                    به منظور نمایش عکس در پروفایل میتوانید از سرویس
                    <a
                      target="_blank"
                      href="https://en.gravatar.com/"
                      class="text-blue-500 underline"
                    >
                      gravitar
                    </a>
                    استفاده کنید
                    <br />
                    دقت کنید که برای ایجاد حساب کاربری و آپلود عکس حتما با ایمیل
                    <b>
                      {{ user.email }}
                    </b>
                    اقدام کنید
                  </p>
                  <p class="text-xs mt-7">
                    <code class="text-red-500"> * </code>

                    "گرویتار" سرویس جهانی ارائه آواتار به ازای هر ایمیل
                  </p>
                </div>
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
                    >آدرس ایمیل</label
                  >
                  <input
                    id="emailAddress"
                    v-model="editUser.email"
                    disabled
                    type="email"
                    class="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 bg-gray-100 text-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
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

                <map-picker
                  v-if="location.show"
                  :lat.sync="editUser.jobLocation.lat"
                  :lng.sync="editUser.jobLocation.lng"
                  :view-from="[
                    editUser.jobLocation.lat,
                    editUser.jobLocation.lng,
                  ]"
                  :disabled="false"
                ></map-picker>

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
                  name="instagram"
                  rules="max:100"
                >
                  <div>
                    <label class="text-gray-700" for="instagram"
                      >آدرس اینستاگرام</label
                    >
                    <input
                      id="instagram"
                      v-model="editUser.socialMedias.instagram"
                      placeholder="https://instagram.com/USERNAME"
                      name="instagram"
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
                  name="linkedin"
                  rules="max:100"
                >
                  <div>
                    <label class="text-gray-700" for="linkedin"
                      >آدرس لینکدین</label
                    >
                    <input
                      id="linkedin"
                      v-model="editUser.socialMedias.linkedin"
                      placeholder="https://www.linkedin.com/in/USERNAME/"
                      name="linkedin"
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
                  name="twitter"
                  rules="max:100"
                >
                  <div>
                    <label class="text-gray-700" for="twitter"
                      >آدرس توییتر</label
                    >
                    <input
                      id="twitter"
                      v-model="editUser.socialMedias.twitter"
                      placeholder="https://twitter.com/USERNAME"
                      name="twitter"
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
    </div>

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
// @ts-ignore
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
      modal: {
        isOpen: false,
        title: Dict.dashboard_saveinfo_title,
        body: Dict.dashboard_saveinfo_body,
      },
      location: {
        show: false,
      },
      editUser: {} as UserFullProfile,
    }
  },
  fetch() {
    let user = {} as UserFullProfile

    user = { ...this.user }
    user.jobLocation = { ...this.user.jobLocation }
    user.socialMedias = { ...this.user.socialMedias }
    this.editUser = user

    if (this.editUser.jobLocation.lat === 0) {
      this.location.show = false
    } else {
      this.location.show = true
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
      if (nval === false) {
        this.editUser.jobLocation.lat = 0
        this.editUser.jobLocation.lng = 0
      }
    },
  },
  mounted() {
    // @ts-ignore
    window.ui = this
  },
  methods: {
    confirm() {
      this.modal.isOpen = true
    },
    save() {
      // let flag = true

      if (isEqual(this.user, this.editUser) === false) {
        this.$emit('update:user', this.editUser)
        this.$emit('saveProfile')
      } else {
        this.$about.info({ title: Dict.form_no_changes, time: 5000 })
      }
      // console.log(
      //   'is eq social media',
      //   isEqual(this.user.socialMedias, this.editUser.socialMedias)
      // )
      // console.log(
      //   'is eq jobloca',
      //   isEqual(this.user.jobLocation, this.editUser.jobLocation)
      // )
      // console.log(this.user.jobLocation, this.editUser.jobLocation)

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
