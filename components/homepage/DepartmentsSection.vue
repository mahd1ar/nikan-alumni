<template>
  <section
    class="relative"
    style="background: #fafafa; background-image: url(/pattern-1.svg)"
  >
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div
        class="mx-auto grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
      >
        <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-right">
          <h2 class="text-right text-3xl font-bold sm:text-4xl">
            کارگروه خود را پیدا کنید
          </h2>

          <p class="mt-4 text-right text-gray-600">
            کانون دانش آموختگان نیکان در زمینه های متعدد و متنوعی در قالب
            کارگروه های مختلف فعالیت می کند. هر کدام از این کارگروه ها با هدف
            خاصی تاسیس شده اند تا به بهترین نحو رویداد های مرتبط با خود را
            برگزار کنند.
          </p>
          <!-- button -->
          <!-- <a
          
            class="mt-8 inline-flex items-center rounded border border-cyan-500 bg-cyan-500 px-8 py-3 text-white hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-500"
            href="/get-started"
          >
            <span class="text-sm font-medium"> شروع کنید </span>
            <svg
              class="mr-3 h-5 w-5 rotate-180 transition"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a> -->
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <nuxt-link
            v-for="(cat, index) in $store.state.navigation.menu.find(i => i.href === '/event/category').submenu"
            :key="index"                   
            class="block rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            :to="cat.href"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
              <div class="h-6 w-6" v-html="cat.svg" >
               
              </div>
              
            </span>

            <h6 class="mt-2 font-bold">{{ cat.title }}</h6>

            <!-- <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p> -->
          </nuxt-link>

       
        </div>
      </div>
    </div>
  </section>
</template>
