<template>
  <div>asd</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dict } from '~/data/utils/dictionary'
export default Vue.extend({
  // async fetch() {
  //   const slog = this.$route.params.catslog
  //   if (slog === 'post') {
  //   } else if (slog === 'video') {
  //   } else if (slog === 'event') {
  //   } else {
  //     this.$nuxt.error({ statusCode: 404, message: Dict.P404 })
  //   }
  // },
  mounted() {
    console.log(this.$route)
  },
})
</script>
