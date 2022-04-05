<template>
  <div>
    <div v-if="isExcerpt">
      <div v-if="isProtected === false || isLoggedIn">
        <div v-snip="3" v-html="html"></div>
      </div>
      <div v-else>
        <!-- LOGINTO READ MORE -->
        <span
          class="flex-center gap-2 rounded border border-red-100 bg-red-50 p-2 text-sm text-red-500"
        >
          <span> محتوا محافظت شده </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            class="h-5 w-5"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856a.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533c.12.057.218.095.293.118a.55.55 0 0 0 .101.025a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118c.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453a7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625a11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43A62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M7.001 11a1 1 0 1 1 2 0a1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"
              />
            </g>
          </svg>
          <!-- TODO nuxt-link to=login -->
        </span>
      </div>
    </div>
    <div v-else class="content">
      <div v-html="purgedContent || html"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapGetters } from 'vuex'

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
    isExcerpt: {
      type: Boolean,
      default: () => false,
    },
    removeTags: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  data() {
    return {
      selectedImage: -1,
      imgs: [] as Images[],
      isProtected: false,
      purgedContent: '',
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
    }),
  },
  created() {
    if (this.removeTags.length === 0) return

    let purgedContent = this.html
    this.removeTags.forEach((tagName) => {
      const reg = new RegExp(`<${tagName}.*</${tagName}>`, 'g')
      purgedContent = purgedContent.replace(reg, '')
    })

    console.log({ purgedContent })
    if (!purgedContent) purgedContent = ' '

    this.purgedContent = purgedContent
  },
  mounted() {
    this.isProtected = this.html.search('Login to read more') !== -1
    if (this.isExcerpt) return

    const div = document.createElement('div')
    div.innerHTML = this.html
    console.log(div, this)
  },
  beforeDestroy() {
    document.querySelectorAll('.content img').forEach((i) => {
      i.remove()
    })
  },
  methods: {
    // showImage(id: number) {
    //   console.log({ id })
    //   this.selectedImage = id
    // },
  },
})
</script>

<style>
/* WP */

.content .wp-block-columns {
  display: flex;
}

.content .wp-block-column {
  flex-grow: 1;
}
</style>
