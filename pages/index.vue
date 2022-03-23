<template>
  <div dir="rtl" class="">
    <!-- search -->
    <client-only>
      <transition name="v-fade">
        <float-search @closeModal="search.show = false" v-if="search.show" />
      </transition>
    </client-only>

    <!-- hero section -->
    <div class="h-screen w-full flex flex-col">
      <!-- <nuxt-link to="login">++++</nuxt-link> -->
      <div class="flex flex-col h-full w-full relative">
        <div class="relative h-full">
          <img
            class="w-full h-full object-cover object-bottom absolute top-0 left-0"
            src="img/IMG_4141(ACR v8.1)F-2MP.jpg"
            alt=""
          />
          <div class="top-0 left-0 h-full w-full relative">
            <div class="h-full relative w-full">
              <home-navigation @openModal="search.show = true" />
              <div
                class="m-blur-background w-full h-full absolute top-0 left-0"
              ></div>
              <div
                class="mx-auto h-full flex flex-row-reverse container relative"
              >
                <div class="flex flex-col gap-6 justify-center w-5/12">
                  <div class="text-5xl text-right font-bold text-gray-50">
                    کانون
                    <br />
                    دانش آموختگان
                    <br />
                    <span class="text-cyan-300"> نیکان </span>
                  </div>
                  <p class="text-white text-lg">
                    محلی است برای ارائه خدمات به دانش آموختگان مدرسه نیکان و
                    ایجاد بستری برای شکوفایی و به اشتراک گذاری ظرفیت ها
                  </p>
                  <div class="text-sm">
                    <button
                      class="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded"
                    >
                      درباره کانون دانش آموختگان
                    </button>
                    <button
                      class="ml-4 inline-flex text-white bg-gray-100 bg-opacity-20 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded"
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

    <rest-of-home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      search: {
        show: false,
      },
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
    // @ts-ignore
    window.l = this
    setInterval(() => {
      const n = this.counter.fname
      // console.log(this.counter.fst)
      this.counter.fname = n > 0 ? n - 1 : 59
    }, 1000)
  },
})
</script>

<style >
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