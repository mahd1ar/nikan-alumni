<template>
  <transition-group name="v-openwindow" tag="div">
    <div
      v-for="notif in notifs"
      :key="notif.id"
      class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg my-2"
    >
      <div class="flex flex-row">
        <div class="px-2">
          <!-- tick icon -->
          <svg
            v-show="notif.type === 'success'"
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

          <!-- Error icon -->
          <svg
            v-show="notif.type === 'error'"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            class="w-5 h-5 text-red-500"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M11 7h2v7h-2zm0 8h2v2h-2z" />
            <path
              fill="currentColor"
              d="m21.707 7.293l-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"
            />
          </svg>

          <!-- Info icon         -->
          <svg
            v-show="notif.type === 'info'"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            class="w-5 h-5 text-yellow-500"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"
            />
            <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2z" />
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
  </transition-group>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  computed: {
    ...mapGetters({ notifs: 'notification/notifications' }),
  },
  methods: {
    // clicked() {
    //   this.$nuxt.$emit('notification')
    // },
  },
})
</script>