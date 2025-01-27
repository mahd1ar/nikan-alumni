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
              title: 'اساسنامه جدید مصوب شورای مرکزی دوره چهارم',
              link:
              'https://nikan-alumni.org/wp-content/uploads/2024/07/%D8%A7%D8%B3%D8%A7%D8%B3%D9%86%D8%A7%D9%85%D9%87_%D8%AC%D8%AF%DB%8C%D8%AF_%DA%A9%D8%A7%D9%86%D9%88%D9%86_%D8%AF%D8%A7%D9%86%D8%B4_%D8%A2%D9%85%D9%88%D8%AE%D8%AA%DA%AF%D8%A7%D9%86_%D9%86%DB%8C%DA%A9%D8%A7%D9%86_%D9%85%D8%B5%D9%88%D8%A8_%D8%B4%D9%88%D8%B1%D8%A7%DB%8C_%D9%85%D8%B1%DA%A9%D8%B2%DB%8C_%D8%AF%D9%88%D8%B1%D9%87_%DA%86%D9%87%D8%A7%D8%B1%D9%85.pdf'
            },
            {
              title: 'مرام نامه',
              link: 'https://nikan-alumni.org/wp-content/uploads/2024/09/%D9%85%D8%B1%D8%A7%D9%85%D9%86%D8%A7%D9%85%D9%87_%DA%A9%D8%A7%D9%86%D9%88%D9%86_%D8%AF%D8%A7%D9%86%D8%B4_%D8%A2%D9%85%D9%88%D8%AE%D8%AA%DA%AF%D8%A7%D9%86_%D9%86%DB%8C%DA%A9%D8%A7%D9%86.pdf'
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
              title: 'آئین نامه جدید انتخابات شورای مرکزی کانون',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2024/07/آئین_نامه_انتخابات_شورای_مرکزی_مصوب_شورای_چهارم_کانون_ویرایش_11.pdf',
            },
            {
              title: 'اداره جلسات شورای مرکزی',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2022/11/آئین_نامه_3_اداره_جلسات_شورای_مرکزی_13960824.pdf',
            },
            {
              title: 'آیین نامه تبلیغات',
              link:
                'https://nikan-alumni.org/wp-content/uploads/2022/11/آیین_نامه_نحوه_تبلیغات_نامزدها_در_انتخابات_شورای_مرکزی_ویرایش06.pdf',
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
              link: `https://nikan-alumni.org/wp-content/uploads/2022/11/آیین_نامه_نحوه_تشکیل_و_عملکرد_کارگروه_ها_ویرایش_5_991220.pdf`
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
                'https://nikan-alumni.org/wp-content/uploads/2022/11/شناسنامه_پروژه_های_کانون_دانش_آموختگان.pdf',
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
              title: 'شورای مرکزی دوره اول',
              link: '/page/22908'
            },
            {
              title: 'شورای مرکزی دوره دوم',
              link: '/page/22801',
            },
            {
              title: 'شورای مرکزی دوره سوم',
              link: '/page/22771',
            },
            {
              title: 'شورای مرکزی دوره چهارم',
              link: '/page/23156',
            },
            {
              title: 'شورای مرکزی دوره پنجم',
              link: '/page/24169',
            },
            {
              title: 'هیٔت اجرایی دوره اول',
              link: '/page/22908',
            },
            {
              title: 'هیٔت اجرایی دوره دوم',
              link: '/page/22755',
            },
            {
              title: 'هیٔت اجرایی دوره سوم',
              link: '/page/22781',
            },
            {
              title: 'هیٔت اجرایی دوره چهارم',
              link: '/page/23152',
            },
            {
              title: 'هیئت اجرایی دوره پنجم',
              link: '/page/24190',
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