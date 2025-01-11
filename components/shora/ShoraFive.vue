<template>

  <div>
    <p>
      شورای پنجم با تغییر در اساسنامه و نحوه انتخابات کار خود را از مهر 1403 آغاز و تا پایان شهریور 1405 ادامه خواهد یافت. در این دوره اعضای شورا منتخبین هر دوره هستند که با رای دانش آموختگان همان دوره برگزیده شده و به شورا راه یافتند. در انتخابات شورای پنجم 45 دوره حضور داشتند و در حدود 1600 نفر در این مشارکت کردند.
در اولین جلسه شورای پنجم کانون دانش آموختگان نیکان مورخ پنجشنبه  ۱۰ آبان ماه ۱۴۰۳ انتخابات داخلی صورت گرفت و این افراد مسئولیت های مندرج در اساسنامه را بعهده گرفتند.
اعضای شورای مرکزی متشکل از 45 نفر از نمایندگان هر دوره باتفاق 5 نفر نمایندگان موسسه فرهنگی نیکان می باشد.

    </p>


<p>
  
 رییس شورا: آقای محمدحسین نوری دوره ۱۰. 
نایب رییس: آقای محمد ظاهری دوره ۵.
منشی اول: آقای محمدحسن بهمن پور دوره ۳٨.
منشی دوم: آقای سیدمهدیار میرمحمدصادقی دوره ۴۲.
 منشی سوم: آقای نیما مازندرانی دوره ۴۳.
</p>

    <table>
      
      <tbody>

        <tr v-for="(j, jinx) in chunk(mems,4)" :key="jinx">
          <td v-for="(i, inx) in j" :key="inx" style="text-align: center" data-label="Account">
            <a :href="i[1]"><img loading="lazy"
                class="aligncenter wp-image-21502 size-thumbnail"
                :src="i[1]" alt=""
                sizes="(max-width: 150px) 100vw, 150px" /></a>
            {{ i[0] }}
          </td>

        </tr>

      </tbody>
    </table>


    <p>&nbsp;</p>
    <p>نمایندگان مدرسه نیز در شورای مرکزی چهارم عبارتند از:</p>
    <p>
      <a href="https://nikan-alumni.org/wp-content/uploads/2024/07/علی-دوایی-نماینده-مدرسه-scaled.jpg"><img
          loading="lazy" class="alignnone wp-image-15611 size-thumbnail"
          src="https://nikan-alumni.org/wp-content/uploads/2024/07/علی-دوایی-نماینده-مدرسه-scaled.jpg" alt=""
          sizes="(max-width: 150px) 100vw, 150px" /></a>
      جناب حاج آقای دوایی
    </p>
    <p>
      <a href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-09-07_11-35-19.jpg"><img loading="lazy"
          class="alignnone wp-image-15611 size-thumbnail"
          src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-09-07_11-35-19.jpg" alt=""
          sizes="(max-width: 150px) 100vw, 150px" /></a>جناب حاج آقای کاشانی وحید
    </p>
    <p>
      <a href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-07-01-at-08-57-26-2/"><img loading="lazy"
          class="wp-image-21601 size-thumbnail alignnone"
          src="https://nikan-alumni.org/wp-content/uploads/2020/12/WhatsApp-Image-2020-07-01-at-08.57.26.jpeg" alt=""
          sizes="(max-width: 150px) 100vw, 150px" /></a>جناب آقای امیدهاشمی۱۷
    </p>

  </div>


