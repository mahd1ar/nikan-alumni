<template>
  <div dir="rtl">
    <section class="text-gray-600 body-font mt-10">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="text-2xl font-medium title-font mb-2 text-gray-900">
              آرشیو ویدئوی کانون دانش آموختگان
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            ساعت ها محتوای آموزشی مناسب برای خانواده و... quinoa yuccie synth
            meditation iPhone intelligentsia prism tofu. Viral gochujang bitters
            dreamcatcher.
          </p>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            class="flex flex-col w-full"
            v-for="item in items"
            :key="item.categoryId"
          >
            <h1 class="mt-8 mb-4 text-2xl font-bold px-4">
              {{ item.category }}
            </h1>

            <div class="flex flex-wrap">
              <div
                v-for="(v, index) in item.videos"
                :key="index"
                class="lg:w-4/12 md:w-1/2 p-4 w-full"
              >
                <nuxt-link
                  :to="v.href"
                  class="block relative h-48 rounded overflow-hidden"
                  :data-id="v.dataId"
                >
                  <!-- <canvas
                      alt=""
                      class="object-cover object-center w-full h-full block"
                      width="420"
                      height="260"
                    ></canvas> -->
                  <video v-if="v.src" class="object-none" :src="v.src"></video>

                  <transition name="expand">
                    <div
                      class="absolute p-1 text-yellow-100 bg-gray-800 bottom-3 right-3 text-xs rounded"
                      v-if="v.duration"
                    >
                      {{ v.duration }}
                    </div>
                  </transition>
                </nuxt-link>
                <div class="mt-4">
                  <h3
                    class="text-gray-500 text-xs tracking-widest title-font mb-1"
                  >
                    {{ item.category }}
                    .
                    {{ v.date }}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {{ v.title }}
                  </h2>
                  <p class="">{{ v.speakers }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mediaquery from '@/apollo/queries/videos.gql'
import { VideosQuery, VideosQueryVariables } from '~/types/types'
// eslint-disable-next-line camelcase
import { gregorian_to_jalali, timeout, toIndiaDigits } from '~/data/utils'

function checkStatus(url: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('HEAD', url, true)

    request.onreadystatechange = () => {
      if (request.readyState >= 2) {
        console.log(request.getAllResponseHeaders())
        resolve(request.getResponseHeader('content-length'))
        request.abort()
      } else resolve(null)
    }

    request.onerror = (e) => {
      reject(e)
    }

    request.send()
  })
}

interface Video {
  href: any
  title: string
  speakers: string
  duration: string
  date: string
  poster?: string
  dataId: string
  _content?: string
  src?: string
}

const secToHour = (secs: number) => {
  secs = ~~secs
  const h = ~~(secs / 3600)
  const m = ~~((secs - h * 3600) / 60)
  const s = ~~(secs - h * 3600 - m * 60)

  return (
    (h / 10).toFixed(1).replace('.', '') +
    ' : ' +
    (m / 10).toFixed(1).replace('.', '') +
    ' : ' +
    (s / 10).toFixed(1).replace('.', '')
  )
}

interface VideoList {
  videos: Video[]
  category: string
  categoryId: string
}

export default Vue.extend({
  data() {
    return {
      items: [] as VideoList[],
    }
  },
  async fetch() {
    const variables: VideosQueryVariables = {
      first: 8,
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

            v.title = vid.title || ''

            v.href = vid.id ? '/media/' + encodeURIComponent(vid.id) : '#'

            v.speakers = vid.speakers?.speakers || ''
            v.dataId = ~~(Math.random() * 1000) + ''

            // FIX NEXT LINE LATER
            // TODO : id should be used in url
            v.poster = vid.featuredImageId || undefined

            if (vid.content) {
              // @ts-ignore
              let src = vid.content.match(/<video.*src="(.+)"/)[1]
              src = /\.(.+)?#t=/.test(src) ? src : src + '#t=200'

              v.src = src
            }
            v.duration = ''
            vl.videos.push(v)
          })
          this.items.push(vl)
        }
      })
    }
  },

  watch: {
    items() {
      this.getVideoMeta()
    },
  },
  methods: {
    async getVideoMeta() {
      await timeout(2000)

      this.items.forEach((i) => {
        i.videos.forEach((v) => {
          if (!v.src) return

          const videoElement = document.querySelector(
            `[data-id="${v.dataId}"] video`
          ) as HTMLVideoElement

          if (!videoElement) return

          if (videoElement.duration) {
            v.duration = secToHour(videoElement.duration)
            return
          }

          console.log(videoElement)
          videoElement.onloadedmetadata = () => {
            v.duration = secToHour(videoElement.duration)
          }
        })
      })
    },
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