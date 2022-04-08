<template>
  <div>
    <client-only>
      <transition name="anime">
        <div
          v-if="open"
          dir="rtl"
          class="main-modal h-100 fixed inset-0 z-30 flex w-full items-center justify-center overflow-hidden"
        >
          <!-- overlay -->
          <div
            class="main-modal__overlay absolute inset-0"
            style="background: rgba(0, 0, 0, 0.7)"
            @click="close()"
          ></div>

          <div
            :class="{
              'main-modal__container': true,
              'main-modal__container--success': !confirm && type === 'success',
              'main-modal__container--error': !confirm && type === 'error',
            }"
          >
            <div class="modal-content py-4 px-6 text-left">
              <!--Title-->
              <div class="flex items-center justify-between pb-3">
                <div
                  v-if="confirm"
                  style="--count: 1"
                  class="main-modal__title text-2xl font-bold"
                >
                  <slot name="title"></slot>
                </div>

                <div class="modal-close z-50 cursor-pointer" @click="close()">
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    ></path>
                  </svg>
                </div>
              </div>

              <!--Body-->
              <div
                v-if="!confirm"
                class="text-center text-lg"
                style="--count: 1"
              >
                <div v-if="type === 'success'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="mx-auto h-20 w-20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z"
                      class="clr-i-outline clr-i-outline-path-1"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </div>
                <div v-if="type === 'error'">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="mx-auto h-20 w-20 p-1"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M20 20L4 4m16 0L4 20"
                    />
                  </svg>
                </div>

                <slot name="title"></slot>
              </div>
              <div
                style="--count: 2"
                :class="{
                  'main-modal__body my-5': true,
                  'text-center': !confirm,
                  'text-right': confirm,
                }"
              >
                <slot name="body"></slot>
              </div>
              <!--buttons-->
              <div
                v-if="confirm"
                style="--count: 3"
                class="main-modal__buttons flex justify-end gap-2 pt-2"
              >
                <button
                  class="rounded px-4 py-1 text-gray-500 hover:bg-gray-100"
                  @click="$emit('cancel') && close()"
                >
                  {{ cancel }}
                </button>
                <button
                  class="rounded bg-green-500 px-4 py-1 text-green-50 hover:bg-green-400"
                  @click="$emit('yes') && close()"
                >
                  {{ yes }}
                </button>
                <slot name="buttons"></slot>
              </div>

              <div
                v-if="!confirm"
                style="--count: 3"
                class="main-modal__buttons flex justify-end gap-2 pt-2"
              >
                <button
                  :class="`flex-grow rounded px-4 py-1 hover:bg-opacity-50 ${
                    type === 'about' ? 'bg-slate-300' : 'bg-white'
                  } bg-opacity-25`"
                  @click="$emit('ok') && close()"
                >
                  {{ ok }}
                </button>
                <slot name="buttons"></slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dict } from '~/data/utils/dictionary'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  props: {
    open: { type: Boolean, default: false },
    confirm: { type: Boolean, default: false },
    type: { type: String, default: 'success' }, // success error about
    ok: {
      type: String,
      default: Dict.btn_ok,
    },
    cancel: {
      type: String,
      default: Dict.btn_cancel,
    },
    yes: {
      type: String,
      default: Dict.btn_yes,
    },
  },

  methods: {
    close() {
      this.$emit('update:open', false)
      this.$emit('closed', false)
    },
  },
})
</script>

<style scoped>
.main-modal__container {
  @apply relative z-50 mx-auto max-h-[80%] w-11/12 overflow-y-hidden rounded border bg-white shadow-lg md:max-w-md;
}

.main-modal__body {
  max-height: calc(80vh - 77px - 94px);
  overflow: auto;
}

.main-modal__container--success {
  @apply border-green-900 bg-green-600 bg-gradient-to-tr from-green-800 text-white;
}

.main-modal__container--error {
  @apply border-red-900 bg-red-600 bg-gradient-to-tr from-red-800 text-white;
}

.anime-enter-active .main-modal__container,
.anime-leave-active .main-modal__container {
  transition: all 0.2s;
  transform: scale(1);
  transform-origin: top center;
}
.anime-enter .main-modal__container, .anime-leave-to .main-modal__container /* .anime-leave-active below version 2.1.8 */ {
  transform: perspective(235px) rotateX(350deg) scale(0.9);
  transform-origin: top center;
  opacity: 0;
}

.anime-enter-active .main-modal__title,
.anime-enter-active .main-modal__body,
.anime-enter-active .main-modal__buttons,
.anime-leave-active .main-modal__title,
.anime-leave-active .main-modal__body,
.anime-leave-active .main-modal__buttons {
  transition: all 0.6s;
  transition-delay: calc(var(--count) * 60ms);
  opacity: 1;
}
.anime-enter .main-modal__title,
.anime-enter .main-modal__body,
.anime-enter .main-modal__buttons,
.anime-leave-to .main-modal__title,
.anime-leave-to .main-modal__body,
.anime-leave-to .main-modal__buttons {
  opacity: 0;
}

.anime-enter-active,
.anime-leave-active {
  transition: all 0.6s;
  opacity: 1;
}
.anime-enter , .anime-leave-to  /* .anime-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