</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ShoraFive',
  data() {
    return {
      mems: [
        [
          'آقای سعید نوری 1 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-17-53.jpg'
        ],
        [
          ' آقای حسام الدین ملکی 2 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-19-32.jpg'
        ],
        [
          '         آقای محمدرضا خرازی 3 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-20-34.jpg'
        ],
        [
          '         آقای سید مجید رخ صفت 4 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-21-10.jpg'
        ],
        [
          '         آقای محمدرضا ظاهری 5 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-22-10.jpg'
        ],
        [
          '         آقای محمد حسین ایجادی 6 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-22-27.jpg'
        ],
        [
          '         آقای امیر حریری 7 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-23-54.jpg'
        ],
        [
          '  آقای بهنام پرنیان پور 8 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-24-36.jpg'
        ],
        [
          '         آقای علی پویان 9 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-25-07.jpg'
        ],
        [
          '         آقای محمد حسین نوری 10 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-28-16.jpg'
        ],
        [
          '         آقای حمید زمردی نیا 11 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-25-39.jpg'
        ],
        [
          '         آقای محمدرضا اویسی 12 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-29-42.jpg'
        ],
        [
          '         آقای علی رستم بیگی 13 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-30-12.jpg'
        ],
        [
          '         آقای مهدی علی اکبریان 14 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-31-07.jpg'
        ],
        [
          '         آقای سید وحید ابوالمعالی حسینی 15 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-31-40.jpg'
        ],
        [
          '         آقای یاسر عرب 16 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-32-05.jpg'
        ],
        [
          '         آقای محسن فیاض بخش 17 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-32-33.jpg'
        ],
        [
          '         آقای علی طهرانچی 18 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-33-20.jpg'
        ],
        [
          '         آقای سید عماد طباطبایی یگانه 19 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-34-04.jpg'
        ],
        [
          '         آقای هانی حبیب الله زاده 20 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-34-44.jpg'
        ],
        [
          '         آقای امیر داودی 21 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-35-11.jpg'
        ],
        [
          '         آقای محمد صادق نیلفروشان 22 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_13-35-48.jpg'
        ],
        [
          '         آقای محمد حسین تابش 23 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-23-26.jpg'
        ],
        [
          '         آقای محمد میلاد پنجه شاهی 24 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-24-12.jpg'
        ],
        [
          '        آقای مهدی نکوئیان 25 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-25-12.jpg'
        ],
        [
          'آقای احمد مدبری فرد 26 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-25-45.jpg'
        ],
        [
          '         آقای محمد خوش زبان 27عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-27-19.jpg'
        ],
        [
          'آقای سید محمد حسین فاضلی 28 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-28-07.jpg'
        ],
        [
          '         آقای سید حامد حسینی 29 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-28-59.jpg'
        ],
        [
          '         آقای امیرحسین مواسات 30 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-29-44.jpg'
        ],
        [
          '         آقای امیرحسین عمادزاده 31 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-30-21.jpg'
        ],
        [
          '         آقای حسین ذوقی 32 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-31-00.jpg'
        ],
        [
          '         آقای حمیدرضا حکیم پناه 33 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-31-24.jpg'
        ],
        [
          '         آقای عرفان مینایی 34 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-32-19.jpg'
        ],
        [
          '         آقای سید امیرمحمد علمایی 35 عضو اصلی',

          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-32-58.jpg'
        ],
        [
          '         آقای سید محمد متین ضیایی 36 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-33-42.jpg'
        ],
        [
          '         آقای محمد امین قاسم پور 37 عضو اصلی',

          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-34-31.jpg'
        ],
        [
          '         آقای محمد حسن بهمن پور 38 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-35-28.jpg'
        ],
        [
          '         آقای محمد ملکی تبار 39 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-36-50.jpg'
        ],
        [
          '         آقای محمد امیر اعتدال منفرد 40 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-37-25.jpg'
        ],
        [
          '         آقای حسین پورمند 41 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-38-18.jpg'
        ],
        [
          '         آقای سید مهدیار میر محمد صادقی 42 عضو اصلی',

          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-39-12.jpg'
        ],
        [
          '     آقای نیما مازندرانی 43 عضو اصلی',

          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-39-30.jpg'
        ],
        [
          '         آقای مهدیار کلانتری دولت آباد 44 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-43-10.jpg'
        ],
        [
          '         آقای محمد علی دانش کاظمی 45 عضو اصلی',
          'https://nikan-alumni.org/wp-content/uploads/2025/01/photo_2025-01-11_14-43-39.jpg'
        ]

      ],
    }
  },
  methods: {
    chunk<T>(array: T[], size: number): T[][] {
      if (size <= 0) {
        throw new Error("Size must be a positive number");
      }

      const result: T[][] = [];

      for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
      }

      return result;
    }
  }
})
</script>


<style lang="scss">
h3 {
  @apply text-cyan-500 bg-cyan-50 text-lg p-3 my-2;
}

p {
  @apply leading-7;
}

.size-thumbnail {
  @apply w-40 h-40 mt-2 object-cover;
}

ul:not(.css-header) {
  @apply list-inside list-disc;
}

tr {
  @apply grid grid-cols-4 gap-4 mb-10;

  td {
    a {
      @apply w-full overflow-clip;

      img {
        @apply h-32 w-full object-cover;
      }
    }
  }
}
</style>