<template>
  <nav class="relative top-8 z-10 h-24">
    <div
      class="container mx-auto h-full overflow-x-clip lg:max-w-[1104px] lg:px-10 xl:px-0"
    >
      <div
        class="flex h-full w-full flex-row-reverse items-stretch justify-between gap-1 rounded bg-white px-4"
      >
        <div class="flex items-center justify-center lg:hidden">
          <nuxt-link
            to="/login"
            class="py-2 hover:bg-slate-100 tracking-widest px-4 text-gray-600 font-bold rounded"
          >
            ورود اعضا
          </nuxt-link>
        </div>

        <figure class="relative hidden lg:block">
          <div class="left-0 z-10 h-full rounded-md bg-white py-2">
            <img class="h-full" src="img/logo_only.png" alt="" />
          </div>
        </figure>

        <figure
          class="lg:hidden absolute h-full top-0 left-1/2 transform -translate-x-1/2"
        >
          <div class="left-0 z-10 h-full rounded-md bg-white py-2">
            <img class="h-full" src="img/logo_only.png" alt="" />
          </div>
        </figure>

        <div class="flex flex-row gap-1">
          <div class="flex items-center">
            <div
              class="flex-center cursor-pointer rounded-full py-2 px-2 font-bold text-neutral-700 hover:bg-gray-100 lg:hidden"
              @click="openMobileMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="w-6 h-6"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm6 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <!-- <nuxt-link
              to="/login"
              class="flex-center cursor-pointer rounded-full py-2 px-2 font-bold text-red-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="h-5 w-5"
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
            </nuxt-link> -->
            <div
              class="flex-center cursor-pointer rounded-full py-2 px-2 font-bold text-neutral-700 hover:bg-gray-100"
              @click="$emit('openModal')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="h-6 w-6"
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
                  class="flex-center h-full"
                ></menu-item>
              </ul>
            </div>
          </nav>
        </div>
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
  mounted() {
    this.$emit('componentLoaded')
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
