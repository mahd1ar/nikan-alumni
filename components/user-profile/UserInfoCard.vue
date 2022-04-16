<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        اطلاعات عمومی کاربر
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {{ userInfo.firstName + '  ' + userInfo.lastName }}
        دانش آموخته دوره
        {{ userInfo.gen }}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">نام کامل</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ userInfo.firstName }}
            {{ userInfo.lastName }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">ایمیل</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ userInfo.email }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">اشتغال</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ userInfo.occupation }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">موبایل</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ userInfo.mobile }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">تلفن ثابت</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ userInfo.phone }}
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">وبسایت</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ userInfo.url }}
          </dd>
        </div>

        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">بیوگرافی</dt>
          <dd
            style="min-height: 100px"
            class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
          >
            {{ userInfo.bio }}
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">محل اشتغال</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <map-picker
              :lat="userInfo.jobLocation.lat"
              :lng="userInfo.jobLocation.lng"
              :zoom="13"
            ></map-picker>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import MapPicker from '../form/MapPicker.vue'
import { UserFullProfile } from '~/data/GlobslTypes'

export default Vue.extend({
  name: 'UserInfoCard',
  props: {
    userInfo: {
      type: Object as PropType<UserFullProfile>,
      required: true,
    },
  },
  components: {
    MapPicker,
  },
})
</script>

<style lang="scss" scoped></style>
