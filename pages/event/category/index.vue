<template>
  <div>
    <loading-indicator :showif="$fetchState.pending" dark fullscreen />

    <!-- v-show="!$fetchState.pending" -->
    <div class="container mx-auto">
      <div class="flex-center flex-col gap-3 mt-4 mb-8">
        <svg
          id="icons"
          width="70px"
          height="70px"
          viewBox="0 0 340 340"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path
            d="M66.887,280.97l-1.981-5.788L59.118,273.2c-4.593-1.571-10.088-.081-13.955,3.786L12.247,309.9c-5.72,5.719-6.341,14.371-1.387,19.325s13.605,4.332,19.325-1.387L63.1,294.925C66.968,291.058,68.459,285.564,66.887,280.97Z"
            style="fill: #e28966"
          />
          <path
            d="M173.5,166.591l-4.92-4.919L54.391,275.858a6.958,6.958,0,1,0,9.84,9.839L178.417,171.511Z"
            style="fill: #ffc49c"
          />
          <polygon
            points="125.775 224.153 178.417 171.511 173.497 166.591 168.577 161.672 122.11 208.139 125.775 224.153"
            style="fill: #e28966"
          />
          <path
            d="M269.682,70.406C172.544,28.521,55.893,12.573,55.893,12.573c20.468,51.953,60.843,105.5,86.316,136.321a366.3,366.3,0,0,0,48.985,48.986c30.819,25.472,84.369,65.847,136.321,86.315C327.515,284.2,311.567,167.544,269.682,70.406Z"
            style="fill: #ffb6d4"
          />
          <path
            d="M168.846,151.477a228.617,228.617,0,0,1-20.463-47.527,3.934,3.934,0,0,0-2.152-2.475,11.291,11.291,0,0,1-4.364-3.077,24.5,24.5,0,0,0,2.688.672c.13.027.255.049.383.074.494.093.938.166,1.3.221.162.024.327.052.485.072.226.032.361.049.361.049l.018.024-.01-.036c6.807.777,9.993-1.674,11.044-2.775a.545.545,0,0,0-.121-.836c-5.288-3.2-9.528-3.851-12.762-3.42A229.731,229.731,0,0,1,138.637,28.6Q133.2,27.318,128,26.152c-2,25.184,1.184,62.279,2.345,74.354a4.9,4.9,0,0,1-2.567,4.893,4.753,4.753,0,0,1-5.84-1.3C98.3,74.7,87.408,32.357,84.1,17.221c-17.543-3.188-28.209-4.648-28.209-4.648,20.468,51.953,60.843,105.5,86.316,136.321q11.646,14.091,24.645,26.937a16.275,16.275,0,0,0,5.1-11.482A23.216,23.216,0,0,0,168.846,151.477Z"
            style="fill: #f464a6"
          />
          <path
            d="M211.6,137.891c-.981-.9-3.752-5.376-2.145-7.855,2.326-3.589,5.5-2.827,6.566-2.031,24.616,18.36,60.905,23.916,82.952,25.567q-2.569-8.892-5.4-17.959c-28.841-1.2-69.526-9.022-95.116-40.269a10.663,10.663,0,0,0-9.854-.55,10.424,10.424,0,0,0-5.522,11.028c2.725,17.808,20.077,78.186,130.5,104.681-1.9-8.392-4.012-17.253-6.344-26.445C258.759,177.814,223.008,148.4,211.6,137.891Z"
            style="fill: #f464a6"
          />
          <path
            d="M332.44,290.1l-.963-6.459c-15.447-111.225-58.1-214.773-58.1-214.773a3.594,3.594,0,0,0-2-2.088c-78-36.552-213.511-57.951-214.9-58.167L48.81,7.473a4,4,0,1,0-1.179,7.912l7.646,1.14c1.119.174,93.816,14.818,169.315,40.4-36.476-6.194-92.7-13.013-161.937-12.587a4,4,0,0,0,.024,8H62.7c76.687-.47,137.16,8,172.219,14.546C203.866,68.256,152.871,72.5,85,84.836a4,4,0,1,0,1.431,7.871c71.161-12.938,123.518-16.908,153.6-18.034-24.327,7.895-65.374,22.927-128.3,50.878a4,4,0,0,0,3.248,7.311C179.4,104.244,221.057,89.2,244.873,81.575c-22.8,15.11-61.151,41.7-107.713,78.583a4,4,0,1,0,4.968,6.271c51.934-41.141,93.546-69.372,114.605-83.073-13.7,21.059-41.933,62.671-83.074,114.605a4,4,0,0,0,6.271,4.968c36.9-46.587,63.5-84.95,78.605-107.746-7.61,23.775-22.641,65.389-51.309,129.929a4,4,0,1,0,7.311,3.248c27.951-62.925,42.983-103.972,50.878-128.3-1.125,30.081-5.1,82.438-18.033,153.6a4,4,0,1,0,7.871,1.43C267.6,187.2,271.836,136.2,273.209,105.144c6.548,35.039,15.013,95.508,14.544,172.24a4,4,0,0,0,3.975,4.025h.026a4,4,0,0,0,4-3.976A949.817,949.817,0,0,0,284.288,122.29c13.357,40.193,30.585,99.958,39.271,162.5l.969,6.5a4,4,0,0,0,7.912-1.179Z"
            style="fill: #b2347c"
          />
          <path
            d="M241.53,218.907c-2.468-1.431-9.207-6.406-6.486-16.9a.8.8,0,0,1,1.132-.509c2.615,1.293,9.951,6,6.519,16.964A.8.8,0,0,1,241.53,218.907Z"
            style="fill: #f464a6"
          />
          <path
            d="M151.835,65.78c1.148-1.737,5.745-6.692,19.716-3.94a.544.544,0,0,1,.362.817c-1.407,2.208-6.913,8.874-19.81,3.924A.544.544,0,0,1,151.835,65.78Z"
            style="fill: #f464a6"
          />
          <path
            d="M267.957,245.031c-.586-3.507-1.161-13.926,11.079-19.649a1,1,0,0,1,1.387.683c.836,3.536,2.139,14.319-11.11,19.728A1,1,0,0,1,267.957,245.031Z"
            style="fill: #f464a6"
          />
          <path
            d="M186.631,148.5c1.638,1.285,6.2,6.269,2.328,19.971a.546.546,0,0,1-.845.294c-2.086-1.582-8.283-7.611-2.3-20.064A.544.544,0,0,1,186.631,148.5Z"
            style="fill: #f464a6"
          />
          <path
            d="M95.407,29.408c1.787-.363,7.571-.613,12.916,9.317a.518.518,0,0,1-.374.7c-2.245.491-9.674,1.23-12.954-9.383A.532.532,0,0,1,95.407,29.408Z"
            style="fill: #f464a6"
          />
          <path
            d="M247.487,159.343c.318-2.219,1.964-8.59,10.412-9.688a.629.629,0,0,1,.7.675c-.173,2.284-1.451,9.013-10.446,9.73A.63.63,0,0,1,247.487,159.343Z"
            style="fill: #f464a6"
          />
        </svg>
        <h2 class="text-3xl font-bold tracking-wider">رویداد ها</h2>
      </div>
      <transition name="s-fade">
        <div
          v-if="$fetchState.pending === false"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          dir="rtl"
        >
          <div
            v-for="(ev, index) in eventList"
            :key="ev.id"
            :style="{ '--count': index * 1 }"
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
                <div class="mt-4 text-xs text-gray-600 flex flex-nowrap gap-2">
                  <div
                    class="whitespace-nowrap"
                    v-for="c in ev.category"
                    :key="c.id"
                  >
                    {{ c.name }} .
                  </div>
                </div>
                <nuxt-link
                  :to="'/event/' + ev.gqlid"
                  class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500"
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
import eventgql from '~/apollo/queries/events.gql'
import { Event } from '~/data/GlobslTypes'
import { wordpressDateToFormattedJalali } from '~/data/utils'
import { EventsQueryVariables, EventsQuery } from '~/types/types'
export default Vue.extend({
  data() {
    return {
      eventList: [] as Event[],
      isLoaded: false,
    }
  },
  async fetch() {
    const variables: EventsQueryVariables = {
      first: 20,
    }
    const { data } = await this.$apollo.query<EventsQuery>({
      query: eventgql,
      variables,
    })

    if (data.events?.nodes) {
      this.eventList.splice(0, this.eventList.length)
      this.eventList = data.events.nodes.map((e) => {
        return {
          id: +e!.databaseId,
          gqlid: e!.id,
          title: e?.title || '',
          content: e?.content || '',
          imageLink: e?.featuredImage?.node?.sourceUrl || '',
          date: '',
          faFormattedDate: wordpressDateToFormattedJalali(e!.date!).reverse(),
          commentCount: '0', // TODO: <- change this later
          wpdate: e?.date || '',
          category: e?.categories?.edges
            ? e.categories.edges.map((i) => ({
                name: i?.node?.name || '',
                id: i?.node?.id || '',
              }))
            : [],
          eventStatus: 1,
          duration: e?.eventProps?.duration || 0,
          location: e?.eventProps?.venue || '',
          price: e?.eventProps?.price || 0,
        }
      })
    }
  },
  methods: {
    startAnimating() {
      if (this.$fetchState.error) return

      this.isLoaded = true
    },
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
    max-height: 100%;
    background: #fff;
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
    max-height: 0%;
  }
}
.s-fade-move {
  transition: transform 0.2s;
}
</style>

