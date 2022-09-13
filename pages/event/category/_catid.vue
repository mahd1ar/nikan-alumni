<template>
  <div>
    <loading-indicator :showif="$fetchState.pending" dark fullscreen />

    <!-- v-show="!$fetchState.pending" -->
    <div
      dir="rtl"
      class="bg-slate-900 p-10 relative overflow-hidden flex-center"
    >
      <div class="w-1/3 absolute left-0 text-slate-700 opacity-30" v-html="icon" ></div>
      <div class="flex flex-col">
        <h1 class="text-5xl text-cyan-500 font-bold">{{ category.name }}</h1>
        <p class="mt-6 w-full md:w-2/3 text-gray-400 leading-7 mr-4">
          {{ category.desc }}
        </p>
      </div>
    </div>
    <div class="container mx-auto pt-4">
        <transition name="s-fade">
          <div
            v-if="$fetchState.pending === false"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-end"
            dir="rtl"
          >
            <div
              v-for="(ev, index) in eventList"
              :key="ev.id"
              :style="{ '--count': index }"
            >
              <div
                class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm  "
              >
              <div
              v-if="ev.imageLink"
                class="w-full h-56 relative grayscale"
              >
    
                <img class="object-cover w-full h-full"
                  :src="ev.imageLink"
                  :alt="ev.title"
                />
                <div aria-hidden="true" class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent" ></div>
              </div>
    
                <div class="p-6 relative">
                  <h5 class="text-xl font-bold"
                  :class=" ev.imageLink ? 'absolute transform -translate-y-full px-6 w-full right-0' : null"
                  >
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
                    class="inline-block pb-1 mt-4 font-medium text-cyan-600 border-b border-cyan-500"
                  >
                    ادامه مطلب
                    <span aria-hidden="true">&larr;</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

        </transition>
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
      icon : '',
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

    // @ts-ignore
    this.icon = this.$store.state.navigation.menu.find(i => i.href === '/event/category').submenu.find( i => i.href === `/event/category/${slug}`).svg

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
if(this.category.name === '' && process.client )
window.location.reload()

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
          price : e?.eventProps?.price || 0
        }

        this.eventList.push(x)
      })
    }
  },
})
</script>

<style lang="scss" scoped>
.s-fade-enter-active,
.s-fade-leave-active {
  transition: all 1.8s ease;
  transition-delay: 0.2s;
  div {
    transition: all 0.9s ease;
    overflow: hidden;
    opacity: 1;
    transform: translateY(0%);
    transition-delay: calc(var(--count) * 100ms);
  }
}
.s-fade-enter, .s-fade-leave-to /* .s-fade-leave-active below version 2.1.8 */ {
  div {
    overflow: hidden;
    transform: translateY(50px);
    opacity: 0;
  }
}
.s-fade-move {
  transition: transform 0.2s;
}
</style>