import Vue from 'vue'
import VueSnip from 'vue-snip'

import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'

Vue.use(VuePlyr, {
  plyr: {},
})

Vue.use(VueSnip)