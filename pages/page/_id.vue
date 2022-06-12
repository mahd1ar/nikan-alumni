<template>
  <div class="bg-gray-100 tracking-wider tracking-normal">
    <!--Container-->
    <div v-if="$fetchState.pending === false" class="">
      <h1 class="text-4xl text-right mb-10 px-2 pt-8 lg:pt-16 mt-16 container mx-auto">
        {{ title }}
      </h1>

      <div class="w-full flex flex-wrap bg-white border-t-2 border-gray-400 border-rounded">
        <div class="w-full lg:w-full p-8 mt-6 lg:mt-0 mx-auto text-gray-900 leading-7 container">
          <content-field :html="content" />
        </div>
        <!--Back link -->
        <div class="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
          <span class="text-base text-cyan-500 font-bold flex">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>

            <nuxt-link to="/" class="text-base md:text-sm text-cyan-500 font-bold no-underline hover:underline">
              بازگشت به خانه
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
    <loading-indicator :showif="$fetchState.pending" dark fullscreen />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import pagegql from '~/apollo/queries/page.gql'
import { PageQueryVariables, PageQuery, PageIdType } from '~/types/types'

export default Vue.extend({
  data() {
    return {
      image: '',
      title: '',
      content: '',
    }
  },
  async fetch() {
    const id = this.$route.params.id

    if (!id) {
      this.$nuxt.error({ statusCode: 404 })
    }

    const variables: PageQueryVariables = {
      id: decodeURIComponent(id),
      idType: Number(id) ? PageIdType.DatabaseId : PageIdType.Id,
    }

    const { data } = await this.$apollo.query<PageQuery>({
      query: pagegql,
      variables,
    })
    console.log({ data })
    this.title = data.page?.title || ''
    this.content = data.page?.content || ''
  },
})
</script>
