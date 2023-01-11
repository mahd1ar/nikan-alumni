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
      class="mt-2 flex-grow rounded bg-cyan-300 bg-opacity-25 px-4 py-1 hover:bg-opacity-50"
      @click="scan"
    >
      start
    </button>

    <div class="h-48 overflow-auto bg-gray-50">
      <pre v-for="l in logtext" :key="l.id"> {{ l.txt }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'nothing to see here!',
      logtext: [
        {
          id: 0,
          txt: 'app start',
        },
      ],
    }
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    log(t) {
      const nextid = this.logtext.at(-1).id + 1
      this.logtext.push({
        id: nextid,
        txt: t,
      })
    },
    sendData() {
      this.$axios.get(location.origin + '/api/set_laststr?srt=' + this.text)
    },
    async scan() {
      this.log('User clicked scan button')

      try {
        const ndef = new NDEFReader()
        await ndef.scan()
        this.log('> Scan started')

        ndef.addEventListener('readingerror', () => {
          this.log('Argh! Cannot read data from the NFC tag. Try another one?')
        })

        ndef.addEventListener('reading', ({ message, serialNumber }) => {
          this.text = serialNumber
          this.log(`> Serial Number: ${serialNumber}`)
          this.log(`> Records: (${message.records.length})`)
          this.sendData()
        })
      } catch (error) {
        this.log('Argh! ' + error)
      }
    },
  },
}
</script>
