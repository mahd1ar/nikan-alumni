<template>
  <div class="relative flex-grow bg-gray-100">
    <modal
      :type="modal.success ? 'success' : 'error'"
      :open.sync="modal.isOpen"
      :confirm="modal.confirm"
      @yes="regEvent"
    >
      <template #title> {{ modal.title }} </template>
      <template #body> <div v-html="modal.body"></div> </template>
    </modal>

    <modal
      type="about"
      :ok="participantsModal.closeText"
      :open.sync="participantsModal.isOpen"
      :confirm="false"
      @closed="participantsModal.body.length = 0"
    >
      <template #title> {{ participantsModal.title }} </template>
      <template #body>
        <div class="flex flex-col gap-1">
          <<<<<<< HEAD
          <div v-if="totalRegistrants === 0" class="font-bold text-red-500">
            =======
            <div v-if="totalRegistrants === 0" class="font-bold text-red-500">
              >>>>>>> 3bd3bbf60f39479137e88e92f51574d21c50f2cc
              {{ participantsModal.nobodySignUpForThis }}
            </div>

            <div <<<<<<< HEAD class="font-bold text-cyan-500" ======= >>>>>>>
            3bd3bbf60f39479137e88e92f51574d21c50f2cc
            v-if="participantsModal.body.length === 0" class="font-bold
            text-cyan-500" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="mx-auto h-10 w-10"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <circle cx="18" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin=".67"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
              <circle cx="12" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin=".33"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
              <circle cx="6" cy="12" r="0" fill="currentColor">
                <animate
                  attributeName="r"
                  begin="0"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                  repeatCount="indefinite"
                  values="0;2;0;0"
                />
              </circle>
            </svg>
          </div>

          <div
            v-for="(user, index) in participantsModal.body"
            :key="index"
            class="flex flex-row items-center gap-2 rounded-md border border-cyan-200 bg-cyan-50 p-2"
          >
            <img class="h-10 w-10 rounded-full" :src="user.avatar" />

            <div class="flex flex-col items-start">
              <div class="font-semibold">
                {{ user.firstName + ' ' }}
              </div>
              <div class="text-xs text-gray-500">
                {{ user.email }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </modal>

    <header
      class="entry-header entry-header--style-3 relative z-10 bg-neutral-900 pt-16 dark:bg-black md:py-20 lg:py-28"
    >
      <div class="container relative z-10">
        <div class="max-w-screen-md">
          <div class="nc-SingleHeader space-y-5">
            <!-- CATEGORIES -->
            <div class="nc-CategoryBadgeList flex flex-wrap">
              <a
                href="https://ncmaz.chisnghiax.com/category/outdoors/"
                rel="category tag"
                >Outdoors</a
              >
            </div>

            <!-- TITLE -->
            <h1
              class="entry-title max-w-4xl text-3xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-4xl md:!leading-[120%] lg:text-5xl"
            >
              {{ title }}
            </h1>
            <!-- // ========== SHOW EXCERPT ========== -->

            <!-- DIVIDER BORDER -->
            <div
              class="w-full border-b border-neutral-100 dark:border-neutral-800"
            ></div>

            <!-- META -->
            <div
              class="flex flex-col justify-around space-y-5 lg:flex-row lg:items-end lg:space-y-0 lg:space-x-5"
            >
              <div
                class="flex flex-shrink-0 items-center gap-2 text-left text-sm leading-none text-neutral-700 dark:text-neutral-200"
                data-nc-id="PostMeta2"
              >
                <a
                  class="flex items-center space-x-2"
                  href="https://ncmaz.chisnghiax.com/author/ncmaz/"
                >
                  <div
                    class="wil-avatar relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-xl font-semibold uppercase text-neutral-100 shadow-inner ring-1 ring-white dark:ring-neutral-900 sm:h-11 sm:w-11"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                      />
                      <path
                        fill="currentColor"
                        d="M11 11h2v6h-2zm0-4h2v2h-2z"
                      />
                    </svg>
                  </div>
                </a>
                <div class="mr-3 text-right">
                  <div class="flex items-center text-right">
                    <a
                      class="block font-semibold"
                      href="https://ncmaz.chisnghiax.com/author/ncmaz/"
                    >
                      {{ category }}
                    </a>
                  </div>
                  <div class="mt-[6px] text-xs">
                    <span class="text-neutral-700 dark:text-neutral-300">
                      {{ date }}
                    </span>

                    <!-- <span class="mx-2 font-semibold">·</span>
                    <span class="text-neutral-700 dark:text-neutral-300">
                      <span class="span-reading-time rt-reading-time"
                        ><span class="rt-label rt-prefix"></span>
                        <span class="rt-time"> 3</span>
                        <span class="rt-label rt-postfix">min read</span></span>
                    </span> -->
                  </div>
                </div>
              </div>

              <div class="flex flex-row items-center gap-2 space-x-2.5">
                <!-- VIEWS COUNT -->
                <button
                  class="relative hidden h-7 items-center justify-center gap-2 rounded-full bg-neutral-800 pl-2 pr-3 text-xs text-neutral-200 transition-colors hover:bg-neutral-500 sm:flex sm:h-8 sm:min-w-[68px] sm:text-sm"
                  title="تعداد ثبت نام کنندگان"
                  @click="getEventParticipants"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="h-5 w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M8 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm8 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-8 2a7.98 7.98 0 0 1 6 2.708V19H2v-1.292A7.98 7.98 0 0 1 8 15Zm8 4v-2.048l-.5-.567a10.057 10.057 0 0 0-1.25-1.193A8.028 8.028 0 0 1 16 15a7.98 7.98 0 0 1 6 2.708V19h-6Z"
                    />
                  </svg>
                  <span class="">
                    {{ totalRegistrantsFa }}
                  </span>
                </button>

                <!-- COMMENT COUNTS -->
                <button
                  class="relative hidden h-7 items-center justify-center rounded-full bg-neutral-800 pl-2 pr-3 text-xs text-neutral-200 transition-colors sm:flex sm:h-8 sm:min-w-[68px] sm:text-sm"
                  title="Comments"
                  href="https://ncmaz.chisnghiax.com/sint-est-autem-quibusdam-asperiores-occaecati-voluptatem/#comments"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                    ></path>
                  </svg>

                  <span
                    class="mr-1 whitespace-nowrap text-neutral-900 group-hover:text-teal-600 dark:text-neutral-200"
                  >
                    {{ duration }}
                    {{ delimiter }}
                  </span>
                </button>

                <!-- DIVIDER -->
                <div class="px-1">
                  <div
                    class="h-6 border-l border-neutral-200 dark:border-neutral-700"
                  ></div>
                </div>

                <div v-if="canRegister" class="relative inline-block text-left">
                  <div
                    v-if="$apollo.loading"
                    class="relative flex items-center justify-center gap-2 rounded-3xl py-1 px-2 transition-all duration-300"
                    :style="regBtnStyle"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="h-7 w-7"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="18" cy="12" r="0" fill="currentColor">
                        <animate
                          attributeName="r"
                          begin=".67"
                          calcMode="spline"
                          dur="1.5s"
                          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                          repeatCount="indefinite"
                          values="0;2;0;0"
                        />
                      </circle>
                      <circle cx="12" cy="12" r="0" fill="currentColor">
                        <animate
                          attributeName="r"
                          begin=".33"
                          calcMode="spline"
                          dur="1.5s"
                          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                          repeatCount="indefinite"
                          values="0;2;0;0"
                        />
                      </circle>
                      <circle cx="6" cy="12" r="0" fill="currentColor">
                        <animate
                          attributeName="r"
                          begin="0"
                          calcMode="spline"
                          dur="1.5s"
                          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                          repeatCount="indefinite"
                          values="0;2;0;0"
                        />
                      </circle>
                    </svg>
                  </div>

                  <button
                    v-else
                    class="relative flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl py-2 px-4 transition-all duration-300"
                    title="Share with"
                    :style="regBtnStyle"
                    :class="{
                      'rainbow-shadow': registrationStatus === 'notregisterd',
                    }"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="askForConfirmRegEvent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="h-5 w-5 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="11"
                        cy="8"
                        r="2"
                        fill="currentColor"
                        opacity=".3"
                      />
                      <path
                        fill="currentColor"
                        d="M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18z"
                        opacity=".3"
                      />
                      <path
                        fill="currentColor"
                        d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2zm10.6-5.5l-5.13 5.17l-2.07-2.08L12 17l3.47 3.5L22 13.91z"
                      />
                    </svg>

                    {{ regBtnMessage }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-8 md:absolute md:top-0 md:left-0 md:bottom-0 md:mt-0 md:w-1/2 lg:w-2/5 2xl:w-1/3"
      >
        <div
          class="rigth-0 absolute top-0 bottom-0 hidden w-1/5 bg-gradient-to-l from-neutral-900 dark:from-black md:block"
        ></div>

        <!-- <img
          width="2250"
          height="1500"
          src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2339009-2.jpeg"
          class="block w-full h-full object-cover wp-post-image"
          alt=""
          loading="lazy"
        /> -->
        <img
          v-if="image"
          :src="image"
          class="block h-full w-full object-cover"
          alt=""
          loading="lazy"
        />
      </div>
    </header>

    <!-- Start Main -->
    <main class="mx-w-6xl container mx-auto py-4">
      <content-field :html="content"></content-field>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Dict } from '~/data/utils/dictionary'

