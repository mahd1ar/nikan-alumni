<template functional>
  <div class="container mx-auto font-bold h-36 flex-center">
    این قابلیت هنوز راه اندازی نشده
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import onLoggedOut from '~/mixins/on-logged-out'
export default Vue.extend({
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
})
</script>