<template>
  <div dir="rtl">
    <div class="container mx-auto">
       <loading-indicator :showif="$fetchState.pending" dark fullscreen />
       <div v-if="fimage" class="h-60 mt-10" >
         <img :src="fimage" :alt="falttext" class="h-full w-full object-contain object-right rounded" >
       </div>
      <h1 class="text-right text-4xl mt-10">{{ title }}</h1>
      <div class="mt-5 pb-3 border-b-2 flex items-center justify-between px-4">
        <div>
          <nuxt-link
            v-for="(cat, index) in categories"
            :key="index"
            class="text-blue-600 bg-blue-50 text-sm mx-1 rounded-full px-2 py-1"
            :to="cat.link"
            :prefetch="false"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
        <div class="text-right text-gray-500">
          {{ date[2] }} . {{ date[1] }} .
          {{ date[0] }}
        </div>
      </div>

      <div class="mt-5">
        <content-field :include-gallery="false" :html="content" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import postgql from '~/apollo/queries/post.gql'
import { htmlStrip, wordpressDateToFormattedJalali } from '~/data/utils'
import { PostQuery, PostQueryVariables, PostIdType } from '~/types/types'

export default Vue.extend({
  data() {
    return {
      title: '',
      content: '',
      fimage : '',
      falttext : '',
      date: [] as string[],
      categories: [] as { name: string; link: string }[],
    }
  },
  async fetch() {
    const id = this.$route.params.id

    if (!id) {
      this.$nuxt.error({ statusCode: 404 })
    }

    const variables: PostQueryVariables = {
      id: decodeURIComponent(id),
      idType: Number(id) ? PostIdType.DatabaseId : PostIdType.Id,
    }

    
    const { data } = await this.$apollo.query<PostQuery>({
      query: postgql,
      variables,
    })

    if (data.post) {
      this.title = data.post.title || '';
      this.content = data.post.content || '';
      this.date = data.post.date ? wordpressDateToFormattedJalali(data.post.date) : [];

      this.fimage = data.post.featuredImage?.node?.sourceUrl || '';
      this.falttext = data.post.featuredImage?.node?.altText || '';
        
      this.categories = data.post.categories?.nodes?.map((i) => ({
          name: i?.name || '',
          link: i?.slug ? '/post/category/' + i.slug : '',
        })) || []

    } else this.$nuxt.error({ statusCode: 404 })
  },
  head(): MetaInfo {
    const data = {
      title: this.title + ' | ' + 'کانون دانش آموختگان نیکان',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: htmlStrip(this.content).replace(/[\n\t\s]/g,' ').substring(0,60) + "...",
        },
      ],
    }
        const image = {
            property : "og:image" ,
            content : this.fimage 
        }

        if(this.fimage)
        // @ts-ignore
        data.meta.push(image)
    return data
  },
})
</script>
