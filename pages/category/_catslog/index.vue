<template>
  <section class="body-font text-gray-600">
    <div
      class="relative flex flex-col justify-center bg-gray-600"
      :class="category.imageLink ? 'h-60' : 'h-20'"
    >
      <div v-if="category.imageLink" class="absolute inset-0">
        <!-- // TODO : maybe add alt?? -->
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="category.imageLink"
        />
        <div
          class="absolute inset-0 h-full w-full bg-gradient-to-tr from-cyan-800 to-slate-600 object-cover opacity-50"
        ></div>
      </div>

      <div dir="rtl" class="container relative mx-auto">
        <h2 class="text-2xl font-bold text-white">
          {{ category.title }}
        </h2>
      </div>
    </div>
    <loading-indicator :showif="$fetchState.pending" dark fullscreen />
    <div class="container mx-auto px-5 py-24">
      <div class="-m-4 flex flex-row-reverse flex-wrap">
        <div v-for="post in posts" :key="post.id" class="p-4 lg:w-1/3">
          <card-template
            :title="post.title"
            :content="post.content"
            :date="post.faFormattedDate.join(' ')"
            :categories="[category.title]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CardTemplate from '~/components/cards/CardTemplate.vue'
import gqlCatPosts from '@/apollo/queries/category-posts.gql'
import { CategoryPostsQuery, CategoryPostsQueryVariables } from '~/types/types'

import { PostScheme, CategoryScheme } from '@/data/GlobslTypes'
import { wordpressDateToFormattedJalali } from '~/data/utils'
import LoadingIndicator from '~/components/LoadingIndicator.vue'

export default Vue.extend({
  components: {
    CardTemplate,
    LoadingIndicator
},
  data() {
    const category: CategoryScheme = {
      id: '0',
      databaseId: 0,
      title: '',
      imageLink: '',
      description: '',
      children: [],
      totalCount: 0,
    }
    const posts: PostScheme[] = []

    return {
      posts,
      category,
    }
  },

  async fetch() {
    const variables: CategoryPostsQueryVariables = {
      first: 20,
      id: decodeURIComponent(this.$route.params.catslog),
    }

    const { data } = await this.$apollo.query<CategoryPostsQuery>({
      query: gqlCatPosts,
      variables,
    })

    const category = decodeURIComponent(this.$route.params.catslog)

    this.category.id = data.category!.id!
    this.category.databaseId = data.category!.databaseId!
    this.category.title = data.category!.name || ''
    this.category.totalCount = data.category!.count || 0
    this.category.imageLink =
      data.category?.categoryAttrs?.categoryAttrs?.sourceUrl || null
    this.category.description = data.category?.description || ''
    const chs =
      data.category?.children?.nodes?.map((i) => ({
        slug: i!.slug!,
        title: i!.name!,
      })) || []
    chs.forEach((c) => this.category.children.push(c))

    if (data.category?.posts?.edges)
      data.category.posts.edges.forEach((p) => {
        const post: PostScheme = {
          id: p!.node!.databaseId,
          gqlid: p!.node!.id,
          title: p?.node?.title || '',
          commentCount: '0',
          wpdate: p!.node!.date!,
          imageLink: null,
          date: '',
          category,
          content: p?.node?.content || '',
          faFormattedDate: wordpressDateToFormattedJalali(
            p!.node!.date!
          ).reverse(),
        }

        this.posts.push(post)
      })
  },
})
</script>
