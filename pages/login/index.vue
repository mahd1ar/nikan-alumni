<template>
  <div class="flex-center h-screen w-full">
    <div class="container mx-auto">
      <div
        class="mx-auto my-auto flex max-w-sm overflow-hidden rounded-lg bg-gray-800 shadow-lg lg:max-w-4xl"
      >
        <div
          :class="
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          "
          style="background-image: url('yard.jpg')"
          class="hidden transform-gpu bg-cover transition-all duration-700 ease-out lg:block lg:w-1/2"
        >
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!4v1646566186841!6m8!1m7!1sCAoSLEFGMVFpcFAtVTBuUUdLSl9KOFRVSHBVOVc2c3NLeGJaSElQaWkzbGh3V0I4!2m2!1d35.7882112!2d51.42718499999999!3f280!4f20!5f0.7820865974627469"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="w-full h-full"
          ></iframe> -->
          <nuxt-link
            class="mt-2 ml-2 inline-flex cursor-pointer rounded-md bg-white bg-opacity-25 px-4 py-2 hover:bg-opacity-50"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>

            بازگشت
          </nuxt-link>
        </div>

        <transition name="anime" mode="out-in">
          <login-fields v-if="action === 'login'" />
          <request-reset-password
            v-else-if="action === 'request_for_reset_password'"
          />
          <reset-password v-else />
        </transition>
      </div>
    </div>
    <modal :open.sync="modal.isOpen" type="error" @closed="changeCard">
      <template #title>
        <h1>
          {{ modal.title }}
        </h1>
      </template>
      <template #body>
        {{ modal.body }}
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapGetters } from 'vuex'
import LoginFields from '~/components/login/LoginFields.vue'
import RequestResetPassword from '~/components/login/RequestResetPassword.vue'
import ResetPassword from '~/components/login/ResetPassword.vue'
import { Dict } from '~/data/utils/dictionary'
export default Vue.extend({
  components: {
    LoginFields,
    RequestResetPassword,
    ResetPassword,
  },
  middleware: ['unauthenticated'],
  data() {
    return {
      modal: {
        isOpen: false,
        title: '',
        body: '',
      },
      // action: 'login' as 'login' | 'request_for_reset_password' | 'rp',
      loaded: false,
    }
  },

  asyncData(args) {
    args.redirect('https://nikpeyvand.nikan-alumni.com/login')
  },

  computed: {
    action() {
      const action = this.$route.query.action as string | null

      if (
        action &&
        (action === 'login' ||
          action === 'request_for_reset_password' ||
          action === 'rp')
      )
        return action
      else return 'login'
    },
    ...mapGetters({
      isLoggedIn: 'authentication/isLoggedIn',
    }),
  },
  watch: {
    isLoggedIn(newval: boolean) {
      if (newval) {
        let nextPath = this.$route.query.redirect
        if (nextPath) {
          if (Array.isArray(nextPath))
            nextPath = nextPath[0] ? nextPath[0] : '/'

          this.$router.push(decodeURIComponent(nextPath))
        } else {
          this.$router.push('/user/userprofile')
        }
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loaded = true
      if (this.$route.query.error === 'invalidkey') {
        this.modal.isOpen = true
        this.modal.title = Dict.rp_error_invalidkey_title
        this.modal.body = Dict.rp_error_invalidkey_body
      }
    })
  },

  methods: {
    changeCard() {
      console.log('change card')
      this.$router.push({
        path: '/login',
        query: {
          action: 'login',
        },
      })
    },
  },
})
</script>

<style scoped>
.anime-enter-active,
.anime-leave-active {
  transition: all 0.2s;
  transform: translateX(0px);
}
.anime-enter {
  transform: translateX(20px);
  opacity: 0;
}

.anime-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
