<template>
  <div>
    <div
      class="p-3"
      :class="{ 'bg-red-200': !isLoggedIn, 'bg-green-200': isLoggedIn }"
    >
      {{ isLoggedIn }}
    </div>
    <h1>hi</h1>
    <button @click="login">login</button>
    <button @click="getMe">getMe</button>
    <nuxt-link to="user/editprofile">edit profile</nuxt-link>
  </div>
</template>

<script lang="ts">
import { gql } from 'graphql-tag'
import Vue from 'vue'
import { mapGetters } from 'vuex'
// import anime from 'animejs'

export default Vue.extend({
  name: 'VmM5',
  data() {
    return {
      user: {
        username: 'admin_uynhgk9j',
        password: '8WF9IU&loED7&ZaB',
      },
    }
  },
  methods: {
    async login() {
      // const res = await this.$authentication.login(this.user)
      // console.log(res)
      const res = await this.$authentication().login(this.user)
      console.log(res)
    },

    async getMe() {
      this.$apolloProvider.defaultClient.stop()
      await this.$apolloProvider.defaultClient.clearStore()

      const VUEQ = gql`
        query UserDetailsQuery {
          viewer {
            id
            firstName
            lastName
          }
        }
      `
      try {
        const { data: m } = await this.$apollo.query({ query: VUEQ })
        console.log(m)
      } catch (error) {
        console.info('CNACELE')
      }
    },
  },
  computed: { ...mapGetters({ isLoggedIn: 'authentication/isLoggedIn' }) },
  mounted() {
    // @ts-ignore
    window.l = this

    console.log('redirected from' + this.$route.redirectedFrom)
  },
})
</script>

<style>
/* .m-title:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 40px;
  background: red;
  bottom: -10px;
  right: 0;
} */

/* we will explain what these classes do next! */
</style>
