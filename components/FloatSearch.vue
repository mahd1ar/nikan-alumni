<template>
  <div class="fixed top-0 left-0 flex-center w-screen h-screen z-20 text-white">
    <div
      class="absolute w-full h-full bg-gradient-to-br from-slate-900 to-slate-700 opacity-75"
    ></div>
    <div
      class="relative p-12 w-10/12 bg-gray-50 flex flex-col rounded-md max-h-screen overflow-auto"
    >
      <div class="flex gap-2">
        <div
          class="w-full flex text-tm-black p-4 rounded-md gap-4 border-2 border-cyan-500 bg-white sticky top-0 z-10"
        >
          <label for="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-10 h-10 text-cyan-500"
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
            class="focus-within:outline-none w-full px-2 bg-opacity-0"
            type="text"
            @blur="inputFocused"
            @focus="inputFocused"
            @input="input"
          />
        </div>
        <i
          class="w-20 flex-center flex-shrink-0 border-2 text-gray-400 cursor-pointer"
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
      <section v-if="searchValue" class="text-gray-600 body-font">
        <div class="container px-5 pt-12 mx-auto transition-all">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2
                class="font-medium title-font tracking-widest text-cyan-700 mb-4 text-sm text-center sm:text-right"
              >
                نتایج
              </h2>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-right items-center -mb-1 space-y-2.5"
              >
                <a
                  v-for="(g, id) in [1, 2, 3]"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
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

      <section v-else class="text-gray-600 body-font">
        <div
          class="container px-5 pt-12 mx-auto transition-all"
          :style="{ opacity: inputIsFocused ? 0.4 : 1 }"
        >
          <div class="text-center mb-20">
            <h2
              class="sm:text-3xl font-naskh text-2xl font-medium text-center title-font text-gray-900 mb-4"
            >
              دسترسی سریع به محتوا وب سایت
            </h2>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2
                class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-right"
              >
                SHOOTING STARS
              </h2>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-right items-center -mb-1 space-y-2.5"
              >
                <a
                  v-for="(g, id) in group"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                  >
                  </span>
                  <span class="text-right">
                    {{ g }}
                  </span>
                </a>
              </nav>
            </div>

            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2
                class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-right"
              >
                SHOOTING STARS
              </h2>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-right items-center -mb-1 space-y-2.5"
              >
                <a
                  v-for="(v, id) in mediaArchive"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                  >
                  </span>
                  <span class="text-right">
                    {{ v }}
                  </span>
                </a>
              </nav>
            </div>

            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2
                class="font-bold title-font tracking-widest text-tm-black mb-4 text-sm text-center sm:text-right"
              >
                کتابخانه
              </h2>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-right items-center -mb-1 space-y-2.5"
              >
                <a
                  v-for="(v, id) in library"
                  :key="id"
                  class="flex items-start text-sm"
                >
                  <span
                    class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                  >
                  </span>
                  <span class="text-right">
                    {{ v }}
                  </span>
                </a>
              </nav>
            </div>

            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full flex flex-col gap-7">
              <div>
                <h2
                  class="font-bold title-font tracking-widest text-tm-black mb-4 text-sm text-center sm:text-right"
                >
                  شورای مرکزی
                </h2>
                <nav
                  class="flex flex-col sm:items-start sm:text-left text-right items-center -mb-1 space-y-2.5"
                >
                  <a class="flex items-start text-sm">
                    <span
                      class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                    >
                    </span>
                    <span class="text-right"> دور اول </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                    >
                    </span>
                    <span class="text-right"> دور دوم </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                    >
                    </span>
                    <span class="text-right"> دور سوم </span>
                  </a>
                </nav>
              </div>
              <div>
                <h2
                  class="font-bold title-font tracking-widest text-tm-black mb-4 text-sm text-center sm:text-right"
                >
                  شورای مرکزی
                </h2>
                <nav
                  class="flex flex-col sm:items-start sm:text-left text-right items-center -mb-1 space-y-2.5"
                >
                  <a class="flex items-start text-sm">
                    <span
                      class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                    >
                    </span>
                    <span class="text-right"> دور اول </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
                    >
                    </span>
                    <span class="text-right"> دور دوم </span>
                  </a>
                  <a class="flex items-start text-sm">
                    <span
                      class="bg-blue-100 w-2 h-2 ml-2 mt-2 rounded-full inline-flex items-center justify-center"
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

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

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
  @apply underline cursor-pointer;
}
</style>
