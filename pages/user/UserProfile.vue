<template>
  <div>
    <section class="body-font text-gray-600">
      <div class="container mx-auto flex flex-col flex-wrap px-5">
        <div class="mb-10 flex flex-wrap">
          <div
            class="title-font inline-flex w-1/2 cursor-pointer items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
            :class="
              activeTabIndex === 0
                ? 'rounded-t border-cyan-500 bg-gray-100  text-cyan-500'
                : 'border-gray-200 hover:text-gray-900'
            "
            @click="activeTabIndex = 0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="ml-3 h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            پروفایل کاربر
          </div>
          <div
            class="title-font inline-flex w-1/2 cursor-pointer items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
            :class="
              activeTabIndex === 1
                ? 'rounded-t border-cyan-500 bg-gray-100  text-cyan-500'
                : 'border-gray-200 hover:text-gray-900'
            "
            @click="activeTabIndex = 1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            ویرایش اطلاعات
          </div>

          <div
            class="title-font inline-flex w-1/2 cursor-pointer items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
            :class="
              activeTabIndex === 2
                ? 'rounded-t border-cyan-500 bg-gray-100  text-cyan-500'
                : 'border-gray-200 hover:text-gray-900'
            "
            @click="activeTabIndex = 2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
            کارت ویزیت
          </div>
          <div
            class="title-font inline-flex w-1/2 items-center justify-center border-b-2 py-3 font-medium leading-none tracking-wider sm:w-auto sm:justify-start sm:px-6"
            :class="
              activeTabIndex === 3
                ? 'rounded-t border-cyan-500 bg-gray-100  text-cyan-500'
                : 'border-gray-200 hover:text-gray-900'
            "
            @click="activeTabIndex = 3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-3 h-5 w-5"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"
              />
            </svg>
            تنظیمات
          </div>
        </div>

        <transition name="v-fade" mode="out-in">
          <div
            id="page-one"
            :key="activeTabIndex"
            v-if="activeTabIndex === 0"
            class="flex items-start gap-2"
          >
            <user-info-card
              v-if="$fetchState.pending === false"
              class="w-7/12"
              :user-info="edituser"
            />

            <div class="w-5/12 overflow-hidden">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  رویداد های من
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  شما در این رویداد ها شرکت کرده اید
                </p>
              </div>
              <div
                v-if="userRegisterdInThis.length === 0"
                class="border-t p-10 text-center font-bold text-gray-400"
              >
                هیچ رویدادی وجود ندارد
              </div>
              <div v-else class="border-t border-gray-200">
                <dl>
                  <div
                    v-for="(e, index) in userRegisterdInThis"
                    :key="index"
                    class="bg-green-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt
                      class="flex items-center gap-2 text-sm font-medium text-gray-500"
                    >
                      <div style="color: #41bf6d">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          class="h-5 w-5"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path
                              d="m15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"
                            />
                          </g>
                        </svg>
                      </div>
                      {{ e.date }}
                    </dt>
                    <dd
                      class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                    >
                      {{ e.eventName }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div
            :key="activeTabIndex"
            v-else-if="activeTabIndex === 1"
            id="page-two"
            class="flex items-start gap-2"
          >
            <user-info-edit
              :loading="$fetchState.pending"
              :user="edituser"
            ></user-info-edit>
          </div>

          <div
            :key="activeTabIndex"
            v-else-if="activeTabIndex === 2"
            id="page-two"
            class="flex flex-col items-start justify-start gap-2"
          >
            <div class="max-w-xl gap-y-4 px-4 md:gap-6 xl:p-0">
              <div
                class="col-span-2 flex flex-row-reverse justify-between rounded bg-gradient-to-r from-blue-500 to-blue-800 p-6"
              >
                <div class="flex-center">
                  <img :src="QRCode" class="p-3" alt="" />
                </div>
                <div class="flex flex-col justify-around">
                  <p class="text-lg font-bold text-white">
                    مشاهده ی کارت کارت ویزیت انلاین
                  </p>

                  <nuxt-link
                    class="mt-4 flex flex-row-reverse items-center justify-center gap-2 text-gray-50"
                    to="/user/vcard"
                  >
                    <p
                      class="max-w-sm text-xs font-light leading-tight md:text-sm"
                    >
                      <code class="w-full">
                        https://nikan-alumni.com/user/vcard/35
                      </code>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style="color: #f3f4f6"
                      class="ml-auto h-5 w-5 flex-shrink-0"
                      role="img"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"
                      />
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gql from 'graphql-tag'
import fetchMe from '@/apollo/queries/fetch-me.gql'
import onLoggedOut from '~/mixins/on-logged-out'
import { FetchMeQuery, UpdateUserMutationVariables } from '~/types/types'
import { UserFullProfile } from '@/data/GlobslTypes'
import { BioHandler, toIndiaDigits, wordpressDateToJalali } from '~/data/utils'
import UserInfoCard from '~/components/user-profile/UserInfoCard.vue'
import updateUserMutationgql from '@/apollo/mutation/update-user.gql'
import UserInfoEdit from '~/components/form/UserInfoEdit.vue'

export default Vue.extend({
  components: { UserInfoCard, UserInfoEdit },
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],

  data() {
    return {
      activeTabIndex: 1,
      userRegisterdInThis: [] as { eventName: string; date: string }[],
      showuser: {} as UserFullProfile,
      edituser: {} as UserFullProfile,
    }
  },
  async fetch() {
    const { data } = await this.$apollo.query<FetchMeQuery>({
      fetchPolicy: 'no-cache',
      query: fetchMe,
    })

    if (data.viewer) {
      const userTemplate = {} as UserFullProfile

      userTemplate.id = data.viewer.id
      userTemplate.databaseId = data.viewer.databaseId
      userTemplate.firstName = data.viewer.firstName || ''
      userTemplate.lastName = data.viewer.lastName || ''
      userTemplate.email = data.viewer.email || ''
      userTemplate.mobile = data.viewer.user_acf?.mobile || ''
      userTemplate.occupation = data.viewer.user_acf?.occupation || ''
      userTemplate.avatar = data.viewer.avatar?.url || ''
      userTemplate.gen =
        data.viewer.user_acf?.gen && Number(data.viewer.user_acf.gen)
          ? data.viewer.user_acf.gen
          : ''
      userTemplate.website = data.viewer.url || ''
      userTemplate.jobLocation = {
        lat: 0,
        lng: 0,
      }
      // this.location.show = false
      if (data.viewer.user_acf?.jobLocation) {
        const latlng = data.viewer.user_acf.jobLocation.split(',')
        if (latlng.length === 2) {
          if (parseFloat(latlng[0]) && parseFloat(latlng[1])) {
            // this.location.show = true
            userTemplate.jobLocation.lat = parseFloat(latlng[0])
            userTemplate.jobLocation.lng = parseFloat(latlng[1])
          }
        }
      }

      const { biography, socialMedias } = BioHandler.decompose(
        data.viewer.description || ''
      )
      userTemplate.bio = biography
      userTemplate.socialMedias = {}
      userTemplate.socialMedias.instagram = socialMedias.instagram
      userTemplate.socialMedias.twitter = socialMedias.twitter
      userTemplate.socialMedias.linkedin = socialMedias.linkedin

      //   const x : UserFullProfile = {...userTemplate}

      let k: keyof typeof userTemplate

      for (k in userTemplate) {
        // @ts-ignore
        this.showuser[k] = userTemplate[k]
        // @ts-ignore
        this.edituser[k] = userTemplate[k]
        // @ts-ignore
      }
    }
  },
  computed: {
    QRCode() {
      const url = encodeURIComponent(
        'https://nikan-alumni.com/user/vcard/' +
          this.$store.state.authentication.user.id
      )

      return `https://chart.googleapis.com/chart?cht=qr&chl=${url}&chs=180x180&choe=UTF-8&chld=L|2`
    },
  },
  mounted() {
    // @ts-ignore
    window.ml = this
    this.getEvents()
    //  type SonRef = InstanceType<typeof NuxtLogo>
    // const c = (this.$refs.element as SonRef)

    // (this.$children[0] as typeof NuxtLogo).sayHi()
  },
  methods: {
    async getEvents() {
      const query = gql`
        query user {
          viewer {
            comments(first: 10) {
              nodes {
                id
              }
            }
          }
        }
      `

      const { data } = await this.$apollo.query({
        fetchPolicy: 'cache-first',
        query,
        // variables: { id: 'dXNlcjoy' },
      })

      console.log(data.viewer)

      interface FutureEvent {
        post_name: string
        post_date: string
      }

      const { data: data2 } = await this.$axios.get<FutureEvent[]>(
        '/wp-json/myplugin/v1/myevents/' +
          this.$store.state.authentication.user.id
      )
      this.userRegisterdInThis.splice(0, this.userRegisterdInThis.length)
      data2.forEach((event) => {
        this.userRegisterdInThis.push({
          eventName: decodeURIComponent(event.post_name),
          date: toIndiaDigits(wordpressDateToJalali(event.post_date).join('/')),
        })
      })
    },
    generateOutput() {
      let contentChangedFlag = false
      const updateUserMutationVariables = {
        id: this.showuser.id,
        clientMutationId: 'upusr' + ~~(Math.random() * 1000),
      } as UpdateUserMutationVariables

      const urls1 = [
        this.showuser.socialMedias.instagram || '',
        this.showuser.socialMedias.linkedin || '',
        this.showuser.socialMedias.twitter || '',
      ]

      const urls2 = [
        this.edituser.socialMedias.instagram || '',
        this.edituser.socialMedias.linkedin || '',
        this.edituser.socialMedias.twitter || '',
      ]

      const description1 = BioHandler.compose(this.showuser.bio, urls1)
      const description2 = BioHandler.compose(this.edituser.bio, urls2)
      if (description1 !== description2) {
        contentChangedFlag = true
        updateUserMutationVariables.description = description2
      }

      const location1 = [
        this.showuser.jobLocation.lat,
        this.showuser.jobLocation.lng,
      ].join(',')
      const location2 = [
        this.edituser.jobLocation.lat,
        this.edituser.jobLocation.lng,
      ].join(',')

      if (location1 !== location2) {
        contentChangedFlag = true
        updateUserMutationVariables.jobLocation = location2
      }

      if (this.showuser.firstName === this.edituser.firstName) {
        contentChangedFlag = true
        updateUserMutationVariables.firstName = this.edituser.firstName
      }

      if (this.showuser.lastName === this.edituser.lastName) {
        contentChangedFlag = true
        updateUserMutationVariables.lastName = this.edituser.lastName
      }

      if (this.showuser.mobile === this.edituser.mobile) {
        contentChangedFlag = true
        updateUserMutationVariables.mobile = this.edituser.mobile
      }

      if (this.showuser.occupation === this.edituser.occupation) {
        contentChangedFlag = true
        updateUserMutationVariables.occupation = this.edituser.occupation
      }

      if (contentChangedFlag) {
        console.log(updateUserMutationVariables)

        return updateUserMutationVariables
      } else {
        alert('nothing changed!')
        return false
      }
    },
    async update() {
      const mutVar = this.generateOutput()
      if (mutVar === false) return

      try {
        await this.$apollo.mutate({
          mutation: updateUserMutationgql,
          variables: mutVar,
        })
      } catch (error) {
        alert(error)
      }
    },
  },
})
</script>
