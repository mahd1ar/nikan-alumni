<template>
  <div class="z-0 h-48">
    <client-only>
      <l-map
        ref="map"
        style="height: 100%"
        :zoom="zoom"
        :center="viewFrom && viewFrom[0] ? [viewFrom[0], viewFrom[1]] : center"
        @click="changeLocation"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker ref="marker" :lat-lng="[lat, lng]">
          <l-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="
                transform: translate3d(50%, -100%, 0px);
                position: relative;
                right: 4px;
                top: 4px;
                stroke: white;
              "
              class="h-8 w-8 shrink-0 text-cyan-400"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="none"
                d="m16 7l1.912 3.667l4.088.506l-3 2.753l.6 4.074l-3.6-2.292L12.4 18l.6-4.074l-3-2.753l4.2-.506L16 7z"
              />
              <path
                fill="currentColor"
                d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm3.6 16L16 15.709L12.4 18l.6-4.074l-3-2.753l4.2-.507L16 7l1.912 3.667l4.088.506l-3 2.753Z"
              />
            </svg>
          </l-icon>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    disabled: { type: Boolean, default: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    zoom: { type: Number, default: 11 },
    viewFrom: {
      type: Array as PropType<number[] | undefined>,
      default: undefined,
    },
  },
  data() {
    return {
      center: [] as number[],
    }
  },
  mounted() {
    // @ts-ignore
    window.map = this
    // if(this.viewFrom && this.viewFrom[0]){

    //   this.center.push(this.viewFrom)
    //   this.center.push(this.lng)

    //   }else{

    this.center.push(this.lat)
    this.center.push(this.lng)
  },
  methods: {
    changeLocation(ev: any) {
      if (this.disabled === false) {
        // @ts-ignore
        this.$refs.marker!.setLatLng([ev.latlng.lat, ev.latlng.lng])

        this.$emit('update:lat', ev.latlng.lat)
        this.$emit('update:lng', ev.latlng.lng)
      }
    },
    changeView(x: number, y: number) {
      this.center[0] = x
      this.center[1] = y
    },
  },
})
</script>
