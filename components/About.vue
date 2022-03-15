<template>
  <div>
    <div class="m-auto fixed bottom-10 left-10 z-30">
      <div
        v-for="notif in notifs"
        :key="notif.id"
        class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg"
      >
        <div class="flex flex-row">
          <div class="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5 text-green-500"
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
                <path d="M10.25 2.75h-7.5v10.5h10.5v-3.5" />
                <path d="m5.75 7.75l2.5 2.5l6-6.5" />
              </g>
            </svg>
          </div>
          <div class="ml-2 mr-6">
            <span class="font-semibold">{{ notif.title }}</span>
            <span v-show="notif.body" class="block text-gray-500">{{
              notif.body
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'About',
  computed: {
    ...mapGetters({ notifs: 'notification/notifications' }),
  },
  methods: {
    clicked() {
      this.$nuxt.$emit('notification')
    },
  },
})
</script>