import regEvent from '@/apollo/mutation/event-registration.gql'

import {
  EventParticipantsQuery,
  EventParticipantsQueryVariables,
  EventRegistrationMutation,
  EventRegistrationMutationVariables,
} from '~/types/types'
import {
  toIndiaDigits,
  wordpressDateToFormattedJalali,
  wordpressDateToJalali,
} from '~/data/utils'
import onLoggedOut from '~/mixins/on-logged-out'
import participants from '@/apollo/queries/event-participants.gql'

interface WPRestEvent {
  comment_ID: string
  comment_agent: string
  comment_approved: string
  comment_author: string
  comment_author_IP: string
  comment_author_email: string
  comment_author_url: string
  comment_content: string
  comment_date: string
  comment_date_gmt: string
  comment_karma: string
  comment_parent: string
  comment_post_ID: string
  comment_type: string
  user_id: string
}

export interface Category {
  term_id: number
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
}

export interface WpUpcommingEvent {
  iD: number
  post_author: string
  post_date: string
  post_date_gmt: string
  post_content: string
  post_title: string
  post_excerpt: string
  post_status: string
  comment_status: string
  ping_status: string
  post_password: string
  post_name: string
  to_ping: string
  pinged: string
  post_modified: string
  post_modified_gmt: string
  post_content_filtered: string
  post_parent: number
  guid: string
  menu_order: number
  post_type: string
  post_mime_type: string
  comment_count: string
  filter: string
  gqlid: string
  featured_image: string
  category: Category[]
  duration: string
}

