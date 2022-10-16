<template>
  <div dir="rtl" class="flex-center fixed top-0 left-0 z-20 h-screen w-screen text-white">
    <div class="absolute h-full w-full bg-gradient-to-br from-slate-900 to-slate-700 opacity-75"></div>
    <div
style="max-height: 90%"
      class="relative flex max-h-screen w-10/12 flex-col overflow-auto rounded-md bg-gray-50 p-4 md:p-12">
      <div class="flex gap-2">
        <div
          class="sticky top-0 z-10 flex w-full gap-4 rounded-md border-2 border-cyan-500 bg-white p-1 px-4 text-tm-black md:p-4">
          <label class="flex-center" for="search">
            <svg
xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
              class="h-4 w-4 text-cyan-500 md:h-10 md:w-10" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path
fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
            </svg>
          </label>
          <input
id="search" v-model="searchValue" name="search" placeholder="جست و جو کنید..."
            class="w-full bg-opacity-0 focus-within:outline-none md:px-2" type="text" @blur="inputFocused"
            @focus="inputFocused" />
        </div>
        <i class="flex-center w-10 flex-shrink-0 cursor-pointer border-2 text-gray-400 md:w-20" @click="close">
          <svg
xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </i>
      </div>
      <section v-if="searchValue" class="body-font text-gray-600">
        <div class="container mx-auto pt-12 transition-all lg:px-5">
          <div class="-m-4 flex flex-wrap">
            <div v-for="(value, key) in results" :key="key" class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2 class="title-font mb-4 text-center text-sm font-medium tracking-widest text-gray-900 sm:text-right">
                {{ value.label }}
              </h2>
              <transition name="v-fade">


                <nav
v-if="value.loading === false"
                  class="-mb-1 flex flex-col items-start space-y-2.5 text-right sm:text-left">
                  <nuxt-link
v-for="(item, index) in value.items" :key="index" class="flex items-start text-sm"
                    :to="item.href" @click.native="close">
                    <span class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100">
                    </span>
                    <span class="text-right">
                      {{ item.title }}
                    </span>
                  </nuxt-link>
                </nav>
                <div v-else>
                  <svg
class="mx-5" aria-hidden="true" role="img" width="1em" height="1em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path
fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15"
                      stroke-linecap="round" stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
                      <animateTransform
attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12" />
                    </path>
                  </svg>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>

      <section v-else class="body-font text-gray-600">
        <div class="container mx-auto px-5 pt-12 transition-all" :style="{ opacity: inputIsFocused ? 0.4 : 1 }">
          <div class="mb-20 text-center">
            <h2 class="title-font mb-4 text-center font-naskh text-2xl font-medium text-gray-900 sm:text-3xl">
              دسترسی سریع به محتوا وب سایت
            </h2>
            <!-- <p class="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p> -->
          </div>
          <div class="-m-4 flex flex-wrap">
            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2 class="title-font mb-4 text-center text-sm font-medium tracking-widest text-gray-900 sm:text-right">
                دسته بندی ها
              </h2>


              <nav class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left">
                <a
v-for="(item, id) in $store.state.navigation.menu.find(i => i.href === '/event/category').submenu"
                  :key="id" class="flex items-start text-sm">
                  <span class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100">
                  </span>
                  <nuxt-link :to="item.href" class="text-right" @click.native="close">
                    {{ item.title }}
                  </nuxt-link>
                </a>
              </nav>
            </div>

            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2 class="title-font mb-4 text-center text-sm font-medium tracking-widest text-gray-900 sm:text-right">
                آرشیو رسانه
              </h2>
              <nav class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left">
                <a
