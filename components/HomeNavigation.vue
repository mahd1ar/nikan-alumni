<template>
  <nav class="h-24 relative z-10 top-8">
    <div
      class="container mx-auto h-full overflow-x-clip lg:max-w-[1104px] lg:px-10 xl:px-0"
    >
      <div
        class="flex flex-row gap-1 h-full w-full bg-white px-4 rounded items-stretch justify-between"
      >
        <div class="flex flex-row gap-1">
          <div class="flex items-center">
            <nuxt-link
              to="/login"
              class="text-neutral-700 rounded-full py-2 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </g>
              </svg>
            </nuxt-link>
            <div
              @click="$emit('openModal')"
              class="text-neutral-700 rounded-full py-2 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
                />
              </svg>
            </div>
          </div>
          <div
            class="text-neutral-600 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer"
            v-for="(i, index) in menu"
            :key="index"
          >
            {{ i }}
          </div>
        </div>

        <figure class="relative">
          <div class="h-full left-0 py-3 rounded-md bg-white z-10">
            <img class="h-full" src="img/logo_only.png" alt="" />
          </div>
        </figure>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      search: {
        show: false,
      },
      menu: [
        'معرفی',
        'کتابخانه',
        'رویداد ها',
        'رسانه',
        'انواع بیمه',
        'نشریه کاربرگ',
        'بانک اطلاعات',
        'پروفایل اعضا',
      ],
    }
  },
})
</script>