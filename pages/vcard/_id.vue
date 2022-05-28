<template>
  <div
    dir="rtl"
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-40"
  >
    <img
      class="absolute top-0 left-0"
      style="transform: scale(-1, 1)"
      src="https://netita.ir/html/vcard/assets/images/triangles-top.png"
      alt=""
    />
    <img
      class="absolute bottom-0 right-0"
      style="transform: scale(-1, 1)"
      src="https://netita.ir/html/vcard/assets/images/triangles-bottom.png"
      alt=""
    />

    <div
      class="container relative top-20 mx-auto flex flex-col-reverse items-start gap-7 sm:top-0 md:flex-row"
    >
      <div
        class="flex w-full flex-col overflow-hidden rounded-xl bg-white md:w-7/12 lg:w-9/12"
      >
        <div v-if="user.bio" class="px-7 pt-7">
          <div class="flex flex-col">
            <h1 class="text-3xl">درباره من</h1>
            <div class="my-5 h-1 w-10 bg-cyan-400"></div>
          </div>

          <div class="my-3 min-h-[120px] text-lg">
            {{ user.bio }}
          </div>
        </div>
        <div class="h-full bg-slate-100 px-7 pb-7">
          <div class="mt-5 flex flex-col">
            <h1 class="text-3xl">تماس با من</h1>
            <div class="my-5 h-1 w-10 bg-cyan-400"></div>
          </div>
          <!-- cards -->
          <div class="my-3 grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div
              class="flex cursor-pointer overflow-hidden rounded bg-white p-3 shadow-sm hover:bg-gray-50"
            >
              <div class="rounded-lg bg-cyan-50 p-3 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="h-8 w-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    d="M17.536 4.383c2.061-.282 3.793.979 4.613 2.618l2.017 4.033c1.119 2.238.476 4.864-1.22 6.516c-1.002.975-2.009 2.089-2.593 3.072a.332.332 0 0 0-.034.23c.54 2.926 2.523 5.817 4.292 7.89a.677.677 0 0 0 .724.187l3.975-1.242a5.25 5.25 0 0 1 5.892 2.036l2.877 4.184c.78 1.136 1.175 2.676.577 4.157c-.534 1.323-1.567 3.231-3.446 4.5c-1.95 1.316-4.621 1.816-8.116.618c-3.905-1.34-7.594-4.7-10.653-8.997c-3.077-4.324-5.61-9.725-7.146-15.357C7.844 13.51 8.72 9.93 10.782 7.625c1.989-2.224 4.839-2.979 6.754-3.242Zm2.377 3.736c-.457-.913-1.272-1.364-2.037-1.259c-1.701.234-3.831.867-5.23 2.432c-1.326 1.483-2.244 4.095-.94 8.878c1.465 5.368 3.877 10.498 6.772 14.565c2.913 4.093 6.223 6.983 9.427 8.082c2.855.979 4.69.495 5.906-.325c1.286-.869 2.077-2.25 2.527-3.364c.206-.51.117-1.17-.319-1.804l-2.877-4.184a2.75 2.75 0 0 0-3.086-1.067l-3.975 1.242c-1.188.371-2.526.04-3.371-.95c-1.841-2.157-4.187-5.465-4.85-9.06a2.829 2.829 0 0 1 .344-1.961c.758-1.274 1.958-2.573 2.997-3.585c1.015-.988 1.303-2.458.729-3.607L19.913 8.12Z"
                  />
                </svg>
              </div>

              <a
                :href="'tel:' + user.mobile"
                target="_system"
                class="relative px-2 text-slate-700"
              >
                <span
                  class="relative flex items-center justify-start gap-2 text-lg font-bold"
                >
                  <span> تماس با تلفن همراه </span>
                  <svg
                    class="relative top-0.5"
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
                      d="m8.288 12l6.01 6.01l1.414-1.414l-4.6-4.6l4.6-4.6l-1.414-1.406L8.288 12Z"
                    />
                  </svg>
                </span>
                <span> {{ toIndiaDigits(user.mobile) }} </span>
              </a>
            </div>
            <!-- // phone -->
            <div
              v-if="user.phone"
              :title="user.phone"
              class="flex cursor-pointer overflow-hidden rounded bg-white p-3 shadow-sm hover:bg-gray-50"
            >
              <div class="rounded-lg bg-cyan-50 p-3 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="h-8 w-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z"
                  />
                </svg>
              </div>

              <a
                :href="'tel:' + user.phone"
                class="relative px-2 text-slate-700"
              >
                <span
                  class="relative flex items-center justify-start gap-2 text-lg font-bold"
                >
                  <span> تماس با تلفن محل کار </span>
                  <svg
                    class="relative top-0.5"
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
                      d="m8.288 12l6.01 6.01l1.414-1.414l-4.6-4.6l4.6-4.6l-1.414-1.406L8.288 12Z"
                    />
                  </svg>
                </span>
                <span> {{ toIndiaDigits(user.phone) }} </span>
              </a>
            </div>

            <div
              :title="user.email"
              class="flex cursor-pointer overflow-hidden rounded bg-white p-3 shadow-sm hover:bg-gray-50"
            >
              <div class="rounded-lg bg-cyan-50 p-3 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="h-8 w-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
                  />
                </svg>
              </div>

              <a
                :href="`mailto:${user.email}`"
                class="relative px-2 text-slate-700"
              >
                <span
                  class="relative flex items-center justify-start gap-2 text-lg font-bold"
                >
                  <span> ارسال ایمیل </span>
                  <svg
                    class="relative top-0.5"
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
                      d="m8.288 12l6.01 6.01l1.414-1.414l-4.6-4.6l4.6-4.6l-1.414-1.406L8.288 12Z"
                    />
                  </svg>
                </span>
                <span
                  class="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {{ user.email }}
                </span>
              </a>
            </div>

            <a
              v-if="user.website"
              :href="user.website"
              :title="user.website"
              target="_blank"
              class="flex cursor-pointer overflow-hidden rounded bg-white p-3 shadow-sm hover:bg-gray-50"
            >
              <div class="rounded-lg bg-cyan-50 p-3 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="h-8 w-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18l2-2l1-1v-2h-2v-1l-1-1H9v3l2 2v1.931C7.06 19.436 4 16.072 4 12l1 1h2v-2h2l3-3V6h-2L9 5v-.411a7.945 7.945 0 0 1 6 0V6l-1 1v2l1 1l3.13-3.13A7.983 7.983 0 0 1 19.736 10H18l-2 2v2l1 1h2l.286.286C18.029 18.061 15.239 20 12 20z"
                  />
                </svg>
              </div>

              <div class="relative px-2 text-slate-700">
                <span
                  class="relative flex items-center justify-start gap-2 text-lg font-bold"
                >
                  <span> وب سایت </span>

                  <svg
                    class="relative top-0.5"
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
                      d="m8.288 12l6.01 6.01l1.414-1.414l-4.6-4.6l4.6-4.6l-1.414-1.406L8.288 12Z"
                    />
                  </svg>
                </span>
                <span>
                  {{
                    user.website
                      ? user.website.replace(/(http|https):\/\//, '')
                      : ''
                  }}
                </span>
              </div>
            </a>
          </div>

          <div
            v-if="
              user.jobLocation &&
              user.jobLocation.lat !== 0 &&
              user.jobLocation.lng !== 0
            "
            class="mt-2 flex cursor-pointer flex-col overflow-hidden rounded bg-white p-3 shadow-sm hover:bg-gray-50"
          >
            <div class="flex items-start">
              <div class="rounded-lg bg-cyan-50 p-3 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="h-8 w-8 shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
                  />
                  <path
                    fill="currentColor"
                    d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320z"
                  />
                </svg>
              </div>

              <div class="relative px-2 text-slate-700">
                <span
                  class="relative flex items-center justify-start gap-2 text-lg font-bold"
                >
                  <span> آدرس محل کار </span>
                </span>
                <!-- <span> ستیدنستدی سرنی نس ن سنت شدزشصم نشرتثرش </span> -->
              </div>
            </div>

            <div v-if="+user.jobLocation.lat !== 0" class="h-72 py-5 px-3">
              <map-picker
                :lat="user.jobLocation.lat"
                :lng="user.jobLocation.lng"
                :zoom="13"
                :disabled="true"
              ></map-picker>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col rounded-xl bg-white md:w-5/12 lg:w-3/12">
        <div class="px-7">
          <div
            class="relative mx-auto flex h-20 max-w-xs items-center justify-center"
          >
            <!-- src="https://avatars.githubusercontent.com/u/32998122?v=4" -->
            <img
              v-if="loaded && !$fetchState.pending"
              loading="lazy"
              :src="user.avatar"
              class="absolute bottom-0 h-40 w-40 rounded-3xl"
              alt=""
            />
          </div>
          <div class="my-6 text-center text-3xl font-semibold text-[#44566c]">
            {{ user.firstName + ' ' + user.lastName }}
          </div>
          <div
            v-if="user.occupation"
            class="my-3 flex items-center justify-center rounded-3xl bg-slate-100 py-2 px-4 text-center text-[#44566c]"
          >
            {{ user.occupation }}
          </div>
          <div
            class="mb-3 flex items-center justify-center gap-3 py-3 text-gray-700"
          >
            <a
              v-if="user.socialMedias.twitter"
              :href="user.socialMedias.twitter"
              target="_blank"
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
                  d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                />
              </svg>
            </a>

            <a
              v-if="user.socialMedias.linkedin"
              :href="user.socialMedias.linkedin"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9v209.4z"
                />
              </svg>
            </a>

            <!-- instagram -->
            <a
              v-if="user.socialMedias.instagram"
              :href="user.socialMedias.instagram"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="h-5 w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          class="mt-auto flex shrink-0 flex-col gap-3 rounded-b-xl bg-slate-100 px-7 py-8 text-[#44566c]"
        >
          <div v-if="user.location" class="flex items-center gap-1">
            <svg
              v-if="user.location.city || user.location.providence"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 shrink-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
              />
              <path
                fill="currentColor"
                d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320z"
              />
            </svg>
            <span v-if="user.location.city || user.location.providence">
              {{ user.location.city + ', ' + user.location.providence }}
            </span>
          </div>

          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 shrink-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m7 9l5 3.5L17 9"
                />
                <path
                  d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
                />
              </g>
            </svg>
            <a class="overflow-hidden text-ellipsis">{{ user.email }}</a>
          </div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 shrink-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z"
              />
            </svg>
            <span>{{ toIndiaDigits(user.mobile) }}</span>
          </div>
          <div v-if="user.phone" class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="h-5 w-5 shrink-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m6.987 2.066l-.717.216a3.5 3.5 0 0 0-2.454 2.854c-.297 2.068.367 4.486 1.968 7.259c1.597 2.766 3.355 4.548 5.29 5.328a3.5 3.5 0 0 0 3.715-.705l.542-.514a2 2 0 0 0 .247-2.623l-1.356-1.88a1.5 1.5 0 0 0-1.655-.556l-2.051.627l-.053.01c-.226.033-.748-.456-1.398-1.582c-.68-1.178-.82-1.867-.633-2.045l1.043-.973a2.497 2.497 0 0 0 .575-2.85l-.662-1.471a2 2 0 0 0-2.4-1.095Zm1.49 1.505l.66 1.471a1.497 1.497 0 0 1-.344 1.71l-1.046.974C7.078 8.36 7.3 9.442 8.2 11c.846 1.466 1.618 2.19 2.448 2.064l.124-.026l2.088-.637a.5.5 0 0 1 .552.185l1.356 1.88a1 1 0 0 1-.123 1.312l-.543.514a2.5 2.5 0 0 1-2.653.503c-1.698-.684-3.303-2.311-4.798-4.9C5.152 9.3 4.545 7.093 4.806 5.278a2.5 2.5 0 0 1 1.753-2.039l.717-.216a1 1 0 0 1 1.2.548Z"
              />
            </svg>
            <span>{{ toIndiaDigits(user.phone) }}</span>
          </div>

          <a
            v-if="user.mobile"
            download
            target="_blank"
            :href="contact"
            class="cursor-pointer rounded-lg bg-cyan-400 py-2 text-center text-lg font-bold text-cyan-50 hover:bg-cyan-500"
          >
            اضافه به مخاطبین
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MapPicker from '~/components/form/MapPicker.vue'
import { UserFullProfile, WPapi } from '~/data/GlobslTypes'
import { LocationHandler, MiscHandler, toIndiaDigits } from '~/data/utils'

export default Vue.extend({
  components: {
    MapPicker,
  },
  layout: 'RawLayout',
  data() {
    return {
      loaded: false,

      user: {
        jobLocation: { lat: 0, lng: 0 },
      } as UserFullProfile,
    }
  },
  async fetch() {
    const id = this.$route.params.id as string
    console.log({ id })
    // TODO REFORM THIS URL AND ITS BACKEND
    const { data } = await this.$axios.get<WPapi.pulicUser.RootObject | false>(
      '/wp-json/myplugin/v1/user/' + id
    )

    if (data === false)
      return this.$nuxt.error({ statusCode: 404, message: 'user not found' })
    console.log({ data })
    this.user.firstName = data.firstname
    this.user.lastName = data.lastname

    this.user.email = data.user_email

    this.user.avatar = data.avatar

    const {
      instagram,
      linkedin,
      twitter,
      city,
      providence,
    } = MiscHandler.decompose(data.misc)

    this.user.location = {
      city,
      providence,
    }

    this.user.socialMedias = {
      instagram,
      linkedin,
      twitter,
    }

    this.user.bio = data.description

    this.user.mobile = data.mobile || ''
    this.user.phone = data.phone || ''
    this.user.occupation = data.occupation || ''
    const latlng = LocationHandler.decompose(data.location)
    this.user.jobLocation.lat = latlng.lat
    this.user.jobLocation.lng = latlng.lng

    this.user.website = data.user_url
  },
  computed: {
    contact() {
      const query = new URLSearchParams()

      if (this.user.firstName) query.set('firstname', this.user.firstName)

      if (this.user.lastName) query.set('lastname', this.user.lastName)

      if (this.user.email) query.set('email', this.user.email)

      if (this.user.mobile) query.set('mobile', this.user.mobile)

      if (this.user.occupation) query.set('occupation', this.user.occupation)

      return '/api/create-contact?' + query.toString()
    },
  },
  mounted() {
    // @ts-ignore
    window.v = this

    this.$nextTick(() => {
      this.loaded = true
    })
  },
  methods: {
    toIndiaDigits(input?: string | number) {
      return toIndiaDigits(input || '')
    },
    //   addToContacts() {
    //     const query = new URLSearchParams()

    //     if (this.user.firstName) query.set('firstname', this.user.firstName)

    //     if (this.user.lastName) query.set('lastname', this.user.lastName)

    //     if (this.user.email) query.set('email', this.user.email)

    //     if (this.user.mobile) query.set('mobile', this.user.mobile)

    //     if (this.user.occupation) query.set('occupation', this.user.occupation)

    //     console.log(query.toString)

    //     window.open('http://194.5.205.148:3000/?' + query.toString())
    //   },
  },
})
</script>
