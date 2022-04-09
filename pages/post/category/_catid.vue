<template>
  <div>
    enter taiment entertaiment
    <pre>

    asdasd
        </pre
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CategoryPostsQuery } from '~/types/types'
import postgql from '@/apollo/queries/category-posts.gql'

export default Vue.extend({
  async mounted() {
    const { data } = await this.$apollo.query<CategoryPostsQuery>({
      query: postgql,
      fetchPolicy: 'network-only',
    })
    console.log(data)
  },
})
</script>