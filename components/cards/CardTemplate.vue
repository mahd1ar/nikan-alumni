<template>
  <div
    class="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 text-center"
  >
    <h2
      class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400"
    >
      {{ scopedCategory }}
    </h2>
    <h1 class="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
      {{ title }}
    </h1>
    <p class="mb-3 leading-relaxed">
      <client-only>
        <content-field :isExcerpt="true" :html="content" />
      </client-only>
    </p>
    <a class="inline-flex items-center text-indigo-500"
      >Learn More
      <svg
        class="ml-2 h-4 w-4"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
    <div
      class="absolute bottom-0 left-0 mt-2 flex w-full justify-end py-4 text-center leading-none"
    >
      <span
        class="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400"
        dir="rtl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          class="ml-2 h-4 w-4"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6Z"
            class="clr-i-outline clr-i-outline-path-1"
          />
          <path
            fill="currentColor"
            d="M8 14h2v2H8z"
            class="clr-i-outline clr-i-outline-path-2"
          />
          <path
            fill="currentColor"
            d="M14 14h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-3"
          />
          <path
            fill="currentColor"
            d="M20 14h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-4"
          />
          <path
            fill="currentColor"
            d="M26 14h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-5"
          />
          <path
            fill="currentColor"
            d="M8 19h2v2H8z"
            class="clr-i-outline clr-i-outline-path-6"
          />
          <path
            fill="currentColor"
            d="M14 19h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-7"
          />
          <path
            fill="currentColor"
            d="M20 19h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-8"
          />
          <path
            fill="currentColor"
            d="M26 19h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-9"
          />
          <path
            fill="currentColor"
            d="M8 24h2v2H8z"
            class="clr-i-outline clr-i-outline-path-10"
          />
          <path
            fill="currentColor"
            d="M14 24h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-11"
          />
          <path
            fill="currentColor"
            d="M20 24h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-12"
          />
          <path
            fill="currentColor"
            d="M26 24h2v2h-2z"
            class="clr-i-outline clr-i-outline-path-13"
          />
          <path
            fill="currentColor"
            d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
            class="clr-i-outline clr-i-outline-path-14"
          />
          <path
            fill="currentColor"
            d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
            class="clr-i-outline clr-i-outline-path-15"
          />
          <path
            fill="currentColor"
            d="M13 6h10v2H13z"
            class="clr-i-outline clr-i-outline-path-16"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>

        {{ date }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import ContentField from '../ContentField.vue'
export default Vue.extend({
  components: { ContentField },
  props: {
    date: String,
    categories: {
      type: Array as PropType<string[]>,
      default: () => {
        return ['دسته بندی نشده']
      },
    },
    content: { type: String, default: '' },
    title: { type: String, default: () => '' },
  },
  data() {
    return {
      scopedCategory: '',
    }
  },
  mounted() {
    this.scopedCategory = this.categories
      .filter(
        (i) => process.env.MOTHERCATEGORIES?.split(',').includes(i) === false
      )
      .join(',')
  },
})
</script>
