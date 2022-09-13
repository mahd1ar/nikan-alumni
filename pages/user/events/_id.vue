<template>
  <div class="h-full">
    <event
      :loading="$fetchState.pending"
      :event="upcommingevent"
      :can-register="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  timeout,
  toIndiaDigits,
  wordpressDateToFormattedJalali,
  wordpressDateToJalali,
} from '~/data/utils'
import { Event, WPapi } from '@/data/GlobslTypes'
import event from '~/components/pages/event.vue'
import onLoggedOut from '~/mixins/on-logged-out'
// this page can have queryString upcomminevent?eventId=[databaseId]

export default Vue.extend({
  components: {
    event,
  },
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  data() {
    return {
      threshold: 2,
      upcommingevent: {} as Event,
    }
  },
  // computed : {
  //     eventIsReady
  // },
  async fetch() {
    if (!this.$route.params.id)
      this.$nuxt.error({
        statusCode: 400,
        message: 'event id should be provided (for now)',
      })

    try {
      const { data } = await this.$axios.get<WPapi.upcommingEvent.RootObject>(
        `https://cors.nikan-alumni.com/https://nikan-alumni.org/wp-json/myplugin/v1/upcommingevent/${this.$route.params.id}`
        )
      // const { data } = await this.$axios.get<WPapi.upcommingEvent.RootObject>(
      //   `/wp-json/myplugin/v1/upcommingevent/${this.$route.params.id}`
      //   )

      
      this.upcommingevent.id = data.ID
      this.upcommingevent.gqlid = data.gqlid
      this.upcommingevent.title = data.post_title
      this.upcommingevent.content = data.post_content

      this.upcommingevent.commentCount = data.comment_count
      this.upcommingevent.imageLink = data.featured_image || ''
      this.upcommingevent.date = wordpressDateToJalali(data.post_date)
        .map((i) => toIndiaDigits(i))
        .join(' / ')
      this.upcommingevent.faFormattedDate = wordpressDateToFormattedJalali(
        data.post_date
      )
      this.upcommingevent.wpdate = data.post_date
      this.upcommingevent.location = data.venue
      this.upcommingevent.category = data.category.length
        ? data.category[0].name
        : ''
      this.upcommingevent.duration = data.duration
        ? parseFloat(data.duration)
        : 0.0
    } catch (error) {
      if (this.threshold > 0) {
        await timeout(1500)
        this.threshold--
        this.$fetch()
      } else {
        this.$nuxt.error({ message: 'cannot get the event', statusCode: 500 })
      }
      console.error(error)
    }
  },
})
</script>