<template>
  <div dir="rtl">
    <!-- component -->

    <!-- <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.rawgit.com/shuvroroy/youtube-clone/883c8d9a/public/css/main.css"
    /> -->
    <div class="font-samim bg-white">
      <div class="h-44 md:h-80 bg-cover relative">
        <img
          class="h-full w-full object-bottom object-cover"
          src="img/cinema.jpg"
          alt="banner"
        />
        <div class="absolute inset-0">
          <div
            class="text-white container m-auto h-full flex-center flex-col items-center md:items-start"
          >
            <div class="flex-col">
              <h1
                
                class="text-3xl bg-black bg-opacity-60 font-bold tracking-wider py-2 px-4"
              >
                آرشیو رسانه کانون دانش آموختگان
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 pt-6">
        <div class="container mx-auto">
          <div class="horizental-scrollbar">
            <ul class="list-reset flex overflow-auto">
              <li
                v-for="cat in categories"
                :key="cat.href || 'home'"
                :class="
                  cat.href.replace(/(\/|#|(video))/g, '') === hash
                    ? 'py-3 text-center border-grey-dark border-b-2 border-solid px-8'
                    : 'py-3 text-center px-4'
                "
              >
                <nuxt-link
                  :to="cat.href"
                  class="hover:text-black whitespace-nowrap"
                  >{{ cat.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto flex">
        <!-- <div v-if="hash === ''" class="py-6"> -->
        <div
          class="flex-center text-gray-500 w-full h-16"
          v-if="$fetchState.pending"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
              opacity=".5"
            />
            <path
              fill="currentColor"
              d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
            >
              <animateTransform
                attributeName="transform"
                dur="1s"
                from="0 12 12"
                repeatCount="indefinite"
                to="360 12 12"
                type="rotate"
              />
            </path>
          </svg>
        </div>
        <div v-else-if="hash === ''" class="py-6">
          <div v-for="vlist in tatakae" :key="vlist.hash || 'home'">
            <div v-if="vlist.videos.length > 0" class="border-b">
              <h3 class="py-6 text-base font-medium">
                {{ vlist.category }}
                <span class="text-grey-dark mr-3 uppercase">
                  مشاهده تمام موارد
                </span>
              </h3>
              <div class="relative mb-4 grid md:grid-cols-4 grid-cols-2">
                <nuxt-link
                  v-for="(video, index) in vlist.videos"
                  :key="index"
                  class="mr-1 flex-1"
                   :to="'/video/' + encodeURIComponent(video.gqlid)"
                >
                  <div>
                    <img
                      v-if="video.poster"
                      class="h-28 object-cover"
                      :src="video.poster"
                      alt=""
                    />
                    <div v-else>
                      <div class="h-28 bg-black flex-center text-cyan-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          class="w-20"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            fill-opacity=".15"
                            d="M136 792h576V232H136v560zm64-488c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48z"
                          />
                          <path
                            fill="currentColor"
                            d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226z"
                          />
                          <path
                            fill="currentColor"
                            d="M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h4 class="text-sm font-medium mt-2">
                      {{ video.title }}
                    </h4>
                    <p class="font-hairline text-grey-darker mt-2 text-sm">
                      {{ video.speakers.replace(/[–-]/g, ' . ') }}
                    </p>
                    <p class="font-hairline text-grey-darker mt-1 text-xs">
                      {{ video.date }}
                    </p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="border-b">
            <h3 class="py-6 text-base font-medium">
              {{ selectedCategory }}
            </h3>
            <div class="relative mb-4 grid md:grid-cols-4 grid-cols-2 gap-1">
              <nuxt-link
                v-for="video in hashVideos"
                :key="video.id"
                :to="'/video/' + encodeURIComponent(video.gqlid)"
                class="flex-1 mb-4"
              >
                <div>
                  <img
                    v-if="video.poster"
                    class="h-28 object-cover"
                    :src="video.poster"
                    alt=""
                  />
                  <div v-else>
                    <div class="h-28 bg-black flex-center text-cyan-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        class="w-20"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          fill-opacity=".15"
                          d="M136 792h576V232H136v560zm64-488c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48z"
                        />
                        <path
                          fill="currentColor"
                          d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226z"
                        />
                        <path
                          fill="currentColor"
                          d="M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="text-sm font-medium mt-2">
                    {{ video.title }}
                  </h4>
                  <p class="font-hairline text-grey-darker mt-2 text-sm">
                    {{ video.speakers.replace(/[–-]/g, ' . ') }}
                  </p>
                  <p class="font-hairline text-grey-darker mt-1 text-xs">
                    {{ video.date }}
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div v-if="hashVideos.length === 0" class="text-gray-400">
              هیچ مطلبی وجود ندارد
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mediaquery from '@/apollo/queries/videos.gql'
import mediacatquery from '@/apollo/queries/category-videos.gql'
import {
  VideosQuery,
  VideosQueryVariables,
  CategoryVideosQueryVariables,
  CategoryVideosQuery,
} from '~/types/types'
// eslint-disable-next-line camelcase
import { gregorian_to_jalali, toIndiaDigits } from '~/data/utils'
import { RootState as navbarState } from '@/store/navigation/index'
const clonedeep: <T>(a: T) => T = require('lodash.clonedeep')

interface Video {
  id: number
  gqlid: string
  href: any
  title: string
  speakers: string
  duration: string
  date: string
  poster?: string
  _content?: string
  src?: string
  loaded: boolean
}

interface VideoList {
  videos: Video[]
  category: string
  categoryId: string
  hash: string
}

export default Vue.extend({
  data() {
    return {
      items: [] as VideoList[],
      hashVideos: [] as Video[],
    }
  },
  async fetch() {
    if (this.hash === '') await this.getHome()
    else await this.getContentsByCategory(this.hash)
  },
  computed: {
    hash() {
      return this.$route.hash.replace('#', '')
    },
    categories(): navbarState['menu'] {
      const x = (this.$store.state.navigation as navbarState).menu.find(
        (i) => i.href === '/video'
      )

      const res = !x ? [] : clonedeep(x.submenu) || []

      res.unshift({
        title: 'خانه',
        hasSubmenu: false,
        href: '',
        svg: '',
        submenu: [],
      })

      return res
    },

    tatakae(): VideoList[] {
      const submenu = clonedeep(
        (this.$store.state.navigation as navbarState).menu.find(
          (i) => i.href === '/video'
        )!.submenu
      )

      if (!submenu) return []
      submenu.unshift({
        title: 'home',
        hasSubmenu: false,
        href: '',
        svg: '',
        submenu: [],
      })
      const x = submenu
        .map((i) => {
          return this.items.find(
            (j) => i.href.replace(/(\/|#|(video))/g, '') === j.hash
          )
        })
        .filter((i) => {
          return typeof i !== 'undefined'
        }) as VideoList[]

      return x
    },

    selectedCategory(): string {
      return this.categories.find(
        (cat) => cat.href.replace(/(\/|#|(video))/g, '') === this.hash
      )!.title
    },
  },
  watch: {
    hash() {
      this.$fetch()
    },
  },
  mounted() {
    // @ts-ignore
    window.yt = this
    // getSize('http://194.5.205.148/vid/TedNikan1.mp4#t=200')
  },
  methods: {
    async getHome() {
      const variables: VideosQueryVariables = {
        first: 4,
        parent: 5,
      }

      const { data } = await this.$apollo.query<VideosQuery>({
        query: mediaquery,
        variables,
      })

      if (data.categories?.edges) {
        data.categories.edges.forEach((i) => {
          if (i?.node) {
            const vl: VideoList = {
              videos: [],
              category: i.node.name!,
              categoryId: i.node.id,
              hash: i.node.slug!,
            }

            if (!i.node.videos?.nodes) return

            i.node.videos.nodes.forEach((vid) => {
              if (!vid) return

              const v = {} as Video
              const d = vid
                .date!.split('T')[0]
                .split('-')
                .map((i) => Number(i))

              v.date = toIndiaDigits(
                gregorian_to_jalali(d[0], d[1], d[2]).join('/')
              )
              v.id = +vid.databaseId
              v.gqlid = vid.id
              v.title = vid.title || ''

              v.href = vid.id ? '/media/' + encodeURIComponent(vid.id) : '#'

              v.speakers = vid.speakers?.speakers || ''

              // FIX NEXT LINE LATER
              // TODO : id should be used in url
              v.poster = vid.featuredImageId || undefined

              if (vid.content) {
                const matched = vid.content!.match(/<video.*src="(.+)"/)

                if (matched === null) return

                const src = /\.(.+)?#t=/.test(matched[1])
                  ? matched[1]
                  : matched[1] + '#t=200'

                v.src = src
              }
              v.duration = ''
              v.loaded = false
              vl.videos.push(v)
            })
            this.items.push(vl)
          }
        })
      }

      const all = this.items
        .map((i) => i.videos)
        .flat()
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      this.items.unshift({
        categoryId: '',
        category: 'خانه',
        hash: '',
        videos: all.splice(0, 4),
      })
    },
    async getContentsByCategory(slug: string) {
      const variables: CategoryVideosQueryVariables = { id: slug, first: 20 }
      const { data } = await this.$apollo.query<CategoryVideosQuery>({
        query: mediacatquery,
        variables,
      })
      this.hashVideos.splice(0, this.hashVideos.length)
      data.category?.videos?.nodes?.forEach((vid) => {
        if (!vid) return

        const v = {} as Video
        const d = vid
          .date!.split('T')[0]
          .split('-')
          .map((i) => Number(i))

        v.date = toIndiaDigits(gregorian_to_jalali(d[0], d[1], d[2]).join('/'))
        v.id = +vid.databaseId
        v.gqlid = vid.id
        v.title = vid.title || ''

        v.href = vid.id ? '/video/' + encodeURIComponent(vid.id) : '#'

        v.speakers = vid.speakers?.speakers || ''

        // FIX NEXT LINE LATER
        // TODO : id should be used in url
        v.poster = vid.featuredImageId || undefined

        v.duration = ''
        v.loaded = false

        this.hashVideos.push(v)
      })
    },
    // getpic(video: HTMLVideoElement) {
    //   const canvas = this.$refs.canvas! as HTMLCanvasElement
    //   canvas
    //     .getContext('2d')!
    //     .drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
    //   return canvas.toDataURL()
    // },
    // async getVideoMeta() {
    //   await timeout(2000)
    //   this.items.forEach((i) => {
    //     i.videos.forEach((v) => {
    //       if (!v.src) return
    //       // const videoElement = document.querySelector(
    //       //   `[data-id="${v.dataId}"] video`
    //       // ) as HTMLVideoElement
    //       const videoElement = document.createElement('video')
    //       videoElement.preload = 'metadata'
    //       videoElement.src = v.src
    //       videoElement.buffered.start(2)
    //       console.log('asdasdasd : ', this.getpic(videoElement))
    //       videoElement.remove()
    //       // if (!videoElement) return
    //       // if (videoElement.duration) {
    //       //   v.duration = secToHour(videoElement.duration)
    //       //   return
    //       // }
    //       console.log(videoElement)
    //       videoElement.onloadedmetadata = () => {
    //         v.duration = secToHour(videoElement.duration)
    //         console.log('durition : ', v.duration)
    //         console.log('asdasdasd : ', this.getpic(videoElement))
    //         console.log('bufferds : ', videoElement.buffered)
    //         alert('remove')
    //         videoElement.remove()
    //       }
    //     })
    //   })
    // },
  },
})
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.8s;
  max-width: 25%;
  overflow: hidden;
  white-space: nowrap;
  // transition-delay: calc(var(--count) * 75ms);
}
.expand-enter,
.expand-leave-to {
  max-width: 0%;
  opacity: 0;
}
</style>
