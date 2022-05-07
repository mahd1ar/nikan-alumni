<template>
  <div class="flex-center fixed top-0 left-0 z-20 h-screen w-screen text-white">
    <div
      class="absolute h-full w-full bg-gradient-to-br from-slate-900 to-slate-700 opacity-75"
    ></div>
    <div
      class="relative flex max-h-screen w-10/12 flex-col overflow-auto rounded-md bg-gray-50 p-12"
    >
      <div class="flex gap-2">
        <div
          class="sticky top-0 z-10 flex w-full gap-4 rounded-md border-2 border-cyan-500 bg-white p-4 text-tm-black"
        >
          <label for="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-10 w-10 text-cyan-500"
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
          </label>
          <input
            id="search"
            v-model="searchValue"
            name="search"
            placeholder="جست و جو کنید..."
            class="w-full bg-opacity-0 px-2 focus-within:outline-none"
            type="text"
            @blur="inputFocused"
            @focus="inputFocused"
            @input="input"
          />
        </div>
        <i
          class="flex-center w-20 flex-shrink-0 cursor-pointer border-2 text-gray-400"
          @click="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </i>
      </div>
      <section v-if="searchValue" class="body-font text-gray-600">
        <div class="container mx-auto px-5 pt-12 transition-all">
          <div class="-m-4 flex flex-wrap">
            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-4 text-center text-sm font-medium tracking-widest text-cyan-700 sm:text-right"
              >
                نتایج
              </h2>
              <nav
                class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left"
              >
                <a
                  v-for="(g, id) in [1, 2, 3]"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                  >
                  </span>
                  <span dir="ltr" class="text-right">
                    {{ id + 1 + ' ' + searchValue }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section v-else class="body-font text-gray-600">
        <div
          class="container mx-auto px-5 pt-12 transition-all"
          :style="{ opacity: inputIsFocused ? 0.4 : 1 }"
        >
          <div class="mb-20 text-center">
            <h2
              class="title-font mb-4 text-center font-naskh text-2xl font-medium text-gray-900 sm:text-3xl"
            >
              دسترسی سریع به محتوا وب سایت
            </h2>
            <p class="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
          </div>
          <div class="-m-4 flex flex-wrap">
            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-4 text-center text-sm font-medium tracking-widest text-gray-900 sm:text-right"
              >
                SHOOTING STARS
              </h2>
              <nav
                class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left"
              >
                <a
                  v-for="(g, id) in group"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                  >
                  </span>
                  <span class="text-right">
                    {{ g }}
                  </span>
                </a>
              </nav>
            </div>

            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-4 text-center text-sm font-medium tracking-widest text-gray-900 sm:text-right"
              >
                SHOOTING STARS
              </h2>
              <nav
                class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left"
              >
                <a
                  v-for="(v, id) in mediaArchive"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                  >
                  </span>
                  <span class="text-right">
                    {{ v }}
                  </span>
                </a>
              </nav>
            </div>

            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-4 text-center text-sm font-bold tracking-widest text-tm-black sm:text-right"
              >
                کتابخانه
              </h2>
              <nav
                class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left"
              >
                <a
                  v-for="(v, id) in library"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                  >
                  </span>
                  <span class="text-right">
                    {{ v }}
                  </span>
                </a>
              </nav>
            </div>

            <div class="flex w-full flex-col gap-7 p-4 sm:w-1/2 lg:w-1/4">
              <div>
                <h2
                  class="title-font mb-4 text-center text-sm font-bold tracking-widest text-tm-black sm:text-right"
                >
                  شورای مرکزی
                </h2>
                <nav
                  class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left"
                >
                  <a class="flex items-start text-sm">
                    <span
                      class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                    >
                    </span>
                    <span class="text-right"> دور اول </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                    >
                    </span>
                    <span class="text-right"> دور دوم </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                    >
                    </span>
                    <span class="text-right"> دور سوم </span>
                  </a>
                </nav>
              </div>
              <div>
                <h2
                  class="title-font mb-4 text-center text-sm font-bold tracking-widest text-tm-black sm:text-right"
                >
                  شورای مرکزی
                </h2>
                <nav
                  class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left"
                >
                  <a class="flex items-start text-sm">
                    <span
                      class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                    >
                    </span>
                    <span class="text-right"> دور اول </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                    >
                    </span>
                    <span class="text-right"> دور دوم </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100"
                    >
                    </span>
                    <span class="text-right"> دور سوم </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// const debounce = (fn: Function, ms = 300) => {
//   let timeoutId: ReturnType<typeof setTimeout>
//   return function (this: any, ...args: any[]) {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => fn.apply(this, args), ms)
//   }
// }

const VueSearch = Vue.extend({
  name: 'FloatSearch',
  data() {
    return {
      searchValue: '',
      inputIsFocused: false,
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
      group: [
        'روابط عمومی',
        'نشاط و سرگرمی',
        'کارگروه امور خیریه و عام المنفعه',
        'کارگروه خانواده و امور اجتماعی',
        'گارگروه علم و فرهنگ',
        'کارگروه کسب و کار',
      ],
      mediaArchive: [
        'تد نیکان',
        'چالش های کسب و کار',
        'لایو ها',
        'نیک آثار',
        'مباحث پزشکی',
        'کابرگ',
        'وبینار',
      ],
      library: [
        'عضویت',
        'انتخابات',
        'اداره جلسات شورای مرکزی',
        'آیین نامه تبلیغاتی',
        'مالی',
        'معاملاتی',
      ],
    }
  },
  mounted() {
    // console.log(this)
  },
  methods: {
    input() {},
    inputFocused() {
      this.inputIsFocused = !this.inputIsFocused
    },
    close() {
      this.$emit('closeModal')
      this.searchValue = ''
    },
  },
})

export default VueSearch
</script>

<style scoped>
a:hover {
  @apply cursor-pointer underline;
}
</style>
