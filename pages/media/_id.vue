<template>
  <section dir="rtl" class="body-font relative bg-slate-800 text-gray-900">
    <div class="container mt-10 flex flex-col gap-4">
      <div class="flex gap-2">
        <div class="w-8/12 bg-white bg-opacity-10">
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
          <h1
            class="flex h-20 items-center font-vazir text-3xl font-bold text-cyan-300"
          >
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
            v-for="i in 4"
            :key="i"
            class="cursor-pointer border-b border-slate-600 bg-white/5 text-sm"
          >
            <div class="flex flex-col gap-1 p-2 px-4">
              <div class="mt-2 text-base text-white">
                {{ video.title }}
              </div>
              <div class="textext-xs text-slate-300">
                {{ video.speakers }}
              </div>
              <div class="text-xs text-slate-300">
                {{ video.date }}
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
      <content-field :remove-tags="['video']" :html="video.content" />
      <pre>

      {{ video }}
      </pre>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import videogql from '@/apollo/queries/video.gql'
import { VideoQuery, VideoQueryVariables } from '~/types/types'

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
      },
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
      this.video.date = data.video.date || ''
      this.video.speakers = data.video.speakers?.speakers || ''
    } else this.$nuxt.error({ statusCode: 404, message: 'not found' })
  },

  mounted() {
    const div = document.createElement('div')
    div.innerHTML = this.video.content

    const htmlVideoElement = div.querySelector('video') as HTMLVideoElement

    if (htmlVideoElement) {
      this.video.src = htmlVideoElement.src
    }

    this.video.content = div.innerHTML
    div.remove()
  },
  methods: {},
})
</script>
