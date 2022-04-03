<template>
  <div
    dir="rtl"
    class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-40"
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
      class="container mx-auto flex flex-col-reverse md:flex-row items-start gap-7 relative"
    >
      <div
        class="lg:w-9/12 md:w-7/12 w-full bg-white rounded-xl overflow-hidden flex flex-col"
      >
        <div class="px-7 pt-7">
          <div class="flex flex-col">
            <h1 class="text-3xl">درباره من</h1>
            <div class="w-10 h-1 bg-cyan-400 my-5"></div>
          </div>

          <div class="my-3 min-h-[120px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ullam
            sapiente unde aliquam repellat dolores deleniti modi qui! Ex,
            itaque. Totam praesentium porro culpa eius explicabo deleniti
            doloremque saepe asperiores.
          </div>
        </div>
        <div class="px-7 pb-7 bg-slate-100 h-full">
          <div class="flex flex-col mt-5">
            <h1 class="text-3xl">تماس با من</h1>
            <div class="w-10 h-1 bg-cyan-400 my-5"></div>
          </div>
          <!-- cards -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 my-3">
            <div
              class="bg-white hover:bg-gray-50 cursor-pointer shadow-sm flex p-3 rounded overflow-hidden"
            >
              <div class="p-3 bg-cyan-50 text-cyan-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="w-8 h-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    d="M17.536 4.383c2.061-.282 3.793.979 4.613 2.618l2.017 4.033c1.119 2.238.476 4.864-1.22 6.516c-1.002.975-2.009 2.089-2.593 3.072a.332.332 0 0 0-.034.23c.54 2.926 2.523 5.817 4.292 7.89a.677.677 0 0 0 .724.187l3.975-1.242a5.25 5.25 0 0 1 5.892 2.036l2.877 4.184c.78 1.136 1.175 2.676.577 4.157c-.534 1.323-1.567 3.231-3.446 4.5c-1.95 1.316-4.621 1.816-8.116.618c-3.905-1.34-7.594-4.7-10.653-8.997c-3.077-4.324-5.61-9.725-7.146-15.357C7.844 13.51 8.72 9.93 10.782 7.625c1.989-2.224 4.839-2.979 6.754-3.242Zm2.377 3.736c-.457-.913-1.272-1.364-2.037-1.259c-1.701.234-3.831.867-5.23 2.432c-1.326 1.483-2.244 4.095-.94 8.878c1.465 5.368 3.877 10.498 6.772 14.565c2.913 4.093 6.223 6.983 9.427 8.082c2.855.979 4.69.495 5.906-.325c1.286-.869 2.077-2.25 2.527-3.364c.206-.51.117-1.17-.319-1.804l-2.877-4.184a2.75 2.75 0 0 0-3.086-1.067l-3.975 1.242c-1.188.371-2.526.04-3.371-.95c-1.841-2.157-4.187-5.465-4.85-9.06a2.829 2.829 0 0 1 .344-1.961c.758-1.274 1.958-2.573 2.997-3.585c1.015-.988 1.303-2.458.729-3.607L19.913 8.12Z"
                  />
                </svg>
              </div>

              <div class="px-2 text-slate-700 relative">
                <span
                  class="flex items-center relative gap-2 justify-start text-lg font-bold"
                >
                  <span> تماس با تلفن همراه </span>
                  <svg
                    class="top-0.5 relative"
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
                <span> 09101214368 </span>
              </div>
            </div>

            <div
              class="bg-white hover:bg-gray-50 cursor-pointer shadow-sm flex p-3 rounded overflow-hidden"
            >
              <div class="p-3 bg-cyan-50 text-cyan-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="w-8 h-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z"
                  />
                </svg>
              </div>

              <div class="px-2 text-slate-700 relative">
                <span
                  class="flex items-center relative gap-2 justify-start text-lg font-bold"
                >
                  <span> تماس با تلفن همراه </span>
                  <svg
                    class="top-0.5 relative"
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
                <span> 09101214368 </span>
              </div>
            </div>

            <div
              class="bg-white hover:bg-gray-50 cursor-pointer shadow-sm flex p-3 rounded overflow-hidden"
            >
              <div class="p-3 bg-cyan-50 text-cyan-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="w-8 h-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
                  />
                </svg>
              </div>

              <div class="px-2 text-slate-700 relative">
                <span
                  class="flex items-center relative gap-2 justify-start text-lg font-bold"
                >
                  <span> ارسال ایمیل </span>
                  <svg
                    class="top-0.5 relative"
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
                  class="text-ellipsis whitespace-nowrap overflow-hidden w-full inline-block"
                >
                  a.mahdiyar7@yahoo.com سیشصثبصضثبصثب صثبصثبصثب
                </span>
              </div>
            </div>

            <div
              class="bg-white hover:bg-gray-50 cursor-pointer shadow-sm flex p-3 rounded overflow-hidden"
            >
              <div class="p-3 bg-cyan-50 text-cyan-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="w-8 h-8"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18l2-2l1-1v-2h-2v-1l-1-1H9v3l2 2v1.931C7.06 19.436 4 16.072 4 12l1 1h2v-2h2l3-3V6h-2L9 5v-.411a7.945 7.945 0 0 1 6 0V6l-1 1v2l1 1l3.13-3.13A7.983 7.983 0 0 1 19.736 10H18l-2 2v2l1 1h2l.286.286C18.029 18.061 15.239 20 12 20z"
                  />
                </svg>
              </div>

              <div class="px-2 text-slate-700 relative">
                <span
                  class="flex items-center relative gap-2 justify-start text-lg font-bold"
                >
                  <span> وب سایت </span>

                  <svg
                    class="top-0.5 relative"
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
                <span> netdom.ir </span>
              </div>
            </div>
          </div>

          <div
            class="bg-white hover:bg-gray-50 cursor-pointer shadow-sm flex p-3 rounded overflow-hidden mt-2 flex-col"
          >
            <div class="flex items-start">
              <div class="p-3 bg-cyan-50 text-cyan-400 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  class="w-8 h-8 shrink-0"
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

              <div class="px-2 text-slate-700 relative">
                <span
                  class="flex items-center relative gap-2 justify-start text-lg font-bold"
                >
                  <span> نشانی محل کار </span>
                </span>
                <span> ستیدنستدی سرنی نس ن سنت شدزشصم نشرتثرش </span>
              </div>
            </div>

            <div class="py-5 px-3 h-72">
              <client-only>
                <l-map
                  style="height: 100%"
                  :zoom="11"
                  :center="[35.826165, 50.964831]"
                  @click="clickmap"
                >
                  <l-tile-layer
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                  ></l-tile-layer>
                  <l-marker ref="marker" :lat-lng="marker_lat_lng">
                    <l-icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style="
                          transform: translate3d(50%, -100%, 0px);
                          position: relative;
                          right: 4px;
                          top: 4px;
                          stroke: white;
                        "
                        class="w-8 h-8 shrink-0 text-cyan-400"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="none"
                          d="m16 7l1.912 3.667l4.088.506l-3 2.753l.6 4.074l-3.6-2.292L12.4 18l.6-4.074l-3-2.753l4.2-.506L16 7z"
                        />
                        <path
                          fill="currentColor"
                          d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm3.6 16L16 15.709L12.4 18l.6-4.074l-3-2.753l4.2-.507L16 7l1.912 3.667l4.088.506l-3 2.753Z"
                        />
                      </svg>
                    </l-icon>
                  </l-marker>
                </l-map>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-3/12 md:w-5/12 w-full bg-white flex flex-col rounded-xl">
        <div class="px-7">
          <div
            class="h-20 relative flex justify-center items-center mx-auto max-w-xs"
          >
            <img
              class="absolute rounded-3xl bottom-0"
              src="https://avatars.githubusercontent.com/u/32998122?v=4"
              alt=""
            />
          </div>
          <div class="text-3xl text-center my-6 text-[#44566c] font-semibold">
            مهدیار اناری
          </div>
          <div
            class="my-3 text-center bg-slate-100 rounded-3xl py-2 px-4 text-[#44566c] flex justify-center items-center"
          >
            وب دولوپر
          </div>
          <div
            class="text-gray-700 flex justify-center items-center gap-3 py-3 mb-3"
          >
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
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
              />
            </svg>
          </div>
        </div>
        <div
          class="px-7 bg-slate-100 text-[#44566c] flex flex-col gap-3 py-8 mt-auto rounded-b-xl shrink-0"
        >
          <div class="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5 shrink-0"
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
            <span>ایران، تهران</span>
          </div>

          <div class="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5 shrink-0"
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
            <a class="text-ellipsis overflow-hidden">a.mahdiyar@yahoo.com</a>
          </div>
          <div class="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5 shrink-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z"
              />
            </svg>
            <span>091012124368</span>
          </div>
          <div class="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="w-5 h-5 shrink-0"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m6.987 2.066l-.717.216a3.5 3.5 0 0 0-2.454 2.854c-.297 2.068.367 4.486 1.968 7.259c1.597 2.766 3.355 4.548 5.29 5.328a3.5 3.5 0 0 0 3.715-.705l.542-.514a2 2 0 0 0 .247-2.623l-1.356-1.88a1.5 1.5 0 0 0-1.655-.556l-2.051.627l-.053.01c-.226.033-.748-.456-1.398-1.582c-.68-1.178-.82-1.867-.633-2.045l1.043-.973a2.497 2.497 0 0 0 .575-2.85l-.662-1.471a2 2 0 0 0-2.4-1.095Zm1.49 1.505l.66 1.471a1.497 1.497 0 0 1-.344 1.71l-1.046.974C7.078 8.36 7.3 9.442 8.2 11c.846 1.466 1.618 2.19 2.448 2.064l.124-.026l2.088-.637a.5.5 0 0 1 .552.185l1.356 1.88a1 1 0 0 1-.123 1.312l-.543.514a2.5 2.5 0 0 1-2.653.503c-1.698-.684-3.303-2.311-4.798-4.9C5.152 9.3 4.545 7.093 4.806 5.278a2.5 2.5 0 0 1 1.753-2.039l.717-.216a1 1 0 0 1 1.2.548Z"
              />
            </svg>
            <span>091012124368</span>
          </div>

          <button
            class="bg-cyan-400 hover:bg-cyan-500 text-lg font-bold text-cyan-50 cursor-pointer rounded-lg py-2"
          >
            اضافه به مخاطبین
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      marker_lat_lng: [35.826165, 50.964831] as [number, number],
    }
  },
  mounted() {
    // @ts-ignore
    window.l = this
    // let map
    // let pin
    // const tilesURL = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    // const mapAttrib =
    //   '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    // function MapCreate() {
    //   // create map instance
    //   if (!(typeof map == 'object')) {
    //     map = L.map('map', {
    //       center: [40, 0],
    //       zoom: 3,
    //     })
    //   } else {
    //     map.setZoom(3).panTo([40, 0])
    //   }
    //   // create the tile layer with correct attribution
    //   L.tileLayer(tilesURL, {
    //     attribution: mapAttrib,
    //     maxZoom: 19,
    //   }).addTo(map)
    // }
    // map.on('click', function (ev) {
    // if (typeof pin == 'object') {
    //   pin.setLatLng(ev.latlng)
    // } else {
    //   pin = L.marker(ev.latlng, { riseOnHover: true, draggable: true })
    //   pin.addTo(map)
    //   pin.on('drag', function (ev) {
    //     console.log(ev.latlng.lng)
    //     console.log(ev.latlng.lat)
    //   })
    // }
    // })
  },
  methods: {
    clickmap(ev: any) {
      // @ts-ignore
      this.$refs.marker!.setLatLng([ev.latlng.lat, ev.latlng.lng])

      // this.$nuxt.$on emit
    },
  },
})
</script>
