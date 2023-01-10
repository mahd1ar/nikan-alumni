<template>
  <div class="container mx-auto mt-10">
    <div>
      <label class="text-gray-700" for="emailAddress">serial number</label>
      <input
        id="emailAddress"
        v-model="text"
        disabled
        type="email"
        class="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
      />
    </div>

    <button
      class="mt-2 flex-grow rounded bg-slate-300 bg-opacity-25 px-4 py-1 hover:bg-opacity-50"
      @click="copytoclip"
    >
      copy to clipboard
    </button>
  </div>
</template>

<script>
import { timeout } from '~/data/utils'

export default {
  data() {
    return {
      text: 'HIther',
    }
  },
  mounted() {
    console.log('mounted')
    this.getData()
  },
  methods: {
    async getData() {
      try {
        await timeout(2000)
        const { data } = await this.$axios.get(
          location.origin + '/api/get_laststr'
        )
        console.log(data)
        this.text = data.str
      } catch (error) {
        alert(error)
      } finally {
        this.getData()
      }
    },
    copytoclip() {
      navigator.clipboard.writeText(this.text)

      // Alert the copied text
      alert('Copied the text: ' + this.text)
    },
  },
}
</script>