export interface WPRegedUsers {
  comment_ID: string
  comment_post_ID: string
  comment_author: string
  comment_author_email: string
  comment_author_url: string
  comment_author_IP: string
  comment_date: string
  comment_date_gmt: string
  comment_content: string
  comment_karma: string
  comment_approved: string
  comment_agent: string
  comment_type: string
  comment_parent: string
  user_id: string
}

enum commentStatus {
  Approved = '1',
  halt = '0',
  spam = 'SPAM',
  trashed = 'TRASH',
}

export default Vue.extend({
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],
  props: {
    canRegister: { type: Boolean, default: true },
  },
  data() {
    return {
      participantsModal: {
        isOpen: false,
        title: '',
        body: [] as { firstName: string; avatar: string; email: string }[],
        closeText: '',
        nobodySignUpForThis: '',
      },
      modal: {
        isOpen: false,
        title: '',
        body: '',
        confirm: true,
        success: true,
      },
      postId: null as null | string,
      title: '',
      content: '',
      category: '',
      image: '',
      totalRegistrants: 0 as number,
      duration: '1', // day
      delimiter: null as 'روز' | 'ساعت' | null,
      date: '',
      registrationStatus: null as
        | 'registerd'
        | 'notregisterd'
        | 'halt'
        | 'not approved'
        | null,
    }
  },
  async fetch() {
    try {
      // const variables: EventQueryVariables = {
      //   id: decodeURIComponent(this.$route.params.id),
      // }

      // const { data } = await this.$apollo.query<EventQuery>({
      //   query,
      //   variables,
      // })
      const { data } = await this.$axios.get<WpUpcommingEvent>(
        'https://nikan-alumni.org/wp-json/myplugin/v1/upcommingevent/' +
          this.$route.params.id
      )

      if (!data) return

      this.title = data.post_title || ''
      this.content = data.post_content || ''

      if (data.category.length) {
        this.category = data.category[0].name || ''
      }

      this.image = data.featured_image || ''

      this.totalRegistrants = Number(data.comment_count) || 0

      let duration = ''
      if (data.duration) {
        const d = parseFloat(data.duration)

        if (d) {
          if (d < 1) {
            duration = toIndiaDigits(Math.ceil(d * 24))
            this.delimiter = 'ساعت'
          } else {
            duration = toIndiaDigits(d)
            this.delimiter = 'روز'
          }
        }
      }

      this.duration = duration

      this.date = wordpressDateToJalali(data.post_date).join('/') || ''
    } catch (error) {
      if (process.client)
        this.$about.error({ title: Dict.fetch_err, body: String(error) })
      console.error(error)
      this.$router.push('/user/events')
    }
  },

  computed: {
    totalRegistrantsFa() {
      const x = toIndiaDigits(this.totalRegistrants)
      return x
    },
    regBtnMessage() {
      let btn = ''
      if (this.registrationStatus === 'notregisterd') btn = Dict.event_reg_now
      else if (this.registrationStatus === 'registerd') btn = Dict.event_reg
      else if (this.registrationStatus === 'halt') btn = Dict.event_reg_halt

      return btn
    },
    regBtnStyle() {
      let style = {
        backgroundImage: 'linear-gradient(to left,#0e2f2e, #233646)',
        color: '#9bdde0',
        boxShadow: '0px 0px 10px 0px rgb(0 0 0)',
        fontWeight: 100,
      } as { [key: string]: string | number }

      if (this.registrationStatus === 'registerd')
        style = {
          backgroundImage: 'linear-gradient(to left,#0e2f2e, #233646)',
          color: '#9bdde0',
          fontWeight: 100,
          boxShadow: '0px 0px 10px 0px rgb(0 0 0)',
        }
      else if (this.registrationStatus === 'halt')
        style = {
          fontWeight: 100,
          backgroundImage: 'linear-gradient(to left,#c3e6e3, #58d5dd)',
          color: '#112829',
          boxShadow: '0px 0px 10px 0px rgb(0 0 0)',
        }
      else if (this.registrationStatus === 'notregisterd') {
        style = {
          borderRadius: '0px',
          width: '229px',
          fontSize: '14px',
          fontWeight: 100,
          height: '37px',
          color: '#ddd9d9',
        }
      }

      return style
    },
  },

  mounted() {
    // @ts-ignore
    window.id = this
    if (this.canRegister) this.getRegistrationStatus()
  },

  methods: {
    async getEventParticipants() {
      // TODO : dont show modal if non has registerrd
      this.participantsModal.isOpen = true
      this.participantsModal.title = Dict.event_modal_partic_title
      this.participantsModal.closeText = Dict.event_modal_partic_close
      this.participantsModal.nobodySignUpForThis =
        Dict.event_modal_partic_nobody_signup_for_this
      try {
        const { data } = await this.$axios.post<WPRegedUsers[]>(
          'wp-json/myplugin/v1/getregisteredusers',
          {
            'event-id': this.$route.params.id,
          }
        )

        console.log(data)

        data.forEach((i) => {
          this.participantsModal.body.push({
            firstName: i?.comment_author || 'firstname',
            avatar: '', // TODO  : get avatar url
            email: i?.comment_author_email || '-',
          })
        })

        if (data.length === 0) {
          this.participantsModal.isOpen = false
        }
      } catch (error) {
        console.error(error)
        this.$about.error({ title: Dict.general_err, body: String(error) })
        this.participantsModal.isOpen = false
      }
    },
    async getRegistrationStatus() {
      try {
        const { data } = await this.$axios.post<WPRestEvent[]>(
          `https://nikan-alumni.org/wp-json/myplugin/v1/event`,
          {
            event_id: decodeURIComponent(this.$route.params.id),
            user_id: this.$store.state.authentication.user.id,
          }
        )
        console.log(data)
        if (data.length > 0) {
          if (data[0].comment_approved === commentStatus.Approved) {
            this.registrationStatus = 'registerd'
          } else if (data[0].comment_approved === commentStatus.halt) {
            this.registrationStatus = 'halt'
          } else {
            this.registrationStatus = 'not approved'
          }
        } else {
          this.registrationStatus = 'notregisterd'
        }

        console.log(data)
      } catch (error) {
        console.error(error)
      }
    },
    askForConfirmRegEvent() {
      if (this.registrationStatus === 'notregisterd') {
        this.modal.confirm = true
        this.modal.isOpen = true
        this.modal.success = true
        this.modal.title = 'تایید'
        this.modal.body = `برای ثبت نام در  رویداد "${this.title}" مطمئن هستید؟`
      }
    },
    async regEvent() {
      const variables: EventRegistrationMutationVariables = {
        clientMutationId: String(~~(Math.random() * 10000)),
        content: '[REG] i like to regester',
        commentOn: Number(encodeURIComponent(this.$route.params.id!)),
      }
      try {
        const responce = await this.$apollo.mutate<EventRegistrationMutation>({
          mutation: regEvent,
          variables,
        })
        const data = responce.data

        if (data?.createComment) {
          if (data.createComment.success) {
            this.modal.isOpen = true
            this.modal.title = 'موفقیت آمیز'
            this.modal.body =
              'ثبت نام شما در رویداد' +
              this.title +
              'موفقیت آمیز بود ' +
              '<br />' +
              'به امید دیدار شما در این رویداد'

            this.modal.confirm = false
            this.modal.success = true
            this.getRegistrationStatus()

            this.totalRegistrants++
          } else {
            this.modal.isOpen = true
            this.modal.title = Dict.general_err
            this.modal.body =
              'در فرایند ثبت نام شما خطایی رخ داده' +
                'پیام خطا : ' +
                '<br />' +
                responce.errors?.join(',') || ''

            this.modal.confirm = false
            this.modal.success = false
          }

          if (data.createComment.comment) {
            console.log('comment is')
            console.log(data.createComment.comment)
          } else {
            console.log('waiting to approve')
          }
        }
      } catch (error) {
        this.modal.isOpen = true
        this.modal.title = Dict.general_err
        this.modal.body =
          'در فرایند ثبت نام شما خطایی رخ داده' +
          'پیام خطا : ' +
          '<br />' +
          String(error)

        this.modal.confirm = false
        this.modal.success = false
      }
    },
  },
})
</script>

<style scoped>
.rainbow-shadow {
  --rainbow-gradient-shadow: linear-gradient(
    45deg,
    #007cf0,
    #00dfd8,
    #ff0080,
    #007cf0
  );
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 400px;
  height: 100px;
  background: #000;
}
.rainbow-shadow:before,
.rainbow-shadow:after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  background: var(--rainbow-gradient-shadow);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: animate 20s linear infinite;
}

.rainbow-shadow:after {
  filter: blur(20px);
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
