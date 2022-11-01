<template>
  <main class="w-full">
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

            <ValidationObserver ref="form" v-slot="{ invalid }" tag="form">
              <fieldset class="mt-4 flex flex-col gap-6" :disabled="loading">
                <validation-provider
                  v-slot="{ errors }"
                  name="نام"
                  rules="required|max:122"
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
                  name="نام خانوادگی"
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
                  name="موبایل"
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
                  name="تلفن"
                  rules="max:22"
                >
                  <!-- :rules="{ regex: /^(\d|\+)\d+$/, min: 11, max: 15 }" -->
                  <div>
                    <label class="text-gray-700" for="lastname">
                      تلفن ثابت
                    </label>
                    <input
                      id="lastname"
                      v-model="editUser.phone"
                      type="number"
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
                  name="وبسایت"
                  :rules="{
                    regex: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                  }"
                >
                  <div>
                    <label class="text-gray-700" for="lastname"> وبسایت</label>
                    <input
                      id="lastname"
                      v-model="editUser.website"
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

                <div class="border-2 border-dashed bg-gray-50 py-5 px-3">
                  <h3 class="text-gray-700">آپلود عکس</h3>
                  <p class="mt-3 leading-7 text-gray-500">
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
                  <p class="mt-7 text-xs">
                    <code class="text-red-500"> * </code>

                    "گرویتار" سرویس جهانی ارائه آواتار به ازای هر ایمیل
                  </p>
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="بیوگرافی"
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
                    class="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                  />
                </div>

                <div>
                  <label class="text-gray-700"> محل اقامت </label>

                  <div class="flex gap-2 flex-row-reverse">
                    <div class="w-6/12">
                      <validation-provider
                        v-slot="{ errors }"
                        :rules="{ regex: /^[^\d]*$/, max: 30 }"
                        name="شهر"
                      >
                        <label class="text-gray-700 text-xs" for="city">
                          شهر
                        </label>

                        <input
                          id="city"
                          v-model="editUser.location.city"
                          type="city"
                          :class="{
                            ' block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                            'border-gray-200': !errors[0],
                            'border-red-500': errors[0],
                          }"
                        />
                        <!-- :rules="{ regex: /^(\d|\+)\d+$/, min: 11, max: 15 }" -->

                        <span
                          v-if="errors[0] !== undefined"
                          class="mx-2 mt-2 text-xs text-red-500"
                          >{{ errors[0] }}</span
                        >
                      </validation-provider>
                    </div>

                    <div class="w-6/12">
                      <validation-provider
                        v-slot="{ errors }"
                        :rules="{ regex: /^[^\d]*$/, max: 30 }"
                        name="کشور"
                      >
                        <label class="text-gray-700 text-xs" for="providence">
                          کشور
                        </label>

                        <input
                          id="providence"
                          v-model="editUser.location.providence"
                          type="text"
                          :class="{
                            ' block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring  focus:ring-blue-300 focus:ring-opacity-40': true,
                            'border-gray-200': !errors[0],
                            'border-red-500': errors[0],
                          }"
                        />
                        <!-- :rules="{ regex: /^(\d|\+)\d+$/, min: 11, max: 15 }" -->

                        <span
                          v-if="errors[0] !== undefined"
                          class="mx-2 mt-2 text-xs text-red-500"
                          >{{ errors[0] }}</span
                        >
                      </validation-provider>
                    </div>
                  </div>
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
                  name="شغل"
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
                  name="آدرس اینستاگرام "
                  :rules="{
                    regex: /instagram\.com\/.+/,
                    max: 100,
                  }"
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
                  name="آدرس لینکدین"
                  :rules="{
                    regex: /linkedin\.com\/.+/,
                    max: 100,
                  }"
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
                  name="آدرس توییتر"
                  :rules="{
                    regex: /twitter\.com\/.+/,
                    max: 100,
                  }"
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
              </fieldset>

              <div class="mt-6 flex justify-end">
                <button
                  :disabled="invalid"
                  :class="{
                    'rounded px-8 py-2 font-semibold uppercase tracking-wider': true,
                    'text-red-500 font-thin text-sm ': invalid,
                    'text-blue-500 hover:bg-blue-100 bg-blue-50': !invalid,
                  }"
                  @click.prevent="confirm"
                >
                  {{ invalid ? 'ورودی ها را دوباره چک کنید' : 'ذخیره' }}
                </button>
              </div>
            </ValidationObserver>
            <!-- gap -->
            <br /><br /><br />
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
import { messages } from 'vee-validate/dist/locale/fa.json';
import { UserFullProfile } from '~/data/GlobslTypes'
import MapPicker from '~/components/form/MapPicker.vue'
import { Dict } from '~/data/utils/dictionary'
const clonedeep: <T>(a: T) => T = require('lodash.clonedeep')

const isEqual: <T>(a: T, b: T) => Boolean = require('lodash.isequal')


  Object.keys(rules).forEach((rule) => {
    extend(rule, {
      // @ts-ignore
      ...rules[rule],
      // @ts-ignore
    message: messages[rule]
  });
});

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
        title: Dict.general_confirm,
        body: Dict.dashboard_saveinfo_body,
      },
      location: {
        show: false,
      },
      editUser: {} as UserFullProfile,
    }
  },
  fetch() {
    this.editUser = clonedeep(this.user)

    if (this.editUser.jobLocation.lat === 0) this.location.show = false
    else this.location.show = true
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
      if (isEqual(this.user, this.editUser) === false) {
        this.$emit('update:user', this.editUser)
        this.$emit('saveProfile')
      } else {
        this.$about.info({ title: Dict.form_no_changes, time: 5000 })
      }
    },
  },
})
</script>
