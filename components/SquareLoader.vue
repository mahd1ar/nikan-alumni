<template>
  <transition name="v-openwindow">
    <div
      class="bg-[#242F3F] inline-flex justify-center items-center gap-3 p-2 rounded"
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
.loader {
  display: inline-block;
  width: 28px;
  height: 28px;
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
