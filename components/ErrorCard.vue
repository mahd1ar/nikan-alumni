<template >
  <div v-show="error" class="text-red-500 bg-red-50 p-5 w-full">
    <h2 class="text-xl p-2">در این صفحه خطایی رخ داده</h2>
    <details>
      <summary>Read more</summary>
      <pre v-if="error" dir="ltr">
              <h1> -ERROR- </h1>
              {{ error }}
            </pre>
    </details>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['error'],
})
</script>