<template>
  <div>
    <div v-if="open">
      <div class="bg-black text-white p-5">kmsofmosimfo</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    open: Boolean,
  },
})
</script>
