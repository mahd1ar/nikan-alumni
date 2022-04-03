import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
    }),
  },
  watch: {
    isLoggedIn(newval: boolean) {
      console.log({ newval })
      if (newval === false) {
        const currentPath = this.$route.path
        this.$router.push({ path: '/login', query: { redirect: currentPath } })
      }
    },
  },
})
