<template>
  <h1>welcome to profile</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UserDashboard',
  middleware: ['authentication'],
})
</script>
