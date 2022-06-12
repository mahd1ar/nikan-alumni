<template>
  <div dir="rtl">
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto">
        <h1
          class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl"
        >
          کتابخانه
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 text-lg">
          مرکز آرشیو و نگهداری اسناد کانون دانش آموختگان
        </p>

        <div
          class="grid gap-8 mt-8 xl:mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start"
        >
          <div
            v-for="({ title, subset, icon }, i) in items"
            :key="i"
            class="flex flex-col items-center pt-8 overflow-hidden border rounded-md"
          >
            <div class="w-32 h-32 rounded-full">
              <img :src="require('@/assets' + icon)" alt="" />
            </div>

            <h1
              class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white"
            >
              {{ title }}
            </h1>
            <div class="border-t-2 mt-5 w-full">
              <div class="w-full text-lg bg-cyan-200">
                <template v-for="(subject, index) in subset">
                  <nuxt-link
                    v-if="subject.link && subject.link.search('http') === -1"
                    :key="index"
                    :to="subject.link"
                    class="py-2 block cursor-pointer px-8 border-b border-cyan-100 text-cyan-700 hover:bg-cyan-300 transition-color duration-150"
                  >
                    {{ subject.title }}
                  </nuxt-link>
                  <a
                    v-else
                    :key="index"
                    :href="subject.link || '#'"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="py-2 block cursor-pointer px-8 border-b border-cyan-100 text-cyan-700 hover:bg-cyan-300 transition-color duration-150"
                  >
                    {{ subject.title }}
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export const library = [
        {
          title: 'اسناد بالادستی',
          icon: '/icons/bookmark-svgrepo-com.svg',
          subset: [
            {
              title: 'اساسنامه و مرامنامه',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/Asasnameh_Signed.pdf',
            },
          ],
        },
        {
          title: 'آیین نامه ها',
          icon: '/icons/file-svgrepo-com1.svg',
          subset: [
            {
              title: 'عضویت',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/ozviat.pdf',
            },
            {
              title: 'انتخابات',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2020/07/%D8%A2%DB%8C%DB%8C%D9%86-%D9%86%D8%A7%D9%85%D9%87-%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%DB%8C%D8%B1%D8%A7%DB%8C%D8%B4-8.pdf',
            },
            {
              title: 'اداره جلسات شورای مرکزی',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/jalasat.pdf',
            },
            {
              title: 'آیین نامه تبلیغات',
              link:
                'https://nikan-alumni.org/1399/02/20/%d9%85%d8%b1%d8%a7%d8%b3%d9%85-%d8%b3%d8%a7%d9%84-%d8%b1%d9%88%d8%b2-%d9%85%db%8c%d9%84%d8%a7%d8%af-%d8%a7%d9%85%d8%a7%d9%85-%d8%ad%d8%b3%d9%86-%d9%85%d8%ac%d8%aa%d8%a8%db%8c-%d8%b9%d9%84%db%8c%d9%87/%d8%a2%db%8c%db%8c%d9%86-%d9%86%d8%a7%d9%85%d9%87-%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa-%d9%86%d9%87%d8%a7%db%8c%db%8c-990713/',
            },
            {
              title: 'مالی',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/mali.pdf',
            },
            {
              title: 'معاملاتی',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/moamelati.pdf',
            },
            {
              title: 'نحوه ی تشکیل و عملکرد کارگروه ها',
              link:
                'https://nikan-alumni.org/1399/02/20/%d9%85%d8%b1%d8%a7%d8%b3%d9%85-%d8%b3%d8%a7%d9%84-%d8%b1%d9%88%d8%b2-%d9%85%db%8c%d9%84%d8%a7%d8%af-%d8%a7%d9%85%d8%a7%d9%85-%d8%ad%d8%b3%d9%86-%d9%85%d8%ac%d8%aa%d8%a8%db%8c-%d8%b9%d9%84%db%8c%d9%87/%d8%a7%db%8c%db%8c%d9%86_%d9%86%d8%a7%d9%85%d9%87_%d9%86%d8%ad%d9%88%d9%87_%d8%aa%d8%b4%da%a9%db%8c%d9%84_%d9%88_%d8%b9%d9%85%d9%84%da%a9%d8%b1%d8%af_%da%a9%d8%a7%d8%b1%da%af%d8%b1%d9%88%d9%87_%d9%87/',
            },
          ],
        },
        {
          title: 'فرم ها',
          icon: '/icons/file-svgrepo-com.svg',
          subset: [
            {
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/Worhgroup-ID.pdf',
              title: 'شناسنامه کارگروه',
            },
            {
              link:
                'https://nikan-alumni.org/wp-content/uploads/2019/11/%D8%B4%D9%86%D8%A7%D8%B3%D9%86%D8%A7%D9%85%D9%87_%D9%BE%D8%B1%D9%88%DA%98%D9%87_%D9%87%D8%A7%DB%8C_%DA%A9%D8%A7%D9%86%D9%88%D9%86_%D8%AF%D8%A7%D9%86%D8%B4_%D8%A2%D9%85%D9%88%D8%AE%D8%AA%DA%AF%D8%A7%D9%86.pdf',
              title: 'شناسنامه پروژه',
            },
            {
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/Project-Report.pdf',
              title: 'گزارش پیشرفت پروژه',
            },
            {
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/Contract-Description.pdf',
              title: 'شرح خدمات قرارداد',
            },
            {
              link:
                'https://nikan-alumni.org/wp-content/uploads/2018/08/Payment.pdf',
              title: 'تأیید پرداخت قرارداد',
            },
          ],
        },
        {
          title: 'صورتجلسات',
          icon: '/icons/document-svgrepo-com.svg',
          subset: [
            {
              title: 'شورای مرکزی دور اول',
            },
            {
              title: 'شورای مرکزی دور دوم',
              link: '/page/22801',
            },
            {
              title: 'شورای مرکزی دور سوم',
              link: '/page/22771',
            },
            {
              title: 'هیٔت اجرایی دور اول',
            },
            {
              title: 'هیٔت اجرایی دور دوم',
              link: '/page/22755',
            },
            {
              title: 'هیٔت اجرایی دور سوم',
              link: '/page/22781',
            },
          ],
        },
      ]
      
export default Vue.extend({
  data() {
    return {
      items: library
    }
  },
})
</script>