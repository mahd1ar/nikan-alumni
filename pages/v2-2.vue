<template>
  <div dir="rtl" class="">
    <div
      class="fixed top-10 left-10 z-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
    >
      <span class="hidden sm:block">sm</span>
      <span class="hidden md:block">md</span>
      <span class="hidden lg:block">lg</span>
      <span class="hidden xl:block">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>

    <!-- hero section -->
    <div class="flex w-full flex-col">
      <div class="relative flex h-full w-full flex-col">
        <div class="h-8 bg-cyan-700">
          <div class="container mx-auto h-full w-full">
            <div class="flex h-full justify-between gap-4 text-sm text-cyan-50">
              <div
                class="flex-center cursor-pointer gap-2 bg-black bg-opacity-50 px-2 hover:bg-opacity-20"
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
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                <span class="w-fit"> ورود اعضا </span>
              </div>

              <!-- <div class="flex gap-4">
                <div class="flex-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div class="flex-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12ZM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <nav class="h-24">
          <div
            class="container mx-auto flex h-full flex-row items-stretch justify-between gap-1"
          >
            <div class="flex flex-row gap-1">
              <div class="flex items-center">
                <div
                  class="flex-center cursor-pointer rounded-full py-2 px-2 font-bold text-neutral-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="h-5 w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  class="flex-center cursor-pointer rounded-full py-2 px-2 font-bold text-neutral-700 hover:bg-gray-100"
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
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div
                v-for="(i, index) in menu"
                :key="index"
                class="flex-center cursor-pointer px-2 font-bold text-neutral-700 hover:bg-gray-100"
              >
                {{ i }}
              </div>
            </div>

            <figure class="relative">
              <div class="left-0 z-10 h-full rounded-md bg-white py-1">
                <img class="h-full" src="img/logo_only.png" alt="" />
              </div>
            </figure>
          </div>
        </nav>
        <div class="relative h-full">
          <img
            class="absolute top-0 left-0 h-full w-full object-cover object-bottom"
            src="img/IMG_4141(ACR v8.1)F-2MP.jpg"
            alt=""
          />
          <div class="relative top-0 left-0 h-full w-full">
            <div class="relative h-full w-full">
              <div
                class="m-blur-background absolute top-0 left-0 h-full w-full"
              ></div>
              <div
                class="container relative mx-auto flex h-full flex-row-reverse"
              >
                <div class="flex-center w-5/12">
                  <div
                    class="my-24 flex flex-col justify-center gap-6 rounded-md p-4"
                  >
                    <div class="text-right text-5xl font-bold text-gray-50">
                      کانون
                      <br />
                      دانش آموختگان
                      <br />
                      نیکان
                    </div>
                    <p class="text-lg text-white">
                      محلی است برای ارائه خدمات به دانش آموختگان مدرسه نیکان و
                      ایجاد بستری برای شکوفایی و به اشتراک گذاری ظرفیت ها
                    </p>
                    <div class="text-sm">
                      <button
                        class="inline-flex rounded border-0 bg-cyan-500 py-2 px-6 text-white hover:bg-cyan-600 focus:outline-none"
                      >
                        درباره کانون دانش آموختگان
                      </button>
                      <button
                        class="ml-4 inline-flex rounded border-0 bg-gray-100 bg-opacity-20 py-2 px-6 text-white hover:bg-gray-200 focus:outline-none"
                      >
                        تماس با ما
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-[#faf9f9] py-8">
      <div class="container mx-auto flex gap-4">
        <div class="flex w-8/12 flex-col">
          <div class="flex flex-row-reverse justify-end gap-4">
            <div class="flex flex-col gap-2">
              <div class="text-xl text-tm-black">رویداد پیش رو</div>
              <h1 class="text-3xl font-bold text-tm-black">
                مسابقات فوتسال بین دوره ای
                <span
                  class="mx-2 rounded-lg bg-red-50 py-1 px-2 font-samim text-sm font-light text-red-600"
                >
                  <div
                    class="inline-block h-2 w-2 animate-pulse rounded bg-red-600 font-samim"
                  ></div>
                  در حال برگزاری</span
                >
              </h1>
              <div>
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
                  <span> سالن فوتسال نیکان </span>
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
            <div class="w-16 rounded text-center">
              <div class="bg-gray-200 py-2">
                <div>18</div>

                <div>اسفند</div>
              </div>
              <div class="bg-gray-900 text-white">2022</div>
            </div>
          </div>
          <div class="mt-20 flex flex-row-reverse gap-8">
            <div class="grid w-9/12 grid-cols-4 text-right text-3xl" dir="ltr">
              <div class="flex flex-col">
                <span>5 :</span>
                <span class="text-base text-gray-500">روز</span>
              </div>
              <div class="flex flex-col">
                <span>45 :</span>
                <span class="text-base text-gray-500">ساعت</span>
              </div>
              <div class="flex flex-col">
                <span>22 :</span>
                <span class="text-base text-gray-500">دقیقه</span>
              </div>
              <div class="flex flex-col">
                <!-- <transition name="counter" mode="out-in"> -->
                <span>
                  {{ counter.fname }}
                </span>

                <!-- </transition> -->
                <span class="text-base text-gray-500">ثانیه</span>
              </div>
            </div>
            <div
              class="flex-center w-3/12 cursor-pointer rounded bg-tm-yellow text-center text-lg font-semibold text-white hover:bg-yellow-300"
            >
              مشاهده رویداد
            </div>
          </div>
        </div>
        <div class="w-4/12">
          <img
            class="w-full rounded-md object-cover"
            src="test/one.jfif"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="body-font overflow-hidden text-gray-600">
      <div class="container mx-auto px-5 py-12">
        <!-- -m-12 -->
        <div class="flex">
          <div class="w-1/2">
            <div class="mr-12 mb-6 w-full">
              <h1
                class="title-font mb-3 text-2xl font-medium text-tm-black sm:text-3xl"
              >
                اعلانات
              </h1>
              <div class="h-1 w-20 rounded bg-cyan-500"></div>
            </div>

            <div
              v-for="(n, index) in news"
              :key="index"
              class="flex w-full flex-col items-start px-12 py-4"
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
              <div class="h-1 w-20 rounded bg-cyan-500"></div>
            </div>
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
                      class="mb-2 w-12 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-[#ffc400]"
                      >12</span
                    >
                    <span
                      class="title-font font-medium leading-none text-tm-black"
                      >اردیبهشت</span
                    >
                    <!-- <span
                      class="text-gray-500 w-12 mt-2 pt-2 border-t-2 border-gray-200"
                      >1400</span
                    > -->
                  </div>
                  <div class="flex-grow pl-6">
                    <h2
                      class="title-font mb-1 text-xs font-medium tracking-widest text-black"
                    >
                      CATEGORY
                    </h2>
                    <h2
                      class="title-font mb-3 text-xl font-medium text-gray-900"
                    >
                      {{ e.title }}
                    </h2>
                    <p
                      v-snip="3"
                      class="mb-5 cursor-pointer leading-relaxed hover:underline"
                    >
                      {{ e.body }}
                    </p>
                    <!-- <a class="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/103x103"
                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-3">
                        <span class="title-font font-medium text-gray-900"
                          >Alper Kamu</span
                        >
                      </span>
                    </a> -->
                  </div>
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
    </section>

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
            <div class="h-1 w-20 rounded bg-cyan-500"></div>
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

    <section class="bg-gray-900 text-gray-50">
      <div class="container mx-auto flex flex-row-reverse gap-4 px-5 py-24">
        <div class="-m-2 flex w-1/2 flex-wrap">
          <div v-for="i in [1, 2, 3, 4]" :key="i" class="w-full p-2">
            <div
              class="flex h-full items-center rounded-md border border-gray-700 p-4"
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

              <div class="flex-grow">
                <h2
                  class="title-font font-medium text-yellow-100 shadow-yellow-500/50 drop-shadow-2xl"
                  style="text-shadow: 1px 1px 9px #dee3f0"
                >
                  Holden Caulfield
                </h2>
                <p class="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2">
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
                >
                  <!-- <source   /> -->
                </video>
              </vue-plyr>
            </div>
          </client-only>
        </div>
      </div>
    </section>

    <section>
      <div class="w-1/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        mollitia quia, nemo eum consequuntur iusto omnis voluptates consequatur
        quos similique ducimus minima expedita necessitatibus tempora sequi
        facilis doloremque eaque perferendis? Itaque dolores repellendus, quidem
        vero voluptatem totam architecto ipsam nisi eveniet sequi voluptatum ad,
        eius incidunt fugit officiis tempora laborum. Obcaecati non reiciendis
        minima maxime natus! Repudiandae aut itaque eos similique perferendis,
        quos maxime maiores aliquam facere at est debitis beatae labore quae
        dignissimos quia officia delectus qui optio doloremque quod atque
        officiis temporibus! Perferendis reiciendis voluptates error quia
        consequuntur nam quam soluta tempore, maiores neque sint vitae iusto
        possimus.
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      menu: [
        'معرفی',
        'کتابخانه',
        'رویداد ها',
        'رسانه',
        'انواع بیمه',
        'نشریه کاربرگ',
        'بانک اطلاعات',
        'پروفایل اعضا',
      ],
      events: [
        {
          title: 'دورهمی شب چله نیکانیان',
          body: `
          در دوشنبه شب مورخ بیست و نهم آذر ماه هزار و چهارصد در محوطه ی سرپوشیده ی دبستان نیکان قریب به سیصد نفر از دانش آموختگان دورهم گرد آمدند تا یادی کنند از خاطراتشان و دیداری با یکدیگر تازه کنند.
در ذیل تصاویری از این دورهمی...
          `,
        },
        {
          title: 'کوهنوردی و بازدید از آبشار یخ زده سنگان',
          body: `
          با شروع فصل زیبای بهاری، کارگروه نشاط و سرگرمی کانون دانش آموختگان نیکان برگزار کرد.

تور یک روزه آبشار یخی سنگان در تاریخ چهارشنبه ۱۱ فروردین ۱۴۰۰

دیدار از آبشار یخی سنگان(شهران.جاده امامزاده داود)

حضور به صورت دورهمی با ماشین شخصی و رعایت پروتکل های بهداشتی انجام شد.

مخاطبان:...
          `,
        },
        {
          title: 'شب شعر نبوی',
          body: `
    در روز چهارشنبه مورخ ۲۰ اسفندماه ۹۹ در محل آمفی تئاتر دبیرستان نیکان مراسم شب شعر نبوی برگزار شد.

به برکت میلاد پر نور پیامبر متعال حضرت محمد مصطفی صلوات الله علیه و آله و سلم آمفی تئاتر دبیرستان نیکان بعد از حدود بیش از ۱...
          `,
        },
        {
          title: 'وبینار تامین مالی شرکتی',
          body: `
 وبینار تامین مالی شرکتی

? مدرس: دارا بوشهری
دانش آموخته دوره ۹

سوابق کاری و تحصیلی:
? دانش آموخته MBA
دانشگاه آمریکایی شارجه
? مدیر بانکداری شرکتی
HSBC Bank Middle East

? مخاطبین وبینار:
?مدیران میانی شرکتهای بزرگ
?مدیران ارشد شرکتهای متوسط
?مالکین شرکتهای کوچک

? عناوین فرعی:
? تامین مالی کوتاه مدت
? تامین مالی ساختاریافته
? تامین...`,
        },
      ],
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
      counter: {
        fname: 59,
      },
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
      videourl:
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    }
  },
  mounted() {
    setInterval(() => {
      const n = this.counter.fname
      // console.log(this.counter.fst)
      this.counter.fname = n > 0 ? n - 1 : 59
    }, 1000)
  },
})
</script>

<style>
.m-blur-background {
  background: linear-gradient(
    90deg,
    rgba(33, 37, 41, 0.6) 0%,
    rgba(33, 37, 41, 0.24) 100%
  );
}

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
