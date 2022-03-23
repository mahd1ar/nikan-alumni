<template>
  <div class="relative bg-gray-100 h-full flex-grow">
    <!-- Start Nav -->

    <main class="container mx-w-6xl mx-auto py-4">
      <div class="text-center text-3xl mb-8 mt-2">Events</div>

      <transition-group name="v-fade">
        <div
          v-for="(e, index) in events"
          :key="e.id"
          :style="{ '--count': index }"
          class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <nuxt-link :to="{ path: '/user/events/' + e.id }">
            <img
              class="object-cover w-full h-64"
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Article"
            />

            <div class="p-6">
              <div>
                <span
                  class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"
                  >Product</span
                >
                <a
                  href="#"
                  class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
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
                    <img
                      class="object-cover h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                      alt="Avatar"
                    />
                    <a
                      href="#"
                      class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    >
                      {{ e.commentCount }}
                    </a>
                  </div>
                  <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"
                    >21 SEP 2015</span
                  >
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </transition-group>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import onLoggedOut from '@/mixins/on-logged-out'
import { Dict } from '~/data/utils/dictionary'
import { EventsQuery } from '@/types/types'
import query from '@/apollo/queries/events.gql'

interface Event {
  id: string
  title: string
  excerpt: string
  commentCount: number
}

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Events',
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  data() {
    return {
      events: [] as Event[],
    }
  },
  async fetch() {
    try {
      const { data } = await this.$apollo.query<EventsQuery>({ query })

      this.events.splice(0, this.events.length)
      console.log(data)
      if (data.events && data.events.nodes)
        data.events.nodes.forEach((e) => {
          if (e && e.id)
            this.events.push({
              id: e.id,
              title: e.title || '',
              excerpt: e.excerpt || '',
              commentCount: e.commentCount || 0,
            })
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
