<template>
  <section dir="rtl" class="body-font relative bg-slate-800 text-gray-900">
    <div class="container relative mx-auto flex flex-col gap-4">
      <div class="flex flex-col items-start gap-2 lg:flex-row">
        <div class="w-full bg-cyan-600 bg-opacity-5 lg:w-8/12">
          <client-only>
            <div class="aspect-video">
              <vue-plyr ref="plyr" :options="playerOptions">
                <video
                  controls
                  crossorigin
                  playsinline
                  :src="video.src"
                  size="720"
                  format="video/mp4"
                  :data-poster="video.poster"
                ></video>
              </vue-plyr>
            </div>
          </client-only>
          <div class="p-4">
            <h1
              class="mt-5 flex h-20 items-center text-3xl leading-10 text-cyan-300"
            >
              {{ video.title }}
            </h1>
            <p class="text-lg text-white">
              {{ video.speakers }}
            </p>
          </div>
        </div>

        <div class="flex w-full mt-4 flex-col text-cyan-50 lg:w-4/12">
          <div
            class="flex h-12 items-center justify-start bg-gray-600 px-4 font-bold text-white"
          >
            مطلب پیشنهادی
          </div>
          <div
            v-for="(i, index) in moreVideso"
            :key="index"
            class="cursor-pointer border-b border-slate-600 bg-[#09345a57] text-sm transition-all hover:bg-[#1d3755]"
          >
            <nuxt-link
              :to="'/video/' + encodeURIComponent(i.id)"
              class="flex flex-col gap-1 p-2 px-4"
            >
              <div class="mt-2 text-base text-white">
                {{ i.title }}
              </div>
              <div class="textext-xs text-slate-300">
                {{ i.speakers }}
              </div>
              <div class="text-xs text-slate-400">
                {{ i.date }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import videogql from '@/apollo/queries/video.gql'
// TODO : compose a beter query V
// import allvideos from '@/apollo/queries/videos-all.gql'
import {
  VideoQuery,
  VideoQueryVariables,
  // VideosAllQueryVariables,
  // VideosAllQuery,
  VideoIdType,
} from '~/types/types'
import { filterCategory, wordpressDateToFormattedJalali } from '~/data/utils'
import { WPapi } from '~/data/GlobslTypes'

interface SuggestedVideos {
  title: string
  speakers: string
  date: string
  id: string
}

export default Vue.extend({
  name: 'MediaPlayer',
  data() {
    return {
      video: {
        id: '',
        src: '',
        poster: '', // IMPLEMENT THIS LATER
        title: '',
        date: '',
        content: '',
        speakers: '',
        categoryName: '',
        categorySlug: '',
      },
      moreVideosMaxLen: 6,
      moreVideso: [] as SuggestedVideos[],
      playerOptions: {
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'pip',
          'airplay',
          'fullscreen',
        ],
      },
    }
  },
  async fetch() {
    
    const videoId = this.$route.params.id
    if (!videoId) {
      this.$nuxt.error({ statusCode: 404, message: 'err.message' })
    }
    const variables: VideoQueryVariables = {
      id: decodeURIComponent(videoId),
      idType: Number(videoId) ? VideoIdType.DatabaseId : VideoIdType.Id,
    }

    const { data } = await this.$apollo.query<VideoQuery>({
      query: videogql,
      variables,
    })

    if (data.video) {
      this.video.id = data.video.id
      this.video.title = data.video.title || ''
      this.video.content = data.video.content || ''
      this.video.poster = data.video.featuredImage?.node?.sourceUrl || ''
      this.video.date = data.video.date
        ? wordpressDateToFormattedJalali(data.video.date).join(' / ')
        : ''
      this.video.speakers = data.video.speakers?.speakers || ''

      if (data.video.categories?.nodes) {
        if (data.video.categories.nodes.length > 0) {
          const categories = data.video.categories.nodes.map((i) =>
            i?.slug ? i.slug : i?.name ? i.name : ''
          )
          const cats = filterCategory(categories)
          this.video.categorySlug = cats[0]
          // TODO mayby you need category bane later
          this.video.categoryName = cats[0]
        }
      }
      if (data.video.content) {
        const reg = /https?:\/\/.*\.mp4/
        const res = reg.exec(data.video.content)

        if (res === null) return

        this.video.src = res[0]
        console.log(this.video.src)
        this.video.content.replace(/<figure .*figure>/g, '')
      }
    } else this.$nuxt.error({ statusCode: 404, message: 'not found' })

  },

  mounted(): void {
    this.getSimilarVideos()
    // TODO : remove this bolshit
    // const div = document.createElement('div')
    // div.innerHTML = this.video.content
    // const htmlVideoElement = div.querySelector('video') as HTMLVideoElement
    // if (htmlVideoElement) {
    //   this.video.src = htmlVideoElement.src
    // }
    // this.video.content = div.innerHTML
    // div.remove()
  },
  methods: {
    async getSimilarVideos() {
      console.log('getsimilar videos')

      const { data } = await this.$axios.get<WPapi.allvideos.RootObject[]>(
        '/wp-json/wp/v2/video?per_page=100'
      )

      // const variables: VideosAllQueryVariables = {
      //   first: 100,
      // }
      // const { data } = await this.$apollo.query<VideosAllQuery>({
      //   query: allvideos,
      //   variables,
      // })
      this.moreVideso.splice(0, this.moreVideso.length)

      data
        .sort(() => Math.random() - Math.random())
        .forEach((i, index) => {
          if (index > this.moreVideosMaxLen) return

          this.moreVideso.push({
            id: i.id.toString(),
            title: i.title.rendered || '',
            speakers: i.acf.speakers || '',
            date: wordpressDateToFormattedJalali(i.date).join(' / '),
          })
        })
    },
  },
})
</script>
