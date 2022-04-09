<template>
  <section dir="rtl" class="body-font relative bg-slate-800 text-gray-900">
    <div class="container mx-auto mt-10 flex flex-col gap-4 px-0">
      <div class="flex gap-2">
        <div class="w-8/12 bg-cyan-600 bg-opacity-5">
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
                ></video>
              </vue-plyr>
            </div>
          </client-only>
          <h1 class="flex h-20 items-center p-4 text-xl text-cyan-300">
            {{ video.title }}
          </h1>
        </div>

        <div class="flex w-4/12 flex-col text-cyan-50">
          <div
            class="flex h-12 items-center justify-start bg-gray-600 px-4 font-bold text-white"
          >
            از همین دسته
          </div>
          <div
            v-for="(i, index) in moreVideso"
            :key="index"
            class="cursor-pointer border-b border-slate-600 bg-[#09345a57] text-sm transition-all hover:bg-[#1d3755]"
          >
            <div class="flex flex-col gap-1 p-2 px-4">
              <div class="mt-2 text-base text-white">
                {{ i.title }}
              </div>
              <div class="textext-xs text-slate-300">
                {{ i.speakers }}
              </div>
              <div class="text-xs text-slate-400">
                {{ i.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full pt-10">
      <!-- data-poster="https://dummyimage.com/300x300" -->
    </div>

    <div>
      <!-- <content-field :remove-tags="['video']" :html="video.content" /> -->
      <pre>

      {{ video }}
      </pre>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import videogql from '@/apollo/queries/video.gql'
// TODO : compose a beter query V
import videocatsgql from '@/apollo/queries/category-videos.gql'
import {
  VideoQuery,
  VideoQueryVariables,
  CategoryVideosQuery,
} from '~/types/types'
import { filterCategory, wordpressDateToFormattedJalali } from '~/data/utils'

interface SuggestedVideos {
  title: string
  speakers: string
  date: string
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
    }

    const { data } = await this.$apollo.query<VideoQuery>({
      query: videogql,
      variables,
    })

    if (data.video) {
      this.video.id = data.video.id
      this.video.title = data.video.title || ''
      this.video.content = data.video.content || ''
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
    } else this.$nuxt.error({ statusCode: 404, message: 'not found' })
  },

  mounted() {
    this.getSimilarVideos()
    // TODO : remove this bolshit
    const div = document.createElement('div')
    div.innerHTML = this.video.content

    const htmlVideoElement = div.querySelector('video') as HTMLVideoElement

    if (htmlVideoElement) {
      this.video.src = htmlVideoElement.src
    }

    this.video.content = div.innerHTML
    div.remove()
  },
  methods: {
    async getSimilarVideos() {
      if (this.video.categorySlug === '') {
        return
      }

      const variables: VideoQueryVariables = {
        id: this.video.categorySlug,
        first: 5,
      }
      const { data } = await this.$apollo.query<CategoryVideosQuery>({
        query: videocatsgql,
        variables,
      })
      console.log(data)

      if (data.category?.videos?.nodes)
        data.category.videos.nodes.forEach((i) => {
          this.moreVideso.push({
            title: i?.title || '',
            speakers: i?.speakers?.speakers || '',
            date: wordpressDateToFormattedJalali(i!.date!).join(' / '),
          })
        })
    },
  },
})
</script>
