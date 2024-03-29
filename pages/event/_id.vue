<template>
  <div>
    <event-page
      v-if="!$fetchState.error"
      :event="event"
      :can-register="isLoggedIn && event.eventStatus === -1"
      :loading="$fetchState.pending"
    />

    <error-card class="md:sw-7/12 w-full" :error="$fetchState.error" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { MetaInfo } from 'vue-meta'
import { EventQueryVariables, EventQuery } from '@/types/types'
import eventgql from '@/apollo/queries/event.gql'
import { Event, EventStatus } from '@/data/GlobslTypes'
import {
htmlStrip,
  toIndiaDigits,
  wordpressDateToFormattedJalali,
  wordpressDateToJalali,
} from '~/data/utils'
import eventPage from '@/components/pages/event.vue'

export default Vue.extend({
  components: {
    eventPage,
  },
  data() {
    return {
      event: {} as Event,
    }
  },
  async fetch() {
    const variables: EventQueryVariables = {
      id: decodeURIComponent(this.$route.params.id),
    }
    const { data } = await this.$apollo.query<EventQuery>({
      query: eventgql,
      variables,
      fetchPolicy: 'network-only',
    })
    const event = {} as Event
    if (data.event) {
      event.id = data.event.databaseId
      event.gqlid = data.event!.id
      event.title = data.event?.title || ''
      event.imageLink = data.event?.featuredImage?.node?.sourceUrl || ''
      event.location = data.event?.eventProps?.venue || ''
      event.duration = data.event.eventProps?.duration || 0
      event.wpdate = data.event.date!
      event.date = wordpressDateToJalali(data.event!.date!)
        .map((i) => toIndiaDigits(i))
        .join('/')
      event.faFormattedDate = wordpressDateToFormattedJalali(data.event.date!)

      event.imageLink = data.event?.featuredImage?.node?.sourceUrl || ''
      event.commentCount = data.event?.commentCount
        ? toIndiaDigits(data.event.commentCount)
        : toIndiaDigits(0)

      event.category = data.event.categories?.edges || []

      event.content = data.event.content || ''
      event.price = data.event.eventProps?.price || 0

      const startingFrom = ~~(new Date(event.wpdate).getTime() / 1000)
      const now = ~~(Date.now() / 1000)
      const duration = event.duration * 24 * 3600
      let status: EventStatus

      if (startingFrom > now) {
        status = EventStatus.ahead
      } else if (startingFrom + duration > now) {
        status = EventStatus.current
      } else {
        status = EventStatus.passed
      }

      event.eventStatus = status
   
      this.event = event
    } else throw new Error('cannot get contents from url')
  },
  head(): MetaInfo {
    const data = {
      title: this.event.title + ' | ' + 'کانون دانش آموختگان نیکان',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: htmlStrip(this.event.content || "" ).replace(/[\n\t\s]/g,' ').substring(0,60) + "...",
        },
      ],
    }
        const image = {
            property : "og:image" ,
            content : this.event.imageLink 
        }

        if(this.event.imageLink)
        // @ts-ignore
        data.meta.push(image)
    return data
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
    }),
  },
})
</script>
