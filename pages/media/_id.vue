<template>
  <section class="text-gray-600 body-font relative container">
    <div class="w-full mt-10">
      <client-only>
        <div class="aspect-video">
          <vue-plyr ref="plyr" :options="playerOptions">
            <!-- data-poster="https://dummyimage.com/300x300" -->
            <video
              controls
              crossorigin
              playsinline
              :src="video.src"
              size="720"
              format="video/mp4"
            >
              <!-- <source   /> -->
            </video>
          </vue-plyr>
        </div>
      </client-only>
    </div>

    <div>
      <div class="content"></div>
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
        contents: '',
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
      this.video.contents = data.video.content || ''
      this.video.date = data.video.date || ''
    } else this.$nuxt.error({ statusCode: 404, message: 'not found' })
  },

  mounted() {
    const div = document.createElement('div')
    div.innerHTML = this.video.contents
    const htmlVideoElement = div.querySelector('video')
    if (htmlVideoElement) {
      this.video.src = htmlVideoElement.src
    }
    div.remove()
  },
  methods: {},
})
</script>


<style>
</style>