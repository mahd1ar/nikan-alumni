<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto flex flex-wrap flex-col">
        <div class="flex flex-wrap mb-10">
          <a
            class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-cyan-500 text-cyan-500 tracking-wider rounded-t"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 ml-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            پروفایل کاربر
          </a>
          <a
            class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-3"
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
          </a>
          <a
            class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-3"
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
          </a>
          <a
            class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle></svg
            >STEP 4
          </a>
        </div>

        <div class="flex gap-2 items-start">
          <user-info-card
            class="w-7/12"
            v-if="$fetchState.pending === false"
            :user-info="edituser"
          />

          <div class="w-5/12 bg-green-50 shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-green-900">
                رویداد های من
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                شما در این رویداد ها شرکت کرده اید
              </p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div
                  v-for="(e, index) in userRegisterdInThis"
                  :key="index"
                  class="bg-green-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    {{ e.date }}
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ e.eventName }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import fetchMe from '@/apollo/queries/fetch-me.gql'
import onLoggedOut from '~/mixins/on-logged-out'
import { FetchMeQuery, UpdateUserMutationVariables } from '~/types/types'
import { UserFullProfile } from '@/data/GlobslTypes'
import { BioHandler, toIndiaDigits, wordpressDateToJalali } from '~/data/utils'
import UserInfoCard from '~/components/user-profile/UserInfoCard.vue'
import updateUserMutationgql from '@/apollo/mutation/update-user.gql'
import gql from 'graphql-tag'

export default Vue.extend({
  components: { UserInfoCard },
  mixins: [onLoggedOut],
  layout: 'dashboard',
  middleware: ['authentication'],

  data() {
    return {
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
  mounted() {
    this.getEvents()
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