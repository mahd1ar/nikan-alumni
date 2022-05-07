<template>
  <div>
    <!-- <div
      v-if="$nuxt.context.isDev"
      class="fixed top-10 left-10 z-50 opacity-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
    >
      <span class="hidden sm:block">sm</span>
      <span class="hidden md:block">md</span>
      <span class="hidden lg:block">lg</span>
      <span class="hidden xl:block">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div> -->

    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'RawLayout',
  mounted() {
    window.addEventListener('beforeinstallprompt', function (e) {
      // log the platforms provided as options in an install prompt
      alert(e.platforms) // e.g., ["web", "android", "windows"]
      e.preventDefault()
    })
  },
}
</script>
