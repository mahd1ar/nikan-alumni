<template>
  <div>
    <div
      v-if="$nuxt.context.isDev"
      class="fixed opacity-50 top-10 left-10 z-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
    >
      <div
        class="p-1"
        :class="{ 'bg-red-200': !isLoggedIn, 'bg-green-200': isLoggedIn }"
      >
        {{ isLoggedIn ? 'logged in' : 'logged out' }}
      </div>
      <span class="hidden sm:block">sm</span>
      <span class="hidden md:block">md</span>
      <span class="hidden lg:block">lg</span>
      <span class="hidden xl:block">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>

    <nav dir="rtl" class="bg-gray-800" v-if="$route.path !== '/'">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <nuxt-link
                to="/login"
                class="text-white rounded-full py-2 hover:bg-gray-700 flex-center px-2 font-bold cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-5 h-5"
                  role="img"
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
                class="text-white rounded-full py-2 hover:bg-gray-700 flex-center px-2 font-bold cursor-pointer"
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
            <div id="sec-navigation" class="hidden sm:block sm:mr-6">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <div
                  v-for="(m, index) in menu"
                  :key="index"
                  :class="`menu-item ${
                    m.hasSubmenu ? 'menu-item-has-children' : ''
                  }`"
                  aria-current="page"
                >
                  <nuxt-link :to="m.href">
                    {{ m.title }}
                  </nuxt-link>

                  <ul class="sub-menu">
                    <menu-item
                      v-for="(menuitem, index2) in m.submenu"
                      :key="index2"
                      :menu="menuitem"
                    ></menu-item>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  type="button"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
                v-show="isOpenUserController"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
            >Dashboard</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Team</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Projects</a
          >

          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Calendar</a
          >
        </div>
      </div>
    </nav>

    <client-only>
      <div class="m-auto fixed bottom-10 right-20 z-30">
        <about />
        <square-loader />
      </div>
    </client-only>

    <!-- MOBILE MENU -->

    <div
      v-show="isOpenMobileMenu"
      dir="rtl"
      class="fixed inset-0 z-20 w-full h-full"
    >
      <!-- overlay -->
      <dir
        class="absolute top-0 left-0 bg-black bg-opacity-30 w-full h-full m-0"
        @click.stop="closeMobileMenu"
      ></dir>
      <div class="relative flex flex-row bg-white max-w-sm h-full">
        <div class="" style="background-color: #eff5f7; color: #5f6b85">
          <div>
            <ul class="p-4 flex flex-col h-full gap-2">
              <li
                v-for="(menuitem, index) in menu"
                :key="index"
                :class="{
                  'bg-white rounded p-3 cursor-pointer transition-all border hover:bg-slate-50': true,
                  ' border-cyan-200 border': index === mobileMenu.selected[0],
                  'opacity-70': index !== mobileMenu.selected[0],
                }"
                @click="select(index, 0)"
                v-html="menuitem.svg"
              ></li>
            </ul>
          </div>
        </div>
        <div class="w-full p-3">
          <!-- <div
            class="w-full flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-slate-600 bg-slate-100"
          >
            search
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
          </div> -->

          <div class="text-right text-xl px-1">
            {{ menu[mobileMenu.selected[0]].title }}
          </div>

          <hr class="divide-y-4 divide-slate-800 my-5" />
          <client-only>
            <transition-group
              tag="ul"
              class="flex flex-col gap-1"
              name="open-menu"
            >
              <li
                v-for="(sm, index2) in menu[mobileMenu.selected[0]].submenu"
                :key="index2 * 100 + 5"
                class="bg-slate-50 p-2 rounded-md overflow-hidden"
                :style="{
                  '--count': index2,
                  '--max': menu[mobileMenu.selected[0]].submenu.length,
                }"
              >
                <div class="flex justify-between gap-2 items-center">
                  {{ sm.title }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    class="flex-shrink-0"
                    style="transform: rotate(180deg)"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z"
                    />
                    <path
                      fill="currentColor"
                      d="M9.293 7.707L13.586 12l-4.293 4.293l1.414 1.414L16.414 12l-5.707-5.707z"
                    />
                  </svg>
                </div>
              </li>
            </transition-group>

            <div
              v-show="menu[mobileMenu.selected[0]].hasSubmenu === false"
              class="bg-cyan-50 text-cyan-800 p-2 rounded-md flex justify-between gap-2 items-center"
            >
              ورود به بخش
              {{ menu[mobileMenu.selected[0]].title }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                style="transform: rotate(180deg)"
                class="flex-shrink-0"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm6.293 2.707l1.414-1.414L16.414 12l-5.707 5.707l-1.414-1.414L13.586 12L9.293 7.707z"
                />
              </svg>
            </div>
          </client-only>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  data() {
    return {
      isOpenUserController: false,
      mobileMenu: {
        selected: [] as number[],
      },
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/gh/rastikerdar/samim-font@v4.0.5/dist/font-face.css',
      },

      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap',
      },
    ],
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
      menu: 'navigation/menu',
      isOpenMobileMenu: 'navigation/isOpenMobileMenu',
    }),
  },
  created() {
    this.mobileMenu.selected.push(0)
  },
  mounted() {
    // @ts-ignore
    window.mm = this
  },
  methods: {
    ...mapActions({ closeMobileMenu: 'navigation/closeMobileMenu' }),
    select(i: number, level: number) {
      this.mobileMenu.selected.splice(level, level + 1)
      this.mobileMenu.selected.splice(level, 0, i)
    },
  },
})
</script>

<style lang="scss" scoped>
.open-menu-enter-active,
.open-menu-leave-active {
  transition: all 0.2s;

  transition-delay: calc(var(--count) * 80ms);
}
.open-menu-enter {
  transform: scale(0.9);
  opacity: 0;
}

.open-menu-leave-to {
  transform: scale(0.9);
  opacity: 0;
  transition-delay: calc((var(--max) - var(--count)) * 80ms);
}
.open-menu-move {
  transition: transform 0.2s;
}

#sec-navigation {
  // @apply relative;

  // #menu-top_menu {
  //   @apply absolute top-10 text-black
  // 			mx-auto
  //       text-left
  // 			flex
  //       flex-col
  // 			flex-grow
  //       items-start
  // 			justify-between
  // 			bg-white;
  // }

  .sub-menu {
    @apply invisible
				absolute
				top-full
				left-0
				max-w-xs
				overflow-ellipsis
				transform translate-y-10 border shadow-lg;
  }

  .menu-item {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;

    &:hover {
      @apply bg-gray-900 text-white;
    }

    a {
      @apply w-full;
    }

    .menu-item {
      @apply text-gray-700 hover:bg-gray-100 rounded-none;
    }
  }

  .menu-item-has-children {
    position: relative;
    display: flex;
    gap: 1px;
    // &::after {
    //   content: '';
    //   display: block;
    //   width: 20px;
    //   height: 20px;
    //   position: relative;
    //   top: 4px;
    //   background-repeat: no-repeat;
    //   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23ccc'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
    // }
    .menu-item-has-children {
      flex-direction: row-reverse;
      justify-content: space-between;
      &::before {
        content: '';
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23ccc'%3E%3Cpath fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' /%3E%3C/svg%3E");
      }
    }

    &:hover > .sub-menu {
      @apply visible w-72   
			overflow-ellipsis bg-white transform translate-y-0
			transition-all right-0;

      .sub-menu {
        @apply top-0
				translate-x-full
				transform
				overflow-hidden overflow-ellipsis;
      }
    }
  }
}
</style>
