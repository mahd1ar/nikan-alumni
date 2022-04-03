<template>
  <div>
    <div v-if="hasSlot === false" class="flex flex-row-reverse gap-2">
      <span
        v-for="(countDown, index) in time"
        :key="index"
        class="w-10 h-10 bg-white bg-opacity-50 rounded flex flex-col justify-center items-center"
      >
        <span class="text-black font-bold -mb-1">
          {{ countDown }}
        </span>

        <span class="font-extralight text-xs text-gray-800 -mb-1">
          {{ titles[index] }}
        </span>
      </span>
    </div>

    <slot :status="status" :time="time"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { toIndiaDigits, twoDigits } from '~/data/utils'
enum EventStatus {
  ahead = -1,
  current,
  passed,
}

export default Vue.extend({
  name: 'CountDown',
  props: {
    duration: {
      type: Number,

      default: () => 0,
    },
    startingFrom: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hasSlot: false,
      interval: 0,
      status: -2 as EventStatus,
      time: { day: '', hour: '', min: '', sec: '' },
      titles: Object.freeze({
        day: 'روز',
        hour: 'ساعت',
        min: 'دقیقه',
        sec: 'ثانیه',
      }),
    }
  },
  watch: {
    status() {
      this.$emit('updateStatus', this.status)
    },
  },
  mounted() {
    this.getStatus()

    this.hasSlot = this.$scopedSlots.default
      ? !!this.$scopedSlots.default(0)
      : false
  },
  beforeDestroy() {
    this.clearInterval()
  },
  methods: {
    clearInterval() {
      clearInterval(this.interval)
    },
    getStatus() {
      console.log('getStatus')
      const startingFrom = ~~(new Date(this.startingFrom).getTime() / 1000)
      const now = ~~(Date.now() / 1000)
      const duration = this.duration * 24 * 3600

      if (startingFrom > now) {
        this.status = EventStatus.ahead

        this.interval = window.setInterval(() => {
          this.calcCountDown()
        }, 1000)
      } else if (startingFrom + duration > now) {
        this.status = EventStatus.current
        this.time.day = '۰'
        this.time.hour = '۰'
        this.time.min = '۰'
        this.time.sec = '۰'
      } else {
        this.status = EventStatus.passed
      }
    },
    calcCountDown() {
      console.log('time')
      const startingFrom = ~~(new Date(this.startingFrom).getTime() / 1000)
      const now = ~~(Date.now() / 1000)
      if (startingFrom < now) {
        this.clearInterval()
        this.getStatus()
      }

      const cd = startingFrom - now

      const h = ~~(cd / 3600)
      const m = ~~((cd - h * 3600) / 60)
      const s = cd - h * 3600 - m * 60
      const day = ~~(h / 24)

      // this.$emit('update:day', toIndiaDigits(twoDigits(day)))
      // this.$emit('update:hour', toIndiaDigits(twoDigits(h - day * 24)))
      // this.$emit('update:min', toIndiaDigits(twoDigits(m)))
      // this.$emit('update:sec', toIndiaDigits(twoDigits(s)))

      this.time.day = toIndiaDigits(twoDigits(day))
      this.time.hour = toIndiaDigits(twoDigits(h - day * 24))
      this.time.min = toIndiaDigits(twoDigits(m))
      this.time.sec = toIndiaDigits(twoDigits(s))
    },
  },
})
</script>