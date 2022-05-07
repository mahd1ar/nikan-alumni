<template>
  <div>
    <section class="bg-[#faf9f9] py-8">
      <count-down
        v-if="upcommingEvents.length"
        v-slot="{ status, time }"
        :starting-from="upcommingEvents[0].wpdate"
        :duration="upcommingEvents[0].duration"
      >
        <div class="container mx-auto flex flex-col-reverse gap-4 md:flex-row">
          <div class="flex w-full flex-col md:w-8/12">
            <div
              class="mx-auto flex w-2/3 flex-row-reverse justify-end gap-4 md:w-full"
            >
              <div class="flex flex-col gap-2">
                <div class="text-xl text-tm-black">
                  رویداد پیش رو
                  <span
                    v-show="status === 0"
                    class="mx-2 rounded-lg bg-red-50 py-1 px-2 font-samim text-sm font-light text-red-600"
                  >
                    <div
                      class="inline-block h-2 w-2 animate-pulse rounded bg-red-600 font-samim"
                    ></div>

                    در حال برگزاری</span
                  >
                </div>
                <h1 class="text-3xl font-bold text-tm-black before:hidden">
                  {{ upcommingEvents[0].title }}
                </h1>
                <div>
                  <div class="mt-3 flex gap-6 md:mt-0">
                    <div class="flex items-center gap-2 text-sm text-tm-gray">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4"
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
                          <circle cx="12" cy="10" r="3" />
                          <path
                            d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"
                          />
                        </g>
                      </svg>
                      <span>{{ upcommingEvents[0].location }} </span>
                    </div>
                    <div
                      class="flex items-center gap-2 text-sm text-tm-gray md:hidden"
                    >
                      <svg
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8 14q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm4 0q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm4 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14ZM3 4h3V2h2v2h8V2h2v2h3v18H3Zm2 16h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"
                        />
                      </svg>
                      <span
                        >{{
                          upcommingEvents[0].faFormattedDate
                            .slice()
                            .reverse()
                            .join(' ')
                        }}
                      </span>
                    </div>
                  </div>
                  <!-- <div
                  class="text-tm-gray bg-gray-50 inline-flex items-center gap-1 mt-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035c-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268c-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035c.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23a12.88 12.88 0 0 1-.637-1.223a4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366a1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4c.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002a12.88 12.88 0 0 1-1.379-.06a4.214 4.214 0 0 1-.51-.083a1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02c.037-.013.087-.028.153-.044c.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4a1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0a1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223c.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366a1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083c-.412.045-.898.061-1.379.06c-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11c.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141a4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06c.205.023.376.051.51.083c.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2z"
                    />
                  </svg>
                  <span> کارگروه نشاط و سرگرمی </span>
                </div> -->
                </div>
              </div>
              <div class="hidden w-16 rounded text-center md:block">
                <div class="bg-gray-200 py-2">
                  <div>{{ upcommingEvents[0].faFormattedDate[2] }}</div>

                  <div>{{ upcommingEvents[0].faFormattedDate[1] }}</div>
                </div>
                <div class="bg-gray-900 text-white">
                  {{ upcommingEvents[0].faFormattedDate[0] }}
                </div>
              </div>
            </div>
            <div class="mt-10 flex flex-col gap-8 md:mt-20 lg:flex-row-reverse">
              <div
                v-if="time"
                class="grid w-full grid-cols-4 text-center text-3xl md:text-right lg:w-9/12"
                dir="ltr"
              >
                <div class="flex flex-col">
                  <span> {{ time.day }} :</span>
                  <span class="text-base text-gray-500">روز</span>
                </div>

                <div class="flex flex-col">
                  <span>{{ time.hour }} :</span>
                  <span class="text-base text-gray-500">ساعت</span>
                </div>
                <div class="flex flex-col">
                  <span>{{ time.min }} :</span>
                  <span class="text-base text-gray-500">دقیقه</span>
                </div>
                <div class="flex flex-col">
                  <span> {{ time.sec }} </span>
                  <span class="text-base text-gray-500">ثانیه</span>
                </div>
              </div>
              <div
                class="flex-center h-12 cursor-pointer rounded bg-tm-yellow text-center text-lg font-semibold text-white shadow-lg shadow-yellow-500/50 hover:bg-yellow-300 lg:h-auto lg:w-3/12"
              >
                مشاهده رویداد
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12">
            <img
              class="mx-auto max-h-full w-2/3 rounded-md object-cover md:w-full"
              src="test/val.jpg"
              alt=""
            />
          </div>
        </div>
      </count-down>
    </section>

    <section class="body-font overflow-hidden text-gray-600">
      <div class="container mx-auto hidden px-5 py-12 md:block">
        <!-- -m-12 -->
        <div class="flex">
          <div class="w-1/2">
            <div class="mr-12 mb-6 w-full">
              <h1
                class="title-font mb-3 text-2xl font-medium text-tm-black sm:text-3xl"
              >
                اعلانات
              </h1>
              <!-- <div class="h-1 w-20 bg-cyan-500 rounded"></div> -->
            </div>

            <div
              v-for="(n, index) in news"
              :key="index"
              class="flex w-full flex-col items-start py-4 lg:px-12"
            >
              <div class="flex items-start gap-3">
                <img
                  class="aspect-square w-4/12 rounded object-cover"
                  src="test/one.jfif"
                  alt=""
                />
                <div class="w-8/12">
                  <span
                    class="inline-block rounded bg-cyan-50 py-1 px-2 text-xs font-medium tracking-widest text-cyan-500"
                    >کارگروه کسب و کار</span
                  >
                  <h2
                    class="title-font mt-4 mb-4 text-xl font-medium text-gray-900"
                  >
                    {{ n.title }}
                  </h2>
                  <!-- <p class="leading-relaxed mb-8" v-html="n.body"></p> -->
                  <div
                    class="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4"
                  >
                    <a class="inline-flex items-center text-cyan-500"
                      >ادامه مطلب

                      <svg
                        class="mr-2 h-4 w-4 rotate-180 transform"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      class="ml-3 mr-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400"
                    >
                      <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        class="w-6 h-6 ml-1"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 8h14V6H5z"
                          opacity=".3"
                        />
                        <path
                          fill="currentColor"
                          d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"
                        />
                      </svg> -->

                      04 بهمن 1400
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div class="mr-12 mb-6 w-full">
              <h1
                class="title-font mb-3 text-2xl font-medium text-tm-black sm:text-3xl"
              >
                اخبار و رویداد ها
              </h1>
              <!-- <div class="h-1 w-20 bg-cyan-500 rounded"></div> -->
            </div>
            <div
              v-for="(e, index) in events"
              :key="index"
              class="flex w-full flex-col items-start lg:px-12"
            >
              <div class="py-4 px-4 pl-0">
                <div class="flex h-full items-start gap-4">
                  <div
                    class="flex w-20 flex-shrink-0 flex-col items-center justify-center rounded-md bg-[#fffaea] py-4 text-center leading-none"
                  >
                    <span
                      class="mb-2 w-12 border-b-2 border-tm-yellow pb-2 text-lg font-semibold text-[#ffc400]"
                    >
                      {{ e.faFormattedDate[2] }}
                    </span>
                    <span
                      class="title-font font-medium leading-none text-tm-black"
                    >
                      {{ e.faFormattedDate[1] }}
                    </span>
                    <span class="mt-2 font-thin leading-none text-tm-black">
                      {{ e.faFormattedDate[0] }}
                    </span>
                    <!-- <span
                      class="text-gray-500 w-12 mt-2 pt-2 border-t-2 border-gray-200"
                      >1400</span
                    > -->
                  </div>
                  <nuxt-link :to="'/event/' + e.link" class="flex-grow pl-6">
                    <h3
                      class="title-font mb-1 text-xs font-medium tracking-widest text-black"
                    >
                      {{ e.category }}
                    </h3>
                    <h2
                      class="title-font mb-3 text-xl font-medium text-gray-900"
                    >
                      {{ e.title }}
                    </h2>
                    <p
                      v-snip="3"
                      class="mb-5 cursor-pointer leading-relaxed hover:underline"
                      v-text="e.content"
                    ></p>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="flex-center">
              <button
                class="mx-auto flex flex-row-reverse items-center gap-4 rounded border-0 bg-cyan-50 py-2 px-6 text-base text-cyan-600 shadow-lg shadow-cyan-200/30 transition-all hover:bg-cyan-500 hover:text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="h-5 w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"
                  />
                </svg>

                مشاهده تمام رویداد ها
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- mobile tabs -->
      <div class="md:hidden">
        <div class="flex-center">
          <div class="mb-10 flex border-b border-gray-200">
            <button
              class="-mb-px flex h-10 items-center gap-2 whitespace-nowrap border-b-2 bg-transparent px-4 py-2 text-center text-sm focus:outline-none sm:text-base"
              :class="
                tabIndex === 0
                  ? 'border-cyan-500  text-cyan-600'
                  : 'cursor-base  border-transparent  text-gray-700  hover:border-gray-400'
              "
              @click="tabIndex = 0"
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
                  d="M13.341 4A5.99 5.99 0 0 0 13 6H5v14h14v-8a5.99 5.99 0 0 0 2-.341V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.341zM19 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8z"
                />
              </svg>

              اعلانات
            </button>

            <button
              class="-mb-px flex h-10 items-center gap-2 whitespace-nowrap border-b-2 bg-transparent px-4 py-2 text-center text-sm focus:outline-none sm:text-base"
              :class="
                tabIndex === 1
                  ? 'border-cyan-500  text-cyan-600'
                  : 'cursor-base  border-transparent  text-gray-700  hover:border-gray-400'
              "
              @click="tabIndex = 1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path
                    d="m21 44l-1-8m24 8V12H25l1 8l1 8l1 8l-7 8h23ZM27 28h8m-9-8h9"
                  />
                  <path d="M4 4h20l1 8l1 8l1 8l1 8H4V4Zm6 8h7m-7 8h8m-8 8h9" />
                </g>
              </svg>
              اخبار و رویداد ها
            </button>
          </div>
        </div>

        <div v-show="tabIndex === 0" class="w-full">
          <div
            v-for="(e, index) in events"
            :key="index"
            class="flex w-full flex-col items-start px-12"
          >
            <div class="py-4 px-4">
              <div class="flex h-full items-start gap-4">
                <div
                  class="flex w-20 flex-shrink-0 flex-col items-center justify-center rounded-md bg-[#fffaea] py-4 text-center leading-none"
                >
                  <span
                    class="text mb-2 w-12 border-b-2 pb-2 font-semibold text-[#ffc400]"
                    >{{ e.faFormattedDate[2] }}</span
                  >
                  <span class="text-sm font-medium leading-none text-tm-black">
                    {{ e.faFormattedDate[1] }}
                  </span>
                  <!-- <span
                      class="text-gray-500 w-12 mt-2 pt-2 border-t-2 border-gray-200"
                      >1400</span
                    > -->
                </div>
                <div class="flex-grow pl-6">
                  <h2
                    class="title-font mb-1 text-xs tracking-widest text-gray-700"
                  >
                    {{ e.category }}
                  </h2>
                  <h2
                    class="title-font mb-2 text-base font-medium text-gray-900"
                  >
                    {{ e.title }}
                  </h2>
                  <p
                    v-snip="3"
                    class="mb-5 cursor-pointer text-sm leading-relaxed hover:underline"
                  >
                    {{ e.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4 px-4">
            <button
              class="mx-auto flex flex-row-reverse items-center gap-4 rounded border-0 bg-cyan-50 py-2 px-6 text-center text-base text-cyan-600 shadow-lg shadow-cyan-200/30 transition-all hover:bg-cyan-500 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="h-5 w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"
                />
              </svg>

              مشاهده تمام رویداد ها
            </button>
          </div>
        </div>

        <div v-show="tabIndex === 1" class="w-full">
          <div
            v-for="(n, index) in news"
            :key="index"
            class="flex w-full flex-col items-start px-12 py-4"
          >
            <div class="flex items-stretch gap-8">
              <div class="h-fit w-4/12">
                <img
                  class="aspect-square rounded object-cover"
                  src="test/one.jfif"
                  alt=""
                />
              </div>
              <div class="flex w-8/12 flex-col">
                <div>
                  <span
                    class="inline-block rounded bg-cyan-50 py-1 px-2 text-xs font-medium tracking-widest text-cyan-500"
                    >کارگروه کسب و کار</span
                  >
                </div>
                <h2
                  class="title-font mt-4 mb-4 text-xl font-medium text-gray-900"
                >
                  {{ n.title }}
                </h2>
                <!-- <p class="leading-relaxed mb-8" v-html="n.body"></p> -->
                <div
                  class="mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4"
                >
                  <a class="inline-flex items-center text-cyan-500"
                    >ادامه مطلب

                    <svg
                      class="mr-2 h-4 w-4 rotate-180 transform"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="ml-3 mr-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400"
                  >
                    <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        class="w-6 h-6 ml-1"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 8h14V6H5z"
                          opacity=".3"
                        />
                        <path
                          fill="currentColor"
                          d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"
                        />
                      </svg> -->

                    04 بهمن 1400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <departments />

    <section class="body-font relative text-gray-600">
      <img
        class="absolute top-0 h-full w-full object-cover object-center opacity-10 grayscale filter"
        src="https://nikan-alumni.ir/wp-content/uploads/2020/06/Panorama2-e1592028952881.jpg"
        alt="stats"
      />
      <div class="container relative mx-auto flex flex-wrap px-5 py-12">
        <div
          class="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2"
        >
          <div class="mb-6 w-full px-4 sm:p-4">
            <h1 class="title-font mb-2 text-2xl font-medium text-gray-900">
              معرفی مجموعه
            </h1>
            <!-- <div class="h-1 w-20 bg-cyan-500 rounded"></div> -->
            <div class="mt-4 leading-relaxed">
              موسسه فرهنگی نیکان در سال ۱۳۴۷ توسط مرحوم علامه کرباسچیان و عده‌ای
              دیگر از دل‌سوختگان تعلیم و تربیت اسلامی تأسیس گردید. در این موسسه
              سعی می‌شود محصلان به گونه‌ای در ابعاد مختلف تربیت شوند که با
              توانمندی روحی و جسمی و برخورداری از بهداشت روانی لازم، زندگی دنیوی
            </div>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">2.7K</h2>
            <p class="leading-relaxed">فارغ التحصیل</p>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">1.8K</h2>
            <p class="leading-relaxed">رویداد</p>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">35</h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
          <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
            <h2 class="title-font text-3xl font-medium text-gray-900">4</h2>
            <p class="leading-relaxed">پروژه خیریه</p>
          </div>
        </div>
        <div
          class="mt-6 w-full overflow-hidden rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2"
        >
          <img
            class="h-full w-full scale-100 transform cursor-pointer object-cover object-center transition duration-500 ease-in-out hover:scale-125"
            src="https://nikan-alumni.ir/wp-content/uploads/2020/06/Panorama2-e1592028952881.jpg"
            alt="stats"
          />
        </div>
      </div>
    </section>

    <section class="bg-slate-900 text-gray-50">
      <div
        class="container mx-auto flex flex-row-reverse flex-wrap gap-4 px-5 py-24"
      >
        <div class="w-full">
          <h1
            class="title-font mb-8 text-center text-2xl font-bold text-white before:bg-white before:shadow before:shadow-cyan-500 sm:text-3xl"
          >
            آرشیو رسانه
          </h1>
        </div>
        <div class="-m-2 flex w-2/5 flex-wrap">
          <div v-for="(i, index) in media" :key="index" class="w-full p-2">
            <div
              class="flex h-full translate-y-0 transform cursor-pointer items-center rounded-md border border-gray-700 bg-opacity-10 px-4 py-2 transition-all hover:-translate-y-2 hover:bg-slate-800 hover:shadow-sm hover:shadow-yellow-200/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                class="ml-4 h-10 w-10 flex-shrink-0 rounded-full bg-white object-cover object-center p-2 text-cyan-700 shadow-lg shadow-cyan-500/50"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
                  class="clr-i-solid clr-i-solid-path-1"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>

              <div class="flex flex-grow">
                <div class="flex w-3/5 flex-col gap-2">
                  <h2
                    class="title-font text-sm font-medium text-yellow-100 shadow-yellow-500/50 drop-shadow-2xl"
                    style="text-shadow: 1px 1px 9px #dee3f0"
                  >
                    {{ i.subject }}
                  </h2>
                  <div class="flex gap-4 text-xs text-slate-400">
                    <span>
                      {{ i.cat }}
                    </span>
                  </div>
                </div>
                <div
                  class="text-sx flex w-2/5 flex-col items-start gap-2 text-slate-400"
                >
                  <div class="flex-center gap-1 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="h-4 w-4"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                      />
                    </svg>

                    {{ i.speaker }}
                  </div>
                  <div class="flex-center gap-1 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      class="h-4 w-4"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
                      />
                    </svg>
                    <span> 9 دقیقه </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-2 text-center">
            <button
              class="flex-center mx-auto mt-8 flex w-full gap-4 rounded border border-slate-500 bg-slate-800 py-4 px-8 text-lg text-slate-200 shadow-md shadow-white/5 transition hover:border-white hover:bg-white hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-300/50 focus:outline-none"
            >
              ورود به بخش آرشیو رسانه

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex w-3/5 flex-col">
          <client-only>
            <div class="aspect-video">
              <vue-plyr ref="plyr" :options="playerOptions">
                <video
                  controls
                  crossorigin
                  playsinline
                  data-poster="https://dummyimage.com/300x300"
                  :src="videourl"
                  size="720"
                  format="video/mp4"
                  preload="none"
                >
                  <!-- <source   /> -->
                </video>
              </vue-plyr>
            </div>
          </client-only>
          <div
            class="bg-opacity-5 bg-gradient-to-tr from-slate-500/5 to-slate-100/5 p-4"
          >
            <h2 class="mt-4 mb-2 text-2xl text-yellow-100">
              {{ media[0].subject }}
            </h2>
            <div class="mb-4">
              سخنران:
              <span class="font-bold">
                {{ media[0].speaker }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-center mt-10 h-48">
        <img
          class="h-full object-contain opacity-40 grayscale filter"
          src="img/logo_only.png"
          alt=""
        />
      </div>

      <footer class="body-font text-gray-600">
        <div
          class="container mx-auto flex flex-col flex-wrap px-5 py-24 text-slate-300 md:flex-row md:flex-nowrap md:items-center lg:items-start"
        >
          <div
            class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left"
          >
            <a
              class="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-10 w-10 rounded-full bg-blue-500 p-2 text-white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                ></path>
              </svg>
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div
            class="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left"
          >
            <div class="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
              >
                CATEGORIES
              </h2>
              <nav class="mb-10 list-none">
                <li>
                  <a class="">First Link</a>
                </li>
                <li>
                  <a class="">Second Link</a>
                </li>
                <li>
                  <a class="">Third Link</a>
                </li>
                <li>
                  <a class="">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
              >
                CATEGORIES
              </h2>
              <nav class="mb-10 list-none">
                <li>
                  <a class="">First Link</a>
                </li>
                <li>
                  <a class="">Second Link</a>
                </li>
                <li>
                  <a class="">Third Link</a>
                </li>
                <li>
                  <a class="">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
              >
                CATEGORIES
              </h2>
              <nav class="mb-10 list-none">
                <li>
                  <a class="">First Link</a>
                </li>
                <li>
                  <a class="">Second Link</a>
                </li>
                <li>
                  <a class="">Third Link</a>
                </li>
                <li>
                  <a class="">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2
                class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
              >
                CATEGORIES
              </h2>
              <nav class="mb-10 list-none">
                <li>
                  <a class="">First Link</a>
                </li>
                <li>
                  <a class="">Second Link</a>
                </li>
                <li>
                  <a class="">Third Link</a>
                </li>
                <li>
                  <a class="">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-slate-800" dir="ltr">
          <div
            class="container mx-auto flex flex-wrap justify-between py-4 px-5 sm:flex-row"
          >
            <div
              class="flex text-center font-mono text-sm text-slate-50 sm:text-left"
            >
              © 2020 nikan-alumni —
              <a
                href="https://netdom.ir"
                rel="noopener noreferrer"
                class="flex-center ml-1 gap-1 tracking-widest text-gray-400"
                target="_blank"
              >
                Designed and developed by Mahdiyar Anari

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.3em"
                  height="1.3em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z"
                  />
                </svg>
              </a>
            </div>
            <span
              class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"
            >
              <a class="text-slate-50">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { WpUpcommingEvents } from '~/data/AxiosTypes'
import {
  htmlStrip,
  timeout,
  toIndiaDigits,
  wordpressDateToFormattedJalali,
  wordpressDateToJalali,
} from '~/data/utils'
import { Dict } from '~/data/utils/dictionary'
import gqlEventsQuery from '@/apollo/queries/events.gql'
import { EventsQuery, EventsQueryVariables } from '~/types/types'
import DepartmentsSection from '@/components/homepage/DepartmentsSection.vue'
import { Event, EventStatus } from '@/data/GlobslTypes'

export default Vue.extend({
  components: {
    departments: DepartmentsSection,
  },
  data() {
    return {
      upcommingEvents: [] as Event[],
      events: [] as Event[],
      tabIndex: 0 as 0 | 1,
      news: [
        {
          title: 'کاربرگ شماره 5 منتشر شد',
          body: `                فهرست موضوهات این هفته :
                <br />
                نوآوری در صنعت ساختمان
                <br />
                آرتمیا تحولی در صنعت شیلات`,
        },
        {
          title: ' بیمه درمان تکمیلی برای بستگان درجه دو',
          body: `                فهرست موضوهات این هفته :
                <br />
                نوآوری در صنعت ساختمان
                <br />
                آرتمیا تحولی در صنعت شیلات`,
        },
      ],

      playerOptions: {
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'pip',
          'airplay',
          'fullscreen',
        ],
      },
      videourl: 'http://194.5.205.148/vid/TedNikan1.mp4',

      media: [
        {
          subject: ' دادرسی اهل بیت علیهم السلام از مردم ',
          cat: 'لایو ها',
          speaker: 'دکتر دولتی',
        },
        {
          subject: ' کارآفرینی ',
          cat: 'چالش های کسب و کار',
          speaker: ' دکتر ضیا ',
        },
        {
          subject: ' معرفی کاربرگ    ',
          cat: 'کاربرگ',
          speaker: ' حمیدرضا مرادی مطلق۱۴',
        },
        {
          subject: 'در جسستجوی آرامش',
          cat: 'کلابینار',
          speaker: ' حمیدرضا مرادی مطلق۱۴',
        },
      ],
    }
  },
  async fetch() {
    const variables: EventsQueryVariables = { first: 4 }
    const { data } = await this.$apollo.query<EventsQuery>({
      query: gqlEventsQuery,
      variables,
    })

    data.events?.nodes?.forEach((i) => {
      const ev = {} as Event

      ev.id = i!.databaseId
      ev.gqlid = i!.id
      // @ts-ignore
      ev.link = encodeURIComponent(i!.id)
      ev.title = i?.title || ''
      ev.imageLink = i?.featuredImage?.node?.sourceUrl || ''
      ev.commentCount = i?.commentCount
        ? toIndiaDigits(i.commentCount)
        : toIndiaDigits(0)
      ev.wpdate = i!.date!
      ev.date = wordpressDateToJalali(i!.date!)
        .map((i) => toIndiaDigits(i))
        .join('/')
      ev.faFormattedDate = wordpressDateToFormattedJalali(i!.date!)
      ev.duration = i?.eventProps?.duration || 0
      ev.location = i?.eventProps?.venue || ''

      const startingFrom = ~~(new Date(ev.wpdate).getTime() / 1000)
      const now = ~~(Date.now() / 1000)
      const duration = ev.duration * 24 * 3600
      let status: EventStatus

      if (startingFrom > now) {
        status = EventStatus.ahead
      } else if (startingFrom + duration > now) {
        status = EventStatus.current
      } else {
        status = EventStatus.passed
      }

      ev.eventStatus = status

      ev.content = i?.content ? htmlStrip(i.content) : ''
      ev.category = i?.categories?.edges
        ? i.categories.edges
            .filter(
              (j) =>
                j && !!j.node?.name && j.node.name.search('کارگروه ها') === -1
            )
            .map((j) => j!.node!.name)
            .join('-')
        : ''
      this.events.push(ev)
      if (ev.eventStatus === EventStatus.current) this.upcommingEvents.push(ev)
    })
  },
  mounted() {
    // @ts-ignore
    window.home = this
    this.getUpcommingEvents()
  },
  methods: {
    async getUpcommingEvents(tryingThreshold = 3) {
      try {
        if (this.upcommingEvents.length > 0) return

        const { data } = await this.$axios.get<WpUpcommingEvents[]>(
          'https://nikan-alumni.org/wp-json/myplugin/v1/upcommingevent'
        )
        console.log(data)
        const d: Event[] = data
          .map((e) => ({
            id: e.ID,
            gqlid: e.gqlid,
            title: e.post_title,
            commentCount: e.comment_count,
            imageLink: e.featured_image || '',
            date: wordpressDateToJalali(e.post_date)
              .map((i) => toIndiaDigits(i))
              .join(' / '),
            faFormattedDate: wordpressDateToFormattedJalali(e.post_date),
            wpdate: e.post_date,
            location: 'LOCATION',
            category: e.category.length ? e.category[0].name : '',
            duration: e.duration ? parseFloat(e.duration) : 0.0,
          }))
          .sort(
            ({ wpdate: a }, { wpdate: b }) =>
              new Date(a).getTime() - new Date(b).getTime()
          )

        d.forEach((i) => {
          this.upcommingEvents.push(i)
        })
      } catch (error) {
        if (tryingThreshold > 0) {
          await timeout(1500)
          this.getUpcommingEvents(tryingThreshold - 1)
        } else {
          this.$about.error({ title: Dict.general_err, body: String(error) })
        }
      }
    },
  },
})
</script>

<style></style>
