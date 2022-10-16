<template>
  <div dir="rtl" class="container mx-auto py-10">
    <div class="pb-6 mb-4 border-b">
      <ul class="css-header flex gap-4 flex-wrap items-end">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="text-gray-400 transition-all"
          :class="
            index === tabindex
              ? 'text-cyan-400 text-lg select-none'
              : 'hover:text-gray-600 cursor-pointer'
          "
          @click="tabindex = index"
        >
          {{ t.name }}
        </li>
      </ul>
    </div>
    <transition mode="out-in" name="anime-intro">
      <template v-for="(tab, index) in tabs">
        <div
          v-if="index === tabindex"
          :key="index"
          class="leading-7 text-tm-black"
        >
          <h1 class="text-cyan-400 text-xl mb-10" v-text="tab.label"></h1>
          <div v-html="tab.content"></div>
        </div>
      </template>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    tabs: {
      type: Array as PropType<
        {
          name: string
          lable: string
          content: string
          href: string
        }[]
      >,
      default: () => [],
    },
  },
  data() {
    return {
      tabindex: 0,
    }
  },
  created() {
    const hash = this.$route.hash ? this.$route.hash.split('#')[1].trim() : ''

    if (hash) {
      this.tabs.forEach((i, index) => {
      
        if (i.href.split('#')[1].trim() === hash) {
       
          this.tabindex = index
        }
      })
    } else {
      this.$router.push({
        path: this.$route.path,
        hash: this.tabs[0].href.split('#')[1],
      })
    }
    // lottie.loadAnimation({
    //   container: this.$refs.parent as HTMLDivElement, // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'https://assets5.lottiefiles.com/packages/lf20_znukgxzs.json', // the path to the animation json
    // })
  },
})
</script>

<style lang="scss" scoped>
.anime-intro {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    opacity: 1;
  }
  &-enter {
    background: rgb(255, 255, 255);
    clip-path: polygon(98% 0, 100% 0, 100% 100%, 89% 100%);
    position: absolute;
    opacity: 0;
  }
  &-leave-to {
    background: rgb(255, 255, 255);
    position: absolute;
    clip-path: polygon(0 0, 0 10%, 0 100%, 0 100%);
    opacity: 0;
  }
}

h3 {
  @apply text-cyan-500 bg-cyan-50 text-lg p-3 my-2;
}

p {
  @apply leading-7;
}
.size-thumbnail {
  @apply w-40 h-40 mt-2 object-cover;
}
ul:not(.css-header) {
  @apply list-inside list-disc;
}

tr {
  @apply grid grid-cols-4 gap-4 mb-10;
  td {
    a {
      @apply w-full overflow-clip;
      img {
        @apply h-32 w-full object-cover;
      }
    }
  }
}
</style>