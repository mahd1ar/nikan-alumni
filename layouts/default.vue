<template>
  <div>
    <!-- DEBUGG -->
    <!-- <div
      v-if="$nuxt.context.isDev"
      class="fixed top-10 left-10 z-50 opacity-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
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
    </div> -->

    <!-- spinnet toast -->
    <client-only>
      <div class="fixed bottom-10 right-20 z-30 m-auto">
        <div class="js-fireworks absolute right-0 bottom-0"></div>
        <about />
        <square-loader />
      </div>
    </client-only>

    <!-- search -->
    <client-only>
      <transition name="v-fade">
        <float-search v-if="$store.getters['search/showSearchBox']" />
      </transition>
    </client-only>

    <!-- MOBILE MENU -->
    <transition name="anime-mobile-menu">
      <div
        v-show="isOpenMobileMenu"
        dir="rtl"
        class="fixed inset-0 z-20 h-full w-full"
      >
        <!-- overlay -->
        <div
          id="mmenu__overlay"
          class="absolute top-0 left-0 m-0 h-full w-full bg-black bg-opacity-30"
          @click.stop="closeMobileMenu"
        ></div>
        <!-- @click.stop="closeMobileMenu" -->
        <div
          id="mmenu__cart"
          class="relative flex h-full w-full sm:max-w-md flex-row bg-white"
        >
          <div
            class="flex-shrink-0"
            style="background-color: #eff5f7; color: #5f6b85"
          >
            <div class="h-full">
              <ul class="flex h-full flex-col gap-2 overflow-hidden p-4">
                <li
                  v-for="(menuitem, index) in menu"
                  v-show="index !== 0"
                  :key="index"
                  :class="{
                    'mmenu__icon cursor-pointer rounded border bg-white p-3 transition-all hover:bg-slate-50': true,
                    ' border border-cyan-200': index === mobileMenu.selected[0],
                    'opacity-70': index !== mobileMenu.selected[0],
                  }"
                  :style="{
                    '--count': index,
                  }"
                  @click="select(index, 0)"
                  v-html="menuitem.svg"
                ></li>
                <!-- back -->
                <li
                  class="mmenu__icon mt-auto rotate-180 transform cursor-pointer rounded border bg-white p-3 text-red-400 transition-all"
                  @click="closeMobileMenu"
                >
                  <svg
                    aria-hidden="true"
                    role="img"
                    class="mx-auto h-5 w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"
                    />
                  </svg>
                </li>
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

            <div class="px-1 text-right text-xl">
              {{ menu[mobileMenu.selected[0]].title }}
            </div>

            <hr class="my-5 divide-y-4 divide-slate-800" />
            <client-only>
              
              <nuxt-link
                v-show="menu[mobileMenu.selected[0]].href !== '#'"
                :to="menu[mobileMenu.selected[0]].href"
                class="flex items-center justify-between gap-2 rounded-md bg-cyan-50 p-2 text-cyan-800"
                @click.native="closeMobileMenu"
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
              </nuxt-link>
              
              <transition-group
                tag="ul"
                class="flex flex-col gap-1"
                name="open-menu"
              >
                <li
                  v-for="(sm, index2) in menu[mobileMenu.selected[0]].submenu"
                  :key="index2 * 100 + 5"
                  class="overflow-hidden rounded-md bg-slate-50 p-2"
                  :style="{
                    '--count': index2,
                    '--max': menu[mobileMenu.selected[0]].submenu.length,
                  }"
                  @click="closeMobileMenu"
                >
                  <nuxt-link
                    :to="sm.href"
                    class="flex items-center justify-between gap-2"
                  >
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
                  </nuxt-link>
                </li>
              </transition-group>

            </client-only>
          </div>
        </div>
      </div>
    </transition>

    <div class="flex min-h-screen flex-col">
      <transition name="animation-rollup">
        <nav
          v-if="showDarkMenu"
          dir="rtl"
          class="sticky top-0 z-10 bg-gray-800"
        >
          <div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div
                class="absolute inset-y-0 left-0 flex items-center md:hidden"
              >
                <div
                  class="flex-center cursor-pointer rounded-full p-2 font-bold text-gray-400 hover:bg-gray-700 hover:text-white"
                  @click="$emit('openModal')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="h-5 w-5"
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
                <nuxt-link
                  to="/"
                  class="flex-center cursor-pointer rounded-full p-2 font-bold text-gray-400 hover:bg-gray-700 hover:text-cyan-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="h-5 w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M18.178 11.373a.7.7 0 0 1 .7.7v5.874c.027.812-.071 1.345-.434 1.68c-.338.311-.828.4-1.463.366H3.144C2.5 19.961 2 19.7 1.768 19.173c-.154-.347-.226-.757-.226-1.228v-5.873a.7.7 0 0 1 1.4 0v5.873c0 .232.026.42.07.562l.036.098l-.003-.01c.001-.013.03-.008.132-.002h13.84c.245.014.401 0 .456-.001l.004-.001c-.013-.053.012-.27 0-.622v-5.897a.7.7 0 0 1 .701-.7ZM10.434 0c.264 0 .5.104.722.297l8.625 8.139a.7.7 0 1 1-.962 1.017l-8.417-7.944l-9.244 7.965a.7.7 0 0 1-.915-1.06L9.689.277l.086-.064c.214-.134.428-.212.66-.212Z"
                    />
                  </svg>
                </nuxt-link>
                <!-- Mobile menu button-->
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  @click="openMobileMenu"
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
                class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
              >
                <div class="hidden flex-shrink-0 items-center sm:flex">
                  <div
                    class="flex-center cursor-pointer rounded-full py-2 px-2 font-bold text-cyan-400 hover:bg-gray-700"
                    @click="$store.dispatch('search/toggleSearchBox', false)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="h-5 w-5"
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
                <client-only>
                  <div id="sec-navigation" class="hidden md:block">
                    <div class="flex lg:gap-2">
                      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                      <!-- @click="
                      $router.push({
                        path: m.href,
                        hash:
                          m.href.find('#') !== -1 ? m.href.split('#')[1] : null,
                      })
                    " -->
                      <nuxt-link
                        v-for="(m, index) in menu"
                        :key="index"
                        :class="`menu-item cursor-pointer ${
                          m.hasSubmenu ? 'menu-item-has-children' : ''
                        }`"
                        :to="m.href"
                        aria-current="page"
                      >
                        <div class="">
                          {{ m.title }}
                        </div>
                        <ul class="sub-menu">
                          <menu-item
                            v-for="(menuitem, index2) in m.submenu"
                            :key="index2"
                            :menu="menuitem"
                          ></menu-item>
                        </ul>
                      </nuxt-link>
                    </div>
                  </div>
                </client-only>
              </div>

              <div
                class="absolute w-full inset-y-0 right-0 flex items-center pr-2 md:hidden pointer-events-none"
              >
                <div class="w-36 mx-auto">
                  <div class="flex text-white">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <!-- transform translate-x-4 sm:translate-x-0 -->
                    <nuxt-link to="/" class="pointer-events-none transition-all"
                      >کانون دانش آموختگان</nuxt-link
                    >
                  </div>
                </div>
              </div>

              <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
              >
                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div>
                    <button
                      v-if="isLoggedIn"
                      id="user-menu-button"
                      type="button"
                      class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-expanded="false"
                      aria-haspopup="true"
                      @click="toggleUserController($event)"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        :src="$store.state.authentication.user.avatar"
                        alt=""
                      />
                    </button>

                    <nuxt-link
                      v-else
                      to="/login"
                      class="text-white py-1 px-4 bg-slate-700 rounded text-slate-300 text-sm"
                    >
                      <!-- کانون دانش آموختگان نیکان -->
                      ورود اعضا
                    </nuxt-link>
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
                  <client-only>
                    <transition name="v-openwindow">
                      <div
                        v-if="isOpenUserController"
                        v-click-outside="closeController"
                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-hidden rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:right-auto md:left-0"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                        @click="closeController"
                      >
                        <div
                          class="text-center flex flex-col text-sm text-tm-black border-b-2 py-4 bg-white"
                        >
                          <img
                            class="w-16 h-16 rounded-full mx-auto mb-2"
                            :src="$store.state.authentication.user.avatar"
                          />
                          <div class="text-tm-gray gap-1 flex flex-col">
                            <span>
                              {{ $store.state.authentication.user.firstName }}
                              {{ $store.state.authentication.user.lastName }}
                            </span>
                            <span>
                              {{ $store.state.authentication.user.email }}
                            </span>
                          </div>
                        </div>
                        <!-- Active: "bg-gray-100", Not Active: "" -->
                        <div class="relative">
                          <transition name="swip-left">
                            <div v-if="!menuConfirm.show" key="t1">
                              <nuxt-link
                                id="user-menu-item-0"
                                to="/login"
                                class="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                              >
                                پروفایل شما
                              </nuxt-link>
                              <!-- <a
                              id="user-menu-item-1"
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabindex="-1"
                              >Settings</a> -->
                              <div
                                class="block cursor-pointer px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabindex="-1"
                                @click.stop="confirmSignOut"
                              >
                                خارج شدن از حساب کاربری
                              </div>
                            </div>
                            <!-- confirm -->
                            <div v-else key="t2">
                              <p
                                class="p-1 text-center text-tm-black"
                                @click.stop
                              >
                                از خروج از حساب کاربری خود مطمئن هستید
                              </p>
                              <button
                                class="block w-full cursor-pointer bg-red-50 px-4 py-2 text-sm text-red-700 hover:bg-red-100"
                                role="menuitem"
                                tabindex="-1"
                                @click="signOut"
                              >
                                بله
                              </button>
                              <button
                                class="block w-full cursor-pointer px-4 py-2 text-sm text-gray-500"
                                role="menuitem"
                                tabindex="-2"
                                @click.stop="menuConfirm.show = false"
                              >
                                خیر
                              </button>
                            </div>
                          </transition>
                        </div>
                      </div>
                    </transition>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </transition>

      <!-- announcement -->
      <announcement :show.sync="announcement.show" :title="announcement.title" :link="announcement.link" />

      <Nuxt class="flex-1 bg-white" @error="nuxtonError" />
    </div>
    <!-- gap -->
    <div v-show="$route.path !== '/' " class="w-full h-10 text-gray-300 flex-center font-extrabold text-3xl">.</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
// @ts-ignore
import vClickOutside from 'v-click-outside'
import apiFetch from '@wordpress/api-fetch'
import { WPapi } from '~/data/GlobslTypes'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      announcement : {
        show : false,
        title : "",
        link : ""
      },
      menuConfirm: {
        show: false,
      },
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
      showDarkMenu: 'navigation/showDarkMenu',
    }),
  },
  created() {
    this.mobileMenu.selected.push(1)
  },
  async mounted() {
    // remove fucking service worker
    navigator.serviceWorker
      .getRegistrations()
      .then(function (registrations) {
        for (const registration of registrations) {
          registration.unregister()
        }
      })
      .catch(function (err) {
        console.log('Service Worker registration failed: ', err)
      })
    // @ts-ignore
    window.mm = this;

 this.getAnnouncement()
  },

  methods: {
    ...mapActions({
      closeMobileMenu: 'navigation/closeMobileMenu',
      openMobileMenu: 'navigation/openMobileMenu',
    }),
    nuxtonError(e: Error) {
      console.log('nuxt err')
      console.log(e)
    },
    closeController() {
      this.isOpenUserController = false
      this.menuConfirm.show = false
    },
    confirmSignOut() {
      this.menuConfirm.show = true
    },
    signOut() {
      // TODO : make a dialog and ask theme
      this.$authentication().signout()
      // TODO : display notification after loggin out!
    },
    select(i: number, level: number) {
      this.mobileMenu.selected.splice(level, level + 1)
      this.mobileMenu.selected.splice(level, 0, i)
    },
    toggleUserController(val?: boolean) {
      if (val === undefined)
        this.isOpenUserController = !this.isOpenUserController
      else this.isOpenUserController = val
    },
  async  getAnnouncement(){
    if(sessionStorage.getItem('announcement:hashaction') === 'true' )
return

    try {
        const data = await apiFetch<WPapi.stdPost.RootObject[]>({ path: 'https://nikan-alumni.org/wp-json/wp/v2/posts?sticky=true' })

if(data && data[0]){
  const pagelink = '/post/' + btoa( 'post:' + data[0].id)
  if(this.$route.path === pagelink) return

  this.announcement.show = true ;
  this.announcement.title = data[0].title.rendered ;
  this.announcement.link = pagelink
}else{
  this.announcement.show = false
}


      } catch (error) {
       console.log(error)
      }
    }
  },
})
</script>

<style lang="scss" scoped>
.anime-mobile-menu {
  &-enter-active,
  &-leave-active {
    transition: all 0.4s;

    #mmenu__cart {
      transition: all 0.4s;
    }

    #mmenu__overlay {
      transition: all 0.2s;
      opacity: 1;
    }

    // .mmenu__icon {
    //   transition: all 400ms ease-in;
    //   transition-delay: calc(var(--count) * 100ms + 150ms);
    // }
  }

  &-enter,
  &-leave-to {
    #mmenu__cart {
      transform: translate3d(100%, 0, 0);
      opacity: 1;
    }

    #mmenu__overlay {
      opacity: 0;
    }

    // .mmenu__icon {
    //   opacity: 0;
    // }
  }
}

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

.swip-left-enter-active,
.swip-left-leave-active {
  transition: all 400ms;
}
.swip-left-enter {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateX(-100%);
  opacity: 0;
}
.swip-left-leave-to {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateX(100%);
  opacity: 0;
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

  @apply font-samim;

  .sub-menu {
    @apply invisible absolute
				top-full

				min-w-max max-w-xs translate-y-10
				transform
				overflow-ellipsis
				border opacity-0 shadow-lg;
  }

  .menu-item {
    @apply rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white;

    &:hover {
      @apply bg-gray-900 text-white;
    }

    a {
      @apply w-full;
    }

    .menu-item {
      @apply rounded-none text-gray-700 hover:bg-gray-100;
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
      @apply visible right-0 z-10  w-72
			translate-y-0 transform overflow-ellipsis bg-white
			opacity-100 transition-all duration-500;

      .sub-menu {
        @apply top-0
				translate-x-full
				transform
				overflow-hidden overflow-ellipsis;
      }
    }
  }
}

// TODO : impl this later V
.animation-rollup-enter-active,
.animation-rollup-leave-active {
  transition: all 500ms ease;
  transition-delay: calc(var(--count) * 75ms);
  // transform: translateY(0%);
  max-height: 65px;
  z-index: 0;
}
.animation-rollup-enter,
.animation-rollup-leave-to {
  // transform: translateY(-100%);
  max-height: 0px;
  overflow: hidden;
}
</style>
