<template>
  <div dir="rtl" class="">
    <!-- hero section -->
    <div class="flex h-screen w-full flex-col">
      <!-- <nuxt-link to="login">++++</nuxt-link> -->
      <div class="relative flex h-full w-full flex-col">
        <div class="relative h-full">
          <img
            class="absolute top-0 left-0 h-full w-full object-cover object-bottom"
            src="img/IMG_4141(ACR v8.1)F-2MP.jpg"
            alt=""
          />
          <div class="relative top-0 left-0 h-full w-full">
            <div class="relative h-full w-full">
              <home-navigation
                ref="heroNav"
                class="sticky"
                @componentLoaded="observe"
                @openModal="search.show = true"
              />
              <div
                class="m-blur-background-1 absolute top-0 left-0 h-full w-full"
              ></div>
              <div
                class="container relative mx-auto flex h-full flex-row-reverse"
              >
                <div class="flex flex-col justify-center gap-6 md:w-6/12">
                  <div class="text-right text-5xl font-bold text-gray-50">
                    کانون
                    <br />
                    دانش آموختگان
                    <br />
                    <span class="text-cyan-300"> نیکان </span>
                  </div>
                  <p class="text-lg leading-7 text-white">
                    محلی است برای ارائه خدمات به دانش آموختگان مدرسه نیکان و
                    ایجاد بستری برای شکوفایی و به اشتراک گذاری ظرفیت ها
                  </p>
                  <div class="text-sm">
                    <button
                      class="inline-flex border-0 rounded bg-cyan-500 py-2 px-6 text-white hover:bg-cyan-600 focus:outline-none"
                    >
                      ورود دانش آموخته
                    </button>
                    <button
                      class="ml-4 inline-flex rounded border-0 bg-opacity-20 py-2 px-6 text-white hover:bg-gray-50 focus:outline-none"
                    >
                      درباره کانون دانش آموختگان
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <rest-of-home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware(ctx) {
    // alert('dispatchEvent')
    ctx.store.dispatch('navigation/toggleDarkMenu', false)
  },
  data() {
    return {
      observer: null as null | IntersectionObserver,

      events: [],
      news: [],

      playerOptions: {
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'pip',
          'airplay',
          'fullscreen',
        ],
      },
      // videourl:
      //   'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    }
  },
  beforeMount() {
    const options = {
      // root: document.querySelector('#scrollArea'),
      rootMargin: '100px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entreis) => {
      if (entreis[0].isIntersecting) {
        console.log('isIntersecting')
        this.$store.dispatch('navigation/toggleDarkMenu', false)
      } else {
        console.log('is NOT Intersecting')
        this.$store.dispatch('navigation/toggleDarkMenu', true)
      }
    }, options)

    this.observer = Object.freeze(observer)
    this.$nextTick(() => {})
  },
  methods: {
    observe() {
      type NavRef = InstanceType<typeof Vue>

      if (this.observer) {
        this.observer.observe((this.$refs.heroNav as NavRef).$el!)
      } else console.log('NOT DEF')
    },
  },
})
</script>

<style>
.m-blur-background-1 {
  background: linear-gradient(
    90deg,
    rgba(33, 37, 41, 0.6) 0%,
    rgba(33, 37, 41, 0.24) 100%
  );
}

/* .m-title:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 40px;
  background: red;
  bottom: -10px;
  right: 0;
} */

/* we will explain what these classes do next! */
</style>
