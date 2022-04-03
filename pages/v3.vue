<template>
  <div dir="rtl" class="">
    <!-- <div
      class="fixed top-10 left-10 z-50 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500"
    >
      <span class="hidden sm:block">sm</span>
      <span class="hidden md:block">md</span>
      <span class="hidden lg:block">lg</span>
      <span class="hidden xl:block">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div> -->

    <!-- hero section -->
    <div class="w-full flex flex-col">
      <div class="flex flex-col h-full w-full relative">
        <div class="relative h-full">
          <!-- <img
            class="w-full h-full object-cover object-bottom absolute top-0 left-0"
            src="img/IMG_4141(ACR v8.1)F-2MP.jpg"
            alt=""
          /> -->
          <video
            class="w-full h-full object-cover object-bottom absolute top-0 left-0"
            src="test/output_Trim.mp4"
            muted
            loop
            autoplay
          ></video>
          <div class="top-0 left-0 h-full w-full relative">
            <div class="h-full relative w-full">
              <home-navigation></home-navigation>
              <div
                class="m-blur-background w-full h-full absolute top-0 left-0"
              ></div>
              <div
                class="mx-auto h-full flex flex-row-reverse container relative"
              >
                <div class="w-5/12 flex-center">
                  <div
                    class="flex flex-col gap-6 justify-center bg-slate-900 bg-opacity-0 my-24 p-4 rounded-md"
                  >
                    <div class="text-5xl text-right font-bold text-gray-50">
                      کانون
                      <br />
                      دانش آموختگان
                      <br />
                      نیکان
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
  background: linear-gradient(90deg, #297387 0%, rgb(179 250 0 / 3%) 100%);
  /* backdrop-filter: blur(2px); */
  mix-blend-mode: overlay;
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
