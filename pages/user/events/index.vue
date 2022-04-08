<template>
  <div class="relative h-full flex-grow bg-gray-100">
    <!-- Start Nav -->

    <main class="mx-w-6xl container mx-auto py-4">
      <div class="mb-8 mt-2 text-center text-3xl">upcomming Events</div>

      <client-only>
        <transition-group tag="div" name="v-fade">
          <div
            v-for="(e, index) in events"
            :key="e.id"
            :style="{ '--count': index }"
            class="relative mx-auto mb-10 max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
          >
            <nuxt-link
              class=""
              :to="{ path: '/user/events/' + encodeURIComponent(e.id) }"
            >
              <img
                v-if="e.imageLink"
                class="h-64 w-full object-cover"
                :src="e.imageLink"
              />

              <div class="absolute left-5 top-5">
                <count-down :duration="2" :starting-from="e.wpdate">
                  <!-- v-slot="{ time }"
                  <pre>{{ time }}</pre> -->
                </count-down>
              </div>

              <div class="p-6">
                <div>
                  <div
                    dir="rtl"
                    class="flex gap-2 text-xs font-medium text-blue-600 dark:text-blue-400"
                  >
                    <b> {{ e.category }} </b>
                    <b> . </b>
                    <span>
                      {{ e.date }}
                    </span>
                  </div>
                  <a
                    href="#"
                    class="mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline dark:text-white"
                  >
                    {{ e.title }}</a
                  >
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {{ e.excerpt }}
                  </p>
                </div>

                <div class="mt-4">
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <a
                        href="#"
                        class="mx-2 text-xs text-gray-700 dark:text-gray-200"
                      >
                        تا به حال

                        {{ e.commentCount }}
                        نفر در این رویداد شرکت کرده اند
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </transition-group>
      </client-only>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import onLoggedOut from '@/mixins/on-logged-out'
import { Dict } from '~/data/utils/dictionary'
import { wordpressDateToJalali } from '~/data/utils'
import { WpUpcommingEvents } from '@/data/AxiosTypes'

interface Event {
  id: number | string
  title: string
  commentCount: string
  imageLink: string | null
  date: string
  wpdate: string
  category: string
}

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Events',
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  data() {
    return {
      cutdown: [] as [number, number, number][],
      events: [] as Event[],
    }
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get<WpUpcommingEvents[]>(
        'https://nikan-alumni.org/wp-json/myplugin/v1/upcommingevent'
      )

      console.log(data)
      this.events.splice(0, this.events.length)

      data.forEach((wpEvent) => {
        const e: Event = {
          id: wpEvent.ID,
          title: wpEvent.post_title,
          commentCount: wpEvent.comment_count,
          imageLink: wpEvent.featured_image,
          wpdate: wpEvent.post_date,
          date: wordpressDateToJalali(wpEvent.post_date).join(' / '),
          category: wpEvent.category.length ? wpEvent.category[0].name : '',
        }

        this.events.push(e)
      })
    } catch (error) {
      this.$about.error({ title: Dict.fetch_err, body: String(error) })
      console.error(error)
    }
  },

  mounted() {
    // @ts-ignore
    window.events = this
  },

  methods: {},
})
</script>
