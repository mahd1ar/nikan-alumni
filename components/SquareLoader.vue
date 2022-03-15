<template>
  <transition name="animation">
    <div
      class="bg-[#242F3F] inline-flex justify-center items-center gap-2 p-2 fixed bottom-10 left-10 z-30 rounded"
      v-if="isLoading"
    >
      <div>
        <span class="loader"><span class="loader-inner"></span></span>
      </div>
      <div v-show="loadingMessage" class="text-white">{{ loadingMessage }}</div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'SquareLoader',
  computed: {
    ...mapGetters({
      isLoading: 'loading/isLoading',
      lockScreen: 'loading/lockScreen',
      loadingMessage: 'loading/loadingMessage',
    }),
  },
  mounted() {},
})
</script>

<style scoped>
.animation-enter-active,
.animation-leave-active {
  transition: all 0.2s;
  transform: scale(1);
}
.animation-enter, .animation-leave-to /* .animation-leave-active below version 2.1.8 */ {
  transform: scale(0.9);
  opacity: 0;
}

.loader {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #fff;
  top: 50%;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>