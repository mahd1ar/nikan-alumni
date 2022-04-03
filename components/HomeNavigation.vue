<template>
  <nav class="h-24 relative z-10 top-8">
    <div
      class="container mx-auto h-full overflow-x-clip lg:max-w-[1104px] lg:px-10 xl:px-0"
    >
      <div
        class="flex flex-row gap-1 h-full w-full bg-white px-4 rounded items-stretch justify-between"
      >
        <div class="flex flex-row gap-1">
          <div class="flex items-center">
            <div
              class="lg:hidden text-neutral-700 rounded-full py-2 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer"
              @click="openMobileMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <circle cx="8" cy="2.5" r=".75" />
                  <circle cx="8" cy="8" r=".75" />
                  <circle cx="8" cy="13.5" r=".75" />
                </g>
              </svg>
            </div>
            <nuxt-link
              to="/login"
              class="text-neutral-700 rounded-full py-2 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </g>
              </svg>
            </nuxt-link>
            <div
              class="text-neutral-700 rounded-full py-2 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer"
              @click="$emit('openModal')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
                />
              </svg>
            </div>
          </div>
          <!-- class="text-neutral-600 hover:bg-gray-100 flex-center px-2 font-bold cursor-pointer" -->
          <nav id="navigation" class="flex justify-center font-bold">
            <div class="menu-top_menu-container hidden lg:flex">
              <ul id="menu-top_menu" class="menu">
                <menu-item
                  v-for="(menuitem, index) in menu"
                  :key="index"
                  :menu="menuitem"
                  class="h-full flex-center"
                ></menu-item>
              </ul>
            </div>
          </nav>
        </div>

        <figure class="relative">
          <div class="h-full left-0 py-3 rounded-md bg-white z-10">
            <img class="h-full" src="img/logo_only.png" alt="" />
          </div>
        </figure>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  data() {
    return {
      search: {
        show: false,
      },
    }
  },
  computed: {
    ...mapGetters({ menu: 'navigation/menu' }),
  },
  methods: {
    ...mapActions({ openMobileMenu: 'navigation/openMobileMenu' }),
  },
})
</script>

<style scoped>
/* havaset bashes */
/* backdrop-filter blur(16px)
background-color rgba(255, 255, 255, 0.8)
border-bottom-color rgb(160, 164, 167) */
</style>
