<template>
  <div class="relative bg-gray-100 flex-grow">
    <header
      class="entry-header entry-header--style-3 relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black"
    >
      <div class="dark container relative z-10">
        <div class="max-w-screen-md">
          <div class="nc-SingleHeader space-y-5">
            <!-- CATEGORIES -->
            <div class="nc-CategoryBadgeList flex flex-wrap">
              <a
                href="https://ncmaz.chisnghiax.com/category/outdoors/"
                rel="category tag"
                >Outdoors</a
              >
            </div>

            <!-- TITLE -->
            <h1
              class="entry-title text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl"
            >
              {{ title }}
            </h1>
            <!-- // ========== SHOW EXCERPT ========== -->

            <!-- DIVIDER BORDER -->
            <div
              class="w-full border-b border-neutral-100 dark:border-neutral-800"
            ></div>

            <!-- META -->
            <div
              class="flex flex-col lg:flex-row justify-between lg:items-end space-y-5 lg:space-y-0 lg:space-x-5"
            >
              <div
                class="nc-PostMeta2 nc-PostMeta2-2 flex items-center text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0"
                data-nc-id="PostMeta2"
              >
                <a
                  class="flex items-center space-x-2"
                  href="https://ncmaz.chisnghiax.com/author/ncmaz/"
                >
                  <div
                    class="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover"
                      src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/qxevdflbl8a-1-200x300.jpg"
                      alt="ncmaz"
                    />
                  </div>
                </a>
                <div class="ml-3">
                  <div class="flex items-center">
                    <a
                      class="block font-semibold"
                      href="https://ncmaz.chisnghiax.com/author/ncmaz/"
                    >
                      ncmaz
                    </a>
                  </div>
                  <div class="text-xs mt-[6px]">
                    <span class="text-neutral-700 dark:text-neutral-300">
                      Sep 05, 2021
                    </span>

                    <span class="mx-2 font-semibold">·</span>
                    <span class="text-neutral-700 dark:text-neutral-300">
                      <span class="span-reading-time rt-reading-time"
                        ><span class="rt-label rt-prefix"></span>
                        <span class="rt-time"> 3</span>
                        <span class="rt-label rt-postfix">min read</span></span
                      >
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="nc-SingleMetaAction2 flex flex-row space-x-2.5 items-center"
              >
                <!-- VIEWS COUNT -->
                <div
                  class="nc-SingleMetaAction2__views relative sm:min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 flex items-center justify-center pl-2 pr-3 h-7 sm:h-8 text-xs sm:text-sm focus:outline-none"
                  title="Views"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="2.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                    ></circle>
                  </svg>
                  <span class="ml-1 text-neutral-900 dark:text-neutral-200">
                    6402
                  </span>
                </div>

                <!-- COMMENT COUNTS -->
                <a
                  class="nc-SingleMetaAction2__comments group relative sm:min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 items-center justify-center pl-2 pr-3 h-7 sm:h-8 text-xs sm:text-sm focus:outline-none hidden sm:flex"
                  title="Comments"
                  href="https://ncmaz.chisnghiax.com/sint-est-autem-quibusdam-asperiores-occaecati-voluptatem/#comments"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path>
                  </svg>
                  <span
                    class="ml-1 text-neutral-900 dark:text-neutral-200 group-hover:text-teal-600"
                  >
                    0
                  </span>
                </a>

                <!-- DIVIDER -->
                <div class="px-1">
                  <div
                    class="border-l border-neutral-200 dark:border-neutral-700 h-6"
                  ></div>
                </div>

                <!-- LIKE BUTTON -->
                <div class="ncmaz-button-like-post relative text-xs sm:text-sm">
                  <button
                    class="simplefavorite-button has-count"
                    data-postid="326"
                    data-siteid="1"
                    data-groupid="1"
                    data-favoritecount="40"
                    style=""
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="simplefavorite-button-count">40</span>
                  </button>
                </div>

                <!-- DROPDOWN SHARE -->
                <div>
                  <div class="relative inline-block text-left">
                    <button
                      class="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                      title="Share with"
                      id="headlessui-menu-button-4"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div>
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M12 14.25L12 5"
                          ></path>
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M8.75 8.25L12 4.75L15.25 8.25"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-8 md:mt-0 md:absolute md:top-0 md:left-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3"
      >
        <div
          class="hidden md:block absolute top-0 rigth-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-l"
        ></div>

        <img
          width="2250"
          height="1500"
          src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2.jpeg"
          class="block w-full h-full object-cover wp-post-image"
          alt=""
          loading="lazy"
          srcset="
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2.jpeg           2250w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-500x333.jpeg    500w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-1024x683.jpeg  1024w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-768x512.jpeg    768w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-1536x1024.jpeg 1536w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-2048x1365.jpeg 2048w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-1320x880.jpeg  1320w,
            https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2-300x200.jpeg    300w
          "
          sizes="(max-width: 2250px) 100vw, 2250px"
        />
      </div>
    </header>

    <!-- Start Main -->
    <main class="container mx-w-6xl mx-auto py-4">
      <content-field :html="content"></content-field>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import onLoggedOut from '@/mixins/on-logged-out'
import { Dict } from '~/data/utils/dictionary'
import query from '@/apollo/queries/event.gql'
import { EventQuery, EventQueryVariables } from '~/types/types'

export default Vue.extend({
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  data() {
    return {
      title: '',
      content: '',
    }
  },
  async fetch() {
    try {
      console.log('user email : ', this.$store.state.authentication.user.email)
      const variables: EventQueryVariables = {
        id: this.$route.params.id,
        authorEmail: this.$store.state.authentication.user.email,
      }
      const { data } = await this.$apollo.query<EventQuery>({
        query,
        variables,
      })

      this.title = data.event?.title || ''
      this.content = data.event?.content || ''
    } catch (error) {
      if (process.client)
        this.$about.error({ title: Dict.fetch_err, body: String(error) })
      console.error(error)
      this.$router.push('/user/events')
    }
  },

  mounted() {
    // @ts-ignore
    window.id = this
  },

  methods: {},
})
</script>

<style scoped>
</style>