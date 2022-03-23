<template>
  <div class="content">
    <div v-html="html"></div>

    <div
      v-if="imgs.length > 0"
      class="fixed h-full top-0 left-0 w-full snap py-10"
    >
      <div v-for="img in imgs" :key="img.id" class="snap-center">
        <img :src="img.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Images {
  id: number
  src: string
}
export default Vue.extend({
  name: 'ContentField',
  props: {
    html: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedImage: -1,
      imgs: [] as Images[],
    }
  },
  mounted() {
    const div = document.createElement('div')
    div.innerHTML = this.html
    console.log(div)
  },
  beforeDestroy() {
    document.querySelectorAll('.content img').forEach((i) => {
      i.remove()
    })
  },
  methods: {
    showImage(id: number) {
      console.log({ id })
      this.selectedImage = id
    },
  },
})
</script>

<style >
/* WP */

.content .wp-block-columns {
  display: flex;
}

.content .wp-block-column {
  flex-grow: 1;
}
</style>