<template>
  <div v-show="error">
    <div v-if="error" class="w-full bg-red-50 p-5 text-red-500">
      <h2 class="p-2 text-xl">در این صفحه خطایی رخ داده</h2>
      <details>
        <summary>Read more</summary>
        <pre v-if="error" dir="ltr">
              {{ error }}
            </pre
        >
      </details>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['error'],
})
</script>
