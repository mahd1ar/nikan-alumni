<template>
  <dir v-show="open">
    <transition name="scale-up" @after-leave="closeViewer" @enter="enter">
      <div
        v-show="show"
        class="z-20 fixed w-full h-full flex-center top-0 left-0"
      >
        <!-- overlay -->
        <div
          class="bg-gray-700 bg-opacity-90 absolute flex-center top-0 left-0 w-full h-full select-none"
        ></div>

        <!-- For mobile -->
        <div v-if="$device.isMobile" class="relative w-full">
          <div class="snap-mandatory snap-x w-full flex overflow-auto">
            <div
              v-for="(img, index) in imgs"
              ref="image-item"
              :key="index"
              :style="{ '--count': index }"
              class="snap-center w-11/12 flex-shrink-0"
            >
              <img class="m-auto w-full" :src="img" />
            </div>
          </div>
        </div>

        <!-- for desktop -->
        <div v-else class="relative w-full select-none">
          <div class="movable w-10/12 h-5/6 mx-auto" :style="{ '--count': 3 }">
            <img
              :style="{ transform: `scale(${scale})` }"
              class="mx-auto max-w-full max-h-full object-cover will-change-transform transition-all duration-500"
              :src="imgs[imgIndex + diff]"
              alt=""
            />
          </div>
        </div>

        <!-- buttons -->
        <div
          class="absolute cursor-pointer top-4 right-4 p-5 text-gray-500"
          @click="hide"
        >
          <svg
            aria-hidden="true"
            role="img"
            class="w-10 h-10"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10.657 12.071L5 6.414L6.414 5l5.657 5.657L17.728 5l1.414 1.414l-5.657 5.657l5.657 5.657l-1.414 1.414l-5.657-5.657l-5.657 5.657L5 17.728z"
            />
          </svg>
        </div>

        <div
          v-if="$device.isDesktop"
          @click="next"
          class="absolute cursor-pointer right-4 p-5 text-gray-500"
        >
          <svg
            aria-hidden="true"
            role="img"
            class="w-10 h-10"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6l-6-6z"
            />
          </svg>
        </div>

        <div
          @click="prv"
          v-if="$device.isDesktop"
          class="absolute cursor-pointer left-4 p-5 text-gray-500"
        >
          <svg
            aria-hidden="true"
            role="img"
            class="w-10 h-10 transform rotate-180"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6l-6-6z"
            />
          </svg>
        </div>

        <div
          v-if="$device.isDesktop"
          class="absolute cursor-pointer border-l-0 transform translate-x-1/2 bottom-4 p-5 text-white bg-white bg-opacity-20 border"
          @click="zoomIn"
        >
          <svg
            aria-hidden="true"
            role="img"
            class="w-5 h-5"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509c-148-148.1-388.4-148.1-537 0c-148.1 148.6-148.1 389 0 537c139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0c-118.7-118.8-118.7-311.2 0-430c118.8-118.7 311.2-118.7 430 0c118.7 118.8 118.7 311.2 0 430z"
            />
          </svg>
        </div>

        <div
          v-if="$device.isDesktop"
          class="absolute border-r-0 cursor-pointer transform -translate-x-1/2 bottom-4 p-5 text-white bg-white bg-opacity-20 border"
          @click="zoomOut"
        >
          <svg
            aria-hidden="true"
            role="img"
            class="w-5 h-5"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509c-148-148.1-388.4-148.1-537 0c-148.1 148.6-148.1 389 0 537c139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0c-118.7-118.8-118.7-311.2 0-430c118.8-118.7 311.2-118.7 430 0c118.7 118.8 118.7 311.2 0 430z"
            />
          </svg>
        </div>
      </div>
    </transition>
  </dir>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    imgs: {
      type: Array as PropType<string[]>,
    },
    imgIndex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      show: false,
      scale: 1,
      diff: 0,
    }
  },
  //   watch {
  // shadow(nval){
  //     if(nval===false)
  //     this.scale =0
  //     else
  //     this.scale = 1
  // }
  //   },

  watch: {
    open(nval: boolean) {
      if (nval) {
        // this.imgIndex
        this.show = true
      }
    },
  },
  methods: {
    enter() {
      if (this.imgIndex > -1 && this.$device.isMobile) {
        const divs = this.$refs['image-item'] as HTMLDivElement[]

        divs[this.imgIndex].scrollIntoView({
          // behavior: 'smooth',
          inline: 'center',
        })
      }
    },
    next() {
      this.diff++
    },
    prv() {
      this.diff--
    },
    hide() {
      this.show = false
    },
    closeViewer() {
      this.$emit('update:open', false)
      this.diff = 0
    },
    zoomIn() {
      if (this.scale < 3) this.scale += 1
    },
    zoomOut() {
      if (this.scale > 0.5) {
        if (this.scale > 1) this.scale -= 1
        else this.scale -= 0.2
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.scale-up-enter-active,
.scale-up-leave-active {
  transition: all 1s;
  transition-delay: 200ms;
  transform: scale(1);
  .snap-center,
  .movable {
    transition: all 0.4s;
    transition-delay: calc(var(--count) * 100ms);
  }
}
.scale-up-enter,
.scale-up-leave-to {
  .snap-center,
  .movable {
    // transform: scale(0);
    transform: perspective(150px) rotateX(50deg) scale(0.2);
    opacity: 0;
  }
  opacity: 0;
}
</style>