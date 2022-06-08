<template>
  <div>
    <loading-indicator :showif="$fetchState.pending" dark fullscreen />

    <!-- v-show="!$fetchState.pending" -->
    <div
      dir="rtl"
      class="bg-slate-900 p-10 relative overflow-hidden flex-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        class="w-1/3 absolute left-0 text-slate-700 opacity-30"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m21.88 2.15l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a8.65 8.65 0 0 0 1.47 6.6c-.06.21-.12.42-.17.63A22.6 22.6 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41zm-7.27 13.93c-2.61 1.11-5.73.92-7.48-.45a13.79 13.79 0 0 1 1.21-2.84A10.17 10.17 0 0 1 9.73 11a9 9 0 0 1 1.81-1.42A12 12 0 0 1 16 8V7a11.43 11.43 0 0 0-5.26 1.08a10.28 10.28 0 0 0-4.12 3.65a15.07 15.07 0 0 0-1 1.87a7 7 0 0 1-.38-3.73a5.24 5.24 0 0 1 3.14-4a8.93 8.93 0 0 1 3.82-.84c.62 0 1.23.06 1.87.11a16.2 16.2 0 0 0 6-.35C20 7.55 19.5 14 14.61 16.08z"
        />
      </svg>
      <div class="flex flex-col">
        <h1 class="text-5xl text-cyan-500 font-bold">{{ category.name }}</h1>
        <p class="mt-6 w-full md:w-2/3 text-gray-400 leading-7 mr-4">
          {{ category.desc }}
        </p>
      </div>
    </div>
    <div class="container mx-auto">
      <transition-group
        name="v-fade"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        dir="rtl"
      >
        <div
          v-for="(ev, index) in eventList"
          :key="ev.id"
          :style="{ '--count': index * 10 }"
        >
          <div
            class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
          >
            <img
              v-if="ev.imagelink"
              class="object-cover w-full h-56"
              :src="ev.imagelink"
              alt=""
            />

            <div class="p-6">
              <h5 class="text-xl font-bold">
                {{ ev.title }}
              </h5>

              <content-field
                class="mt-2 text-gray-500"
                style="max-height: 80px; overflow: hidden"
                :is-excerpt="true"
                :html="ev.content"
              />

              <nuxt-link
                :to="'/event/' + ev.gqlid"
                class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500"
              >
                ادامه مطلب
                <span aria-hidden="true">&rarr;</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import eventgql from '~/apollo/queries/category-events.gql'
import { Event } from '~/data/GlobslTypes'
import { wordpressDateToFormattedJalali } from '~/data/utils'
import {
  CategoryEventsQuery,
  CategoryEventsQueryVariables,
} from '~/types/types'
export default Vue.extend({
  data() {
    return {
      category: {
        name: '',
        desc: '', // TODO <-
      },
      eventList: [] as Event[],
    }
  },
  async fetch() {
    const { catid: slug } = this.$route.params

    if (!slug) throw new Error('category  not providede')

    const variables: CategoryEventsQueryVariables = {
      first: 20,
      slug,
    }
    const { data } = await this.$apollo.query<CategoryEventsQuery>({
      query: eventgql,
      variables,
    })
    this.category.name = data.category?.name || ''
    this.category.desc = data.category?.description || ''

    if (data.category?.events?.nodes) {
      this.eventList.splice(0, this.eventList.length)
      data.category.events.nodes.forEach((e) => {
        const x: Event = {
          id: +e!.databaseId,
          gqlid: e!.id,
          title: e?.title || '',
          content: e?.content || '',
          imageLink: e?.featuredImage?.node?.sourceUrl || '',
          date: '',
          faFormattedDate: wordpressDateToFormattedJalali(e!.date!).reverse(),
          commentCount: '0', // TODO: <- change this later
          wpdate: e?.date || '',
          category: '',
          eventStatus: 1,
          duration: e?.eventProps?.duration || 0,
          location: e?.eventProps?.venue || '',
        }

        this.eventList.push(x)
      })
    }
  },
})
</script>