v-for="(v, id) in $store.state.navigation.menu.find(i => i.href === '/video').submenu" :key="id"
                  class="flex items-start text-sm">
                  <span class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100">
                  </span>
                  <nuxt-link :to="v.href" class="text-right" @click.native="close">
                    {{ v.title }}
                  </nuxt-link>
                </a>
              </nav>
            </div>

            <div class="w-full p-4 sm:w-1/2 lg:w-1/4">
              <h2 class="title-font mb-4 text-center text-sm font-bold tracking-widest text-tm-black sm:text-right">
                کتابخانه
              </h2>
              <nav class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left">
                <nuxt-link v-for="(v, id) in library[2].subset" :key="id" :to="v.link || '/notyetready' " class="flex items-start text-sm" @click.native="close">
                  <span class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100">
                  </span>
                  <span class="text-right">
                    {{ v.title }}
                  </span>
                </nuxt-link>
              </nav>
            </div>

            <div class="flex w-full flex-col gap-7 p-4 sm:w-1/2 lg:w-1/4">
              <div>
                <h2 class="title-font mb-4 text-center text-sm font-bold tracking-widest text-tm-black sm:text-right">
                {{ library[3].title }}
                </h2>
                <nav class="-mb-1 flex flex-col items-center space-y-2.5 text-right sm:items-start sm:text-left">
                  <nuxt-link v-for="(v, id) in library[3].subset" :key="id" :to="v.link || '/notyetready' " class="flex items-start text-sm" @click.native="close">
                    <span class="ml-2 mt-2 inline-flex h-2 w-2 items-center justify-center rounded-full bg-blue-100">
                    </span>
                    <span class="text-right"> {{ v.title }} </span>
                  </nuxt-link>
                
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
import { WPapi } from '~/data/GlobslTypes'
import { library } from "@/pages/p/library.vue"

type Result = {
  loading: boolean
  label: string
  items: {
    excerpt: string
    title: string
    href: string
  }[]
}

// type QuickLinks = {
//   name: string
//   label: string
//   items: {
//     title: string
//     href: string
//   }[]
// }

const VueSearch = Vue.extend({
  name: 'FloatSearch',
  data() {
    return {
      searchValue: '',
      inputIsFocused: false,

      group: [
        'روابط عمومی',
        'نشاط و سرگرمی',
        'کارگروه امور خیریه و عام المنفعه',
        'کارگروه خانواده و امور اجتماعی',
        'گارگروه علم و فرهنگ',
        'کارگروه کسب و کار',
      ],

      library,
      results: {
        events: { label: 'رویداد ها', loading: false, items: [] } as Result,
        videos: { label: 'ویديو ها', loading: false, items: [] } as Result,
        posts: { label: 'پست ها', loading: false, items: [] } as Result,
      },
      time: 0,
    }
  },
  watch: {
    searchValue() {
      clearTimeout(this.time)
      const time = window.setTimeout(() => {
        this.input()
      }, 600)
      this.time = Object.freeze(time)
    },
  },
  methods: {
    async input() {
      this.results.events.items.splice(0, this.results.events.items.length)
      this.results.videos.items.splice(0, this.results.videos.items.length)
      this.results.posts.items.splice(0, this.results.posts.items.length)

      if (this.searchValue.trim() === '') return

      this.results.events.loading = true
      this.results.videos.loading = true
      this.results.posts.loading = true

      try {
        const { data: data1 } = await this.$axios.get<WPapi.event.RootObject[]>(
          'wp-json/wp/v2/event?search=' + this.searchValue
        )
        data1.forEach((i) => {
          this.results.events.loading = false
          this.results.events.items.push({
            title: i.title.rendered,
            href: '/event/' + btoa(`post:${i.id}`),
            excerpt: i.excerpt.rendered,
          })
        })

        const { data: data2 } = await this.$axios.get<WPapi.event.RootObject[]>(
          'wp-json/wp/v2/video?search=' + this.searchValue
        )
        data2.forEach((i) => {
          this.results.videos.loading = false
          this.results.videos.items.push({
            title: i.title.rendered,
            href: '/video/' + btoa(`post:${i.id}`),
            excerpt: i.excerpt.rendered,
          })
        })

        const { data: data3 } = await this.$axios.get<WPapi.event.RootObject[]>(
          'wp-json/wp/v2/posts?search=' + this.searchValue
        )

        data3.forEach((i) => {
          this.results.posts.loading = false
          this.results.posts.items.push({
            title: i.title.rendered,
            href: '/post/' + btoa(`post:${i.id}`),
            excerpt: i.excerpt.rendered,
          })
        })
      } catch (error) {
        console.error(error)
      } finally {
        this.results.videos.loading = false
        this.results.events.loading = false
        this.results.posts.loading = false
      }
    },
    inputFocused() {
      this.inputIsFocused = !this.inputIsFocused
    },
    close() {
      this.$store.dispatch('search/toggleSearchBox', false)

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
