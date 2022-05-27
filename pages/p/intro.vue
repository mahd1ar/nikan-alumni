<template>
  <div ref="parent" dir="rtl" class="container mx-auto py-10">
    <div class="pb-6 mb-4 border-b">
      <ul class="css-header flex gap-4 flex-wrap items-end">
        <li
          v-for="(t, index) in tabs"
          :key="index"
          class="text-gray-400 transition-all"
          :class="
            index === tabindex
              ? 'text-cyan-400 text-lg select-none'
              : 'hover:text-gray-600 cursor-pointer'
          "
          @click="tabindex = index"
        >
          {{ t.title }}
        </li>
      </ul>
    </div>
    <transition mode="out-in" name="anime-intro">
      <div v-if="tabindex === 0" :key="0">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی مدرسه</h1>
        <div>
          موسسه فرهنگی نیکان در سال ۱۳۴۷ توسط مرحوم علامه کرباسچیان و عده‌ای
          دیگر از دل‌سوختگان تعلیم و تربیت اسلامی تأسیس گردید. در این موسسه سعی
          می‌شود محصلان به گونه‌ای در ابعاد مختلف تربیت شوند که با توانمندی روحی
          و جسمی و برخورداری از بهداشت روانی لازم، زندگی دنیوی و اخروی نیکوئی
          داشته و انسان مفیدی برای خود، خانواده و جامعه باشند و همواره این
          امیدواری وجود داشته است که با استعانت از خداوند و همراهی خانواده و
          ظرفیت دانش‌آموزان و بضاعت بشری مربیان، این اهداف آموزشی و تربیتی برای
          تعالی دانش آموزان دنبال و محقق شود. به یقین اهداف واقعی تربیت انسانها
          بسی فراتر از تقریرات بشری است: علمی و آموزشی اعتقادی اخلاقی عاطفی و
          روانی فرهنگی و هنری اجتماعی سیاسی – نظامی اقتصادی زیستی دانش پژوهان
          این موسسه با آگاهی از این حقیقت که “هدایت واقعی از اوست“ خود را در
          معرض این نسیم قرار می دهند، تا به قدر تلاش، ظرفیت، علاقه‌مندی، آراسته
          به زیور انسانیت گردند. نقش مدرسه و مربیان در عناوین فوق محدود نمی‌شود،
          بلکه ریزه‌ کاریها و ظرافت‌های امر تربیت و تعلیم ایجاب می‌کند همواره در
          برنامه‌ریزی و طراحی امور ضمن اتکال به امداد خداوندی و الطاف ائمه
          معصومین علیهم‌السلام از کشفیات و دستاوردهای علمی روز غافل نباشد.
          تجربیات تربیتی موفق از بزرگان این راه همواره مد نظر بوده است و صبر و
          حوصله و بردباری لازمه تربیت فاخر و کارآمد است.
          <ul class="list-inside list-disc">
            <li>علمی و آموزشی</li>
            <li>اعتقادی</li>
            <li>اخلاقی</li>
            <li>عاطفی و روانی</li>
            <li>فرهنگی و هنری</li>

            <li>اجتماعی</li>
            <li>سیاسی – نظامی</li>
            <li>اقتصادی</li>
            <li>زیستی</li>
          </ul>
        </div>
      </div>
      <div v-if="tabindex === 1" :key="1" class="leading-7 text-tm-black">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی کانون</h1>
        <div>
          <p class="">
            مؤسسه ­ی فرهنگی نیکان با هدف غایی تربیت دین­ مداران دانشمند و
            اثرگذار در سطح جهانی و نیز آموزش صحیح و علمی و تربیت مبتنی بر مذهب
            حق تشیّع، بنا نهاده شده است. این­ اهداف والا همبستگی قابل توجهی را
            در میان دانش ­آموختگان این­ نهاد به وجود آورده است. از همین ­روی و
            با توجه به ظرفیت­ های بالقوه ­ی موجود در جامعه­ ی دانش ­آموختگان،
            تشکّل ایشان از اهمیت برخوردار است.
            <br />
            بدین ­منظور کانون دانش ­آموختگان نیکان متشکل از دانش آموختگان عضو
            تشکیل گردید.
            <br />
            یک دانش آموخته فردی است که حدّاقل در یکی از سال­ های تحصیلی مدرسه،
            دارای پرونده­ ی تحصیلی باشد.
            <br />
            دانش­ آموخته­ ای با حدّاقل ۱۸ سال تمام سن که فرآیند عضویت و قبول
            مفاد اساس­نامه و مرام­نامه ­ی کانون را طی کرده باشد، عضو اصلی کانون
            شناخته می شود.
            <br />
            کانون دارای شخصیت حقوقی مستقلّ و استقلال مالی است و کلیه­ ی فعالیت­
            های آن غیرسیاسی و غیرانتفاعی و غیردولتی است و ضمن رعایت کامل قوانین
            و مقررات جمهوری اسلامی ایران بر پایه ­اساس­نامه و مرامنامه خود
            فعالیت خواهد داشت.
            <br />
            موضوع فعالیت کانون، ارائه­ ی خدمات به دانش­ آموختگان مدرسه و ایجاد
            بستری برای شکوفایی و به اشتراک ­گذاری ظرفیت­ ها و توانمندی­ های
            ایشان در راستای اهداف کانون است.
          </p>

          اهداف کلان کانون:
          <ul class="list-inside list-disc">
            <li>
              ایجاد وتقویت ارتباطات و تعاملات بین دانش ­آموختگان و خدمات ­رسانی
              به ایشان، با محوریت اعضا و دوره ­ها و حمایت از این فعالیت ­ها
            </li>
            <li>
              کمک به تحقق اهداف مدرسه (درصورت درخواست مدرسه) به ترتیبی که موجب
              اعتلای سطح علمی یا آموزشی یا پرورشی آن گردد.
            </li>
            <li>
              کمک به ارتقای سطح فرهنگی و اجتماعی و اعتقادی و زیستی و اقتصادی
              جامعه، با محوریت اعضا و دوره ­ها
            </li>
            <li>
              به مجموعه­ ی افرادی که اکثریت غالب ایشان، بر حسب سال اخذ دیپلم، در
              یک گروه قرار داده می­ شوند، دوره اطلاق می گردد.
            </li>
          </ul>
          ارکان کانون عبارتند از:

          <ul class="list-inside list-disc">
            <li>شورای عالی هماهنگی</li>
            <li>شورای مرکزی (به نمایندگی تام الاختیار از مجمع عمومی)</li>
            <li>هیأت اجرایی</li>
            <li>بازرسی</li>
          </ul>
          به مجموعه­ ی همه­ ی اعضای کانون، مجمع عمومی گفته می شود.
        </div>
      </div>

      <div v-if="tabindex === 2" :key="2" class="leading-7 text-tm-black">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی شورای عالی هماهنگی</h1>
        <div>
          شورای عالی هماهنگی کانون از اشخاص زیر تشکیل می­ شود:

          <ul class="list-inside list-disc">
            <li>
              سه نفر نمایندگان مدرسه که حدّاقل یک تن از ایشان از میان اعضای
              کانون انتخاب می شود.
            </li>
            <li>رئیس کانون</li>
            <li>نایب رئیس کانون</li>
          </ul>
          شورای عالی هماهنگی حدّ اقل سالی دو بار، تشکیل جلسه می ­دهد.
          <br />
          <br />
          وظایف شورای عالی هماهنگی:

          <ul class="list-inside list-disc">
            <li>
              تشخیص و پیگیری رفع مغایرت­ های احتمالی چشم انداز و مفاد برنامه­ ی­
              راهبردی مصوّب کانون با اهداف مدرسه.
            </li>

            <li>
              تا رفع مغایرت­ ها و ایرادات وارده، مفاد و موارد مرتبط با آن­ها
              برای کانون، قابل استناد و اجرا نخواهد بود.
            </li>
            <li>
              هماهنگی و نظارت بر رعایت و حسن اجرای مفاد اساس­نامه و سیاست ­ها و
              تأیید خطّ­ مشی­ های کلّی کانون
            </li>
            <li>
              استماع گزارش عملکرد سالانه­ ی شورای مرکزی و ارائه­ ی رهنمودهای
              کلّی در صورت لزوم
            </li>
          </ul>
          <br /><br />
          رسیدگی به پیشنهادها و شکایات دانش ­آموختگان در خصوص کیفیت فعالیت کانون
          و بهبود امور آن

          <h2 class="text-lg text-cyan-500 bg-cyan-50 mt-5 p-1">
            اعضای شورای عالی هماهنگی دوره اول
          </h2>
          نمایندگان مدرسه: جناب حاج آقای دوایی، جناب حاج آقای کاشانی، آقای دکتر
          مهدی دوایی۱ رئیس کانون : آقای مهدی معصومی۲ نایب رئیس کانون: آقای حمید
          یزدانی۴

          <h2 class="text-lg text-cyan-500 bg-cyan-50 mt-5 p-1">
            اعضای شورای عالی هماهنگی دوره دوم
          </h2>
          نمایندگان مدرسه: جناب حاج آقای دوایی، جناب حاج آقای کاشانی، آقای سید
          علی اصغر رهنمافرد۶ رئیس کانون : آقای مهدی معصومی۲ نایب رئیس کانون:
          آقای علی ظاهری۷

          <h2 class="text-lg text-cyan-500 bg-cyan-50 mt-5 p-1">
            اعضای شورای عالی هماهنگی دوره سوم
          </h2>
          نمایندگان مدرسه: جناب حاج آقای دوایی، جناب حاج آقای کاشانی رئیس کانون
          : آقای مهدی معصومی۲ نایب رئیس کانون: آقای نوری۱۰
        </div>
      </div>

      <div v-if="tabindex === 3" :key="3" class="leading-7 text-tm-black">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی شورای مرکزی</h1>
        <div>
          <div class="wpb_text_column wpb_content_element">
            <div class="wpb_wrapper">
              <p>
                <strong>شورای مرکزی کانون</strong> نمایندگان منتخب مجمع عمومی
                هستند که به وکالت از آن مجمع، وظایف قانونی آن را عهده&shy;<br />
                دار می&shy; شوند.
              </p>
              <p>
                مجمع عمومی (متشکل از همه&shy; ی اعضا) شورای مرکزی کانون را از
                طریق رأی&shy; گیری از میان داوطلبان عضو کانون – که حائز
                اکثریت<br />
                نسبی آرا می شوند – برای مدت دو سال، انتخاب می کند. این &shy;شورا
                حسب مورد، به نمایندگی تامّ الاختیار از مجمع عمومی، به<br />
                صورت عادی یا فوق&zwnj;العاده، تشکیل جلسه می &shy;دهد و تصمیمات
                آن به منزله &shy;ی تصمیمات مجمع عمومی خواهد بود.
              </p>
              <p>تعداد دانش &shy;آموختگان عضو شورای مرکزی کانون ۲۴ نفر است.</p>
              <p>
                سه نفر به عنوان نمایندگان مدرسه در جلسات شورای مرکزی با حقّ رأی
                و پس از ارائه&shy; ی معرفی&shy; نامه از مدرسه، شرکت خواهند<br />
                داشت.
              </p>
              <p>
                عضویت در شورای مرکزی کانون افتخاری است و هیچ&shy;یک از اعضا حقّ
                برداشت یا تخصیص یا دریافت هیچ&shy; گونه وجهی از منابع مالی<br />
                کانون را ندارند.
              </p>
              <p>
                شورای مرکزی حدّاقل دو ماه یک بار، تشکیل جلسه خواهد داد. جلسات
                شورای مرکزی با حضور اکثریت اعضا (حدّاقل ۱۴ نفر) رسمیت<br />
                می &shy;یابد.
              </p>
              <p>وظایف شورای مرکزی عبارتند از<strong>:</strong></p>
              <ul>
                <li>
                  انتخاب و عزل رئیس و نایب رئیس و منشی شورای مرکزی و اعضای هیأت
                  اجرایی کانون
                </li>
                <li>انتخاب و عزل بازرس اصلی و علی &shy;البدل</li>
                <li>بررسی و تصویب بودجه&shy; ی کانون و تفریغ بودجه</li>
                <li>تصویب ترازنامه و گزارش&shy; های مالی</li>
                <li>
                  دعوت عمومی از اعضای کانون برای برگزاری مجمع عمومی پیش از پایان
                  دوره&shy; ی مسئولیت، به منظور تشکیل شورای مرکزی جدید
                </li>
                <li>
                  بررسی و اظهار نظر نسبت به گزارش &shy;ها و پیشنهادهای هیأت
                  اجرایی (از جمله درباره&shy; ی برنامه&shy; ی راهبردی کانون) و
                  تصویب<br />
                  آن&shy;ها
                </li>
                <li>
                  تشکیل کارگروه&shy; های تخصصی و مشورتی (در صورت ضرورت و به
                  تعداد مورد نیاز) و نیز انتخاب یا انتصاب اعضای آن&shy;ها از
                  بین<br />
                  اعضای کانون
                </li>
                <li>
                  تعیین روزنامه&shy; ی کثیرالانتشار و سایر شبکه &shy;های اطلاع
                  &shy;رسانی الکترونیکی، جهت درج آگهی &shy;ها و دعوت
                  نامه&zwnj;ها
                </li>
                <li>
                  تعیین شرایط و فرایند لغو عضویت از کانون و تصویب نهایی لغو
                  عضویت افراد
                </li>
                <li>
                  تصویب ساختار و شرح وظایف شعب و نمایندگی &shy;ها و دفاتر کانون
                </li>
                <li>
                  تصویب تغییرات اساس&shy;نامه و اعلام تغییرات به مراجع
                  ذی&shy;ربط
                </li>
                <li>بررسی پیشنهاد انحلال کانون و تصویب یا ردّ آن</li>
                <li>
                  بررسی پیشنهاد تشکیل یا انحلال شعب و نمایندگی&shy; ها و دفاتر
                  کانون و تصویب یا ردّ آن
                </li>
                <li>تغییر در میزان سرمایه</li>
                <li>هر گونه تغییر در ماهیّت کانون</li>
              </ul>
              <p>
                اعضای شورای مرکزی در اولین جلسه پس از انتخاب هیات رئیسه
                <strong>پیمان نامه اعضای شورای مرکزی</strong> را به شرح زیر<br />
                قرائت و خود را ملزم به اجرای مفاد آن در طول دوره حضور در شورای
                مرکزی می نمایند.
              </p>
              <p>
                اعضای <strong>هیأت رئیسه شورا</strong> عبارتند از رئیس، نایب
                رئیس و منشی جلسات منتخب طبق اساسنامه کانون.
              </p>
              <h4></h4>
              <h4 style="text-align: center">
                <span style="color: #33cccc">متن پیمان نامه اعضای شورا</span>
              </h4>
              <p style="text-align: center">بسم الله الرحمن الرحیم</p>
              <p>
                اینک که فعالیت خود را در سمت عضو شورای مرکزی کانون دانش آموختگان
                نیکان آغاز می کنم، در محضر خدای سمیع و بصیر و در<br />
                برابر قرآن مجید با موکلین خود پیمان می بندم که:
              </p>
              <p>
                بر مبنای قوانین نظام مقدس جمهوری اسلامی ایران و شرع مقدس و نیز
                مفاد اساسنامه و مرامنامه کانون، مراعات امانت و بی طرفی<br />
                و روحیه همکاری، در صیانت از مصالح کانون و حمایت از حقوق دانش
                آموختگان و انجام وظایف قانونی خود بکوشم و حقوق و منافع<br />
                دانش آموختگان و اعتلای نام و وجهه کانون در عرصه های مختلف را بر
                منافع شخصی و دوره ای مقدم داشته و از جایگاه کانون<br />
                برای منافع شخصی استفاده نکنم و وقت لازم را برای انجام وظیفه
                عضویت در شورای مرکزی کانون اختصاص بدهم. تعهد اخلاقی خود<br />
                را وثیقه این پیمان قرار می دهم و از خدای بزرگ توفیق خدمتگزاری می
                طلبم.
              </p>
              <br /><br />
              <div>
                <h3>شورای مرکزی اول</h3>
                <div>
                  <p>
                    برای تشکیل شورای مرکزی اول کانون، از دوره ۱ تا ۳۷، مجموعاً
                    ۱۰۰ نفر کاندیدا شدند و مشخصات خود را تا<br />
                    تاریخ
                  </p>
                  <p>۱۱/۵/۱۳۹۵ به دبیرخانه موقت کانون ارسال کردند.</p>
                  <p>
                    روند انتخابات از تاریخ ۱۶/۵/۱۳۹۵ آغاز شد و تا تاریخ
                    ۲۴/۵/۱۳۹۵ ادامه یافت.
                  </p>
                  <p>
                    نتایج انتخابات در تاریخ ۳۱/۵/۱۳۹۵ اعلام شد. بدین ترتیب ۲۴
                    نفر از دانش آموختگان به شرح زیر به عضویت<br />
                    اولین
                  </p>
                  <p>شورای مرکزی کانون درآمدند:</p>
                  <table>
                    <caption>
                      &nbsp;
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-46-48.jpg"
                          >
                            <img
                              loading="lazy"
                              class="size-thumbnail wp-image-15618 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-46-48.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱- آقای مهدی معصومی۲: ۳۵۹ رأی
                        </th>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0007.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20840 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0007.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲- آقای محمد ظاهری۵: ۳۱۳ رأی
                        </th>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-21.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15615 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-21.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۳- آقای حسام زرین۲۰: ۳۰۸ رأی
                        </th>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-28_11-57-31.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-16166 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-28_11-57-31.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۴- آقای حسین فیاض بخش۱۴: ۳۰۵ رأی
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Account">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-05-46.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15720 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-05-46.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۵- اقای میرحامد مدیر زاده تهرانی: ۲۹۳ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-39.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15614 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-39.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۶- آقای سیدعلی اصغر رهنمافرد۶: ۲۸۰ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-15-33.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15620 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-15-33.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۷- اقای شاهین رضا ادیبی۲: ۲۵۴ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-44-59.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15622 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-44-59.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۸- آقای محمدحسین نوری۱۰: ۲۴۳ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-09.03.40.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20960 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-09.03.40.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۹- آقای حمید یزدانی۴: ۲۴۰ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-08-07.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-15722 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-08-07-e1577100828850.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۰- آقای بهنام پرنیان پور۹: ۲۳۶ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-08-39.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15723 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-08-39.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۱- آقای وحید افخمی ستوده۱۸: ۲۰۸ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/12/photo_2019-12-23_13-58-36.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-17942 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/12/photo_2019-12-23_13-58-36.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۲- آقای سید وحید ابوالمعالی۱۵: ۱۹۹ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.56.36.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20961 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.56.36.jpeg"
                              alt="" /></a
                          >– آقای امیر رسولیان۷: ۱۹۳ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-10-25.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15724 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-10-25.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۴- آقای محمدرضا پاکروان۷: ۱۸۴ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-20-at-15.57.13.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20847 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-20-at-15.57.13.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۵- آقای امیرعباس پاکتچیان۱۳: ۱۸۴ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-11-46.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-15726 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-11-46-e1577101446109.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۶- آقای امیر محمود رستم بیگی۱۱: ۱۸۳ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-12-30.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15727 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-12-30.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۷- آقای حمید رفیق دوست۱: ۱۷۶ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/12/photo_2019-12-23_14-08-35.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-17944 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/12/photo_2019-12-23_14-08-35.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۸- آقای امیرحسین زرگرباشی۱۶: ۱۶۷ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0013.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20841 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0013.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۹- آقای عباس نصیرایی۱۲: ۱۶۴ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/12/photo_2019-12-23_18-13-06.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-17948 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/12/photo_2019-12-23_18-13-06.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۰- آقای محمد مهدی راد نیکنام۱۳: ۱۶۲ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-14-19.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15728 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-14-19.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۱- آقای محمدعلی اکرمی۲۲: ۱۶۱ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.57.24.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20962 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.57.24.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۲- آقای مسعود نیلفروشان۲: ۱۵۸ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-15-37.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15730 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-15-37.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۳- آقای محمد سمیعی۳: ۱۵۵ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-16-12.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15731 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-12_20-16-12.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۴- آقای حمید رسولی۵: ۱۵۲ رأی
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>نمایندگان مدرسه نیز در شورای مرکزی اول عبارتند از:</p>
                  <p>جناب حاج آقای دوایی</p>
                  <p>جناب حاج آقای کاشانی وحید</p>
                  <p>جناب آقای دکتر مهدی دوایی</p>
                  <p>
                    مدت فعالیت دوره اول شورای مرکزی کانون از تاریخ ۱/۷/۱۳۹۵ تا
                    ۳۱/۶/۱۳۹۷
                  </p>
                  <p>هیئت رئیسه شورای مرکزی اول:</p>
                  <p>
                    در اولین جلسه شورای مرکزی در تاریخ ۷/۷/۱۳۹۵ اعضای هیئت رئیسه
                    کانون به شرح زیر انتخاب شدند:
                  </p>
                  <p>رئیس کانون: آقای مهدی معصومی۲</p>
                  <p>نایب رئیس کانون: آقای حمید یزدانی۴</p>
                  <p>منشی جلسات شورا: آقای حسام زرین۲۰</p>
                </div>
                <h3>شورای مرکزی دوم</h3>
                <div>
                  <p>
                    برای تشکیل شورای مرکزی دوم کانون، از دوره ۱ تا ۳۹، مجموعاً
                    ۷۶ نفر کاندیدا شدند و مشخصات خود را تا تاریخ
                  </p>
                  <p>۱۴/۵/۱۳۹۷ به دبیرخانه کانون ارسال کردند.</p>
                  <p>
                    روند انتخابات از تاریخ ۸/۶/۱۳۹۷ آغاز شد و تا تاریخ ۱۱/۶/۱۳۹۷
                    ادامه یافت.
                  </p>
                  <p>
                    نتایج نهایی انتخابات در تاریخ ۱۵/۶/۱۳۹۷ اعلام شد. بدین ترتیب
                    ۲۵ نفر از دانش آموختگان به شرح زیر به<br />
                    عضویت
                  </p>
                  <p>دومین شورای مرکزی کانون درآمدند:</p>
                  <table>
                    <tbody>
                      <tr>
                        <td scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/06/photo_2019-11-12_20-08-07.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20892 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/06/photo_2019-11-12_20-08-07.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱- آقای بهنام پرنیان پور۹: ۶۵۴ رأی
                        </td>
                        <td scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-46-48.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15618 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-46-48.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲- آقای مهدی معصومی۲: ۶۵۳ رأی
                        </td>
                        <td scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.56.36.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20961 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.56.36.jpeg"
                              alt="" /></a
                          >۳- آقای امیر رسولیان۷: ۵۳۰ رأی
                        </td>
                        <td scope="col">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-15-33.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15620 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-15-33.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۴- آقای شاهین رضا ادیبی۲: ۴۴۳ رأی
                        </td>
                      </tr>

                      <tr>
                        <td data-label="Account">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.57.26.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20963 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-08.57.26.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۵- آقای امید هاشمی۱۷: ۴۳۲ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-44-59.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15622 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-44-59.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۶- آقای محمدحسین نوری۱۰: ۴۲۷ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-16-16.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15623 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-16-16.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۷- آقای محمدحسن بهمن پور۳۸: ۴۲۰ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-44-24.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15624 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-44-24.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۸- آقای علی ظاهری۷: ۴۰۹ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-16-38.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15625 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-16-38.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۹- آقای شهاب کریمیان۵: ۴۰۰ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-30-52.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-15626 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-30-52-e1577100665558.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۰- آقای مهدی علی اکبریان۱۴: ۳۹۸ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-15-11.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15627 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-15-11.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۱- آقای محمدرضا هنرور۱۸: ۳۹۸ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-23-39.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15628 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-23-39.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۲- آقای محمد اعرابی مقدم۱۷: ۳۸۳ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-21.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15615 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-21.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۳- آقای حسام زرین۲۰: ۳۶۳ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-14-09-1.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15630 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-14-09-1.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۴- آقای سید محمد صدرالسادات۱۶: ۳۶۳ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0002.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20842 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0002.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۵- آقای محمدرضا کوثرمدار۱۲: ۳۶۲ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-30-26.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-15633 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_18-30-26-e1577100599570.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۶- آقای محمدعلی حاجی عمو عصار۶: ۳۴۸ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-37-36.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15634 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-37-36.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۷- آقای مقداد ولایی۲۶: ۳۴۸ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-38-18.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15635 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-38-18.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۸- آقای احمدرضا شاه آبادی۸: ۳۴۵ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-38-51.jpg"
                            ><img
                              loading="lazy"
                              class="alignnone size-thumbnail wp-image-15636"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-38-51.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px"
                          /></a>
                          <p></p>
                          <p>۱۹- آقای محسن میرمحمد صادقی۱۱: ۳۳۸ رأی</p>
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-39-38.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15637 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-39-38.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۰- آقای محمد امین مفتح۳۱: ۳۳۳ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-40-13.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15638 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-40-13.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۱- آقای امیرحسین خیاط تهرانچی۲۹: ۳۲۷ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-06-29-at-16.55.52.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20965 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-06-29-at-16.55.52.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۲- آقای محمد حسین تابش۲۳: ۳۱۹ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-06-30-at-09.13.52.jpeg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20964 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/07/WhatsApp-Image-2020-06-30-at-09.13.52.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۳- آقای سید محمدرضا احمدی۴: ۳۱۶ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-42-19.jpg"
                            ><img
                              loading="lazy"
                              class="size-thumbnail wp-image-15641 aligncenter"
                              src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-11_15-42-19.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۴- آقای محمدعلی مفتح۲۸: ۳۱۲ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0006.jpg"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-20843 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/06/IMG-20200513-WA0006.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۵- آقای حسین ذوقی۳۲: ۳۱۲ رأی
                        </td>
                        <td></td>
                        <td data-label="Amount"></td>
                        <td data-label="Period"></td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>نمایندگان مدرسه نیز در شورای مرکزی دوم عبارتند از:</p>
                  <p>جناب حاج آقای دوایی</p>
                  <p>
                    <a
                      href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-09-07_11-35-19.jpg"
                      ><img
                        loading="lazy"
                        class="alignnone wp-image-15611 size-thumbnail"
                        src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-09-07_11-35-19.jpg"
                        alt=""
                        sizes="(max-width: 150px) 100vw, 150px" /></a
                    >جناب حاج آقای کاشانی وحید
                  </p>
                  <p>
                    <a
                      href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-39.jpg"
                      ><img
                        loading="lazy"
                        class="alignnone size-thumbnail wp-image-15614"
                        src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-11-10_19-13-39.jpg"
                        alt=""
                        sizes="(max-width: 150px) 100vw, 150px" /></a
                    >جناب آقای سیدعلی اصغر رهنمافرد۶
                  </p>
                  <p>
                    مدت فعالیت دوره اول شورای مرکزی کانون از تاریخ ۱/۷/۱۳۹۷ تا
                    ۳۱/۶/۱۳۹۹
                  </p>
                  <p>هیئت رئیسه شورای مرکزی اول:</p>
                  <p>
                    در اولین جلسه شورای مرکزی در تاریخ ۱۱/۷/۱۳۹۷ اعضای هیئت
                    رئیسه کانون به شرح زیر انتخاب شدند:
                  </p>
                  <p>رئیس کانون: آقای مهدی معصومی۲</p>
                  <p>نایب رئیس کانون: آقای علی ظاهری۷</p>
                  <p>
                    منشی جلسات شورا: (سال اول) آقای محمدعلی مفتح۲۸ – (سال دوم)
                    آقای محمدحسن بهمن پور۳۸
                  </p>
                </div>
                <h3>شورای مرکزی سوم</h3>
                <div>
                  <p>
                    برای تشکیل شورای مرکزی دوم کانون، از دوره ۱ تا ۴۰، مجموعاً
                    ۵۰ نفر کاندیدا شدند و مشخصات خود را تا تاریخ
                  </p>
                  <p>۲۸/۵/۱۳۹۹ به دبیرخانه کانون ارسال کردند.</p>
                  <p>
                    روند انتخابات از تاریخ ۳۰/۵/۱۳۹۹ آغاز شد و تا تاریخ ۲/۶/۱۳۹۹
                    ادامه یافت.
                  </p>
                  <p>
                    نتایج نهایی انتخابات در تاریخ ۲/۶/۱۳۹۹ اعلام شد. بدین ترتیب
                    ۲۴ نفر از دانش آموختگان به شرح زیر به<br />
                    عضویت
                  </p>
                  <p>سومین شورای مرکزی کانون درآمدند:</p>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-31-1/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21498 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.31-1.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱- آقای مهدی معصومی۲: ۶۴۶ رأی
                        </th>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-15-31-53/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21494 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-15.31.53.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲- آقای محمد مهدی راد نیکنام۱۳: ۶۳۶ رأی
                        </th>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-12-02-at-14-14-01/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21598 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-02-at-14.14.01.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۳- آقای صدر الدین نوری۳۳: ۵۳۵ رأی
                        </th>
                        <th scope="col">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-15-32-45/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21489 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-15.32.45.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۴- آقای بهنام پرنیان پور۸: ۵۱۸ رأی
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="text-align: center" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-28/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21502 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.28.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۵- آقای فرشاد علامه۱۸: ۵۱۳ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-15-32-17/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21491 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-15.32.17.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۶- آقای شاهین رضا ادیبی۲: ۵۰۹ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-29/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21501 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.29.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۷- آقای محمد ظاهری۵: ۵۰۴ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-15-32-08/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21492 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-15.32.08.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۸- آقای محمد حسین نوری۱۰: ۴۷۹ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-15-59-52/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21488 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-15.59.52.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۹- آقای محمد صراف زاده۴: ۴۷۶ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-17-47-42/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21487 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-17.47.42.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۰- آقای حمیدرضا مرادی مطلق۱۴: ۴۶۹ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-31/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21496 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.31.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۱- آقای احمد رضا شاه آبادی۸: ۴۳۰ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/16150-2/img-20200513-wa0002/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21493 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/IMG-20200513-WA0002-1.jpg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۲- آقای محمد رضا کوثر مدار۱۲: ۴۱۹ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Account">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-30/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21499 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.30.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۳- آقای مهدی علی اکبریان۱۴: ۴۱۷ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/16150-2/a6ddd4f9-0536-4b29-a11d-dca63a1e7f67/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21510 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/A6DDD4F9-0536-4B29-A11D-DCA63A1E7F67.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۴- آقای محمد ذوقی۲۱: ۴۱۴ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-30-1/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21500 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.30-1.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۵- آقای مصطفی محمدی اردهالی۶: ۴۰۸ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-25/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21505 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.25.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۶- آقای عباس مجیدی۲۹: ۴۰۵ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-32/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21495 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.32.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۷- آقای سید علی طباطبایی یگانه۴۰: ۳۸۵ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-12-16-at-06-44-04/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21599 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-16-at-06.44.04.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۱۸- آقای حمید رضا فرحزادی۲۲: ۳۸۴ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-15-at-07-28-15/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21485 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-15-at-07.28.15.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px"
                          /></a>
                          <p></p>
                          <p style="text-align: center">
                            ۱۹- آقای محسن فیض بخش۲۶: ۳۷۴ رأی
                          </p>
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-26/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21503 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.26.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۰- آقای علی رضا کاملی۶: ۳۶۳ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-15-32-35/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21490 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-15.32.35.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۱- آقای حسین ذوقی۳۲: ۳۵۶ رأی
                        </td>
                        <td>
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-11-at-15-29-26-1/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21504 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-11-at-15.29.26-1.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۲- آقای سید علی سید احمدیان۳۹: ۳۵۴ رأی
                        </td>
                        <td data-label="Amount">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-11-14-at-17-53-44/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21486 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-14-at-17.53.44.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۳- آقای محمد حسین فاضلی۲۸: ۳۵۰ رأی
                        </td>
                        <td data-label="Period">
                          <a
                            href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-12-21-at-08-22-14/"
                            ><img
                              loading="lazy"
                              class="aligncenter wp-image-21600 size-thumbnail"
                              src="https://nikan-alumni.org/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-21-at-08.22.14.jpeg"
                              alt=""
                              sizes="(max-width: 150px) 100vw, 150px" /></a
                          >۲۴- آقای دارا کره بند بوشهری۹: ۳۴۹ رأی
                        </td>
                      </tr>
                      <tr>
                        <td scope="row" data-label="Acount"></td>
                        <td></td>
                        <td data-label="Amount"></td>
                        <td data-label="Period"></td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>نمایندگان مدرسه نیز در شورای مرکزی سوم عبارتند از:</p>
                  <p>جناب حاج آقای دوایی</p>
                  <p>
                    <a
                      href="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-09-07_11-35-19.jpg"
                      ><img
                        loading="lazy"
                        class="alignnone wp-image-15611 size-thumbnail"
                        src="https://nikan-alumni.org/wp-content/uploads/2019/11/photo_2019-09-07_11-35-19.jpg"
                        alt=""
                        sizes="(max-width: 150px) 100vw, 150px" /></a
                    >جناب حاج آقای کاشانی وحید
                  </p>
                  <p>
                    <a
                      href="https://nikan-alumni.org/16150-2/whatsapp-image-2020-07-01-at-08-57-26-2/"
                      ><img
                        loading="lazy"
                        class="wp-image-21601 size-thumbnail alignnone"
                        src="https://nikan-alumni.org/wp-content/uploads/2020/12/WhatsApp-Image-2020-07-01-at-08.57.26.jpeg"
                        alt=""
                        sizes="(max-width: 150px) 100vw, 150px" /></a
                    >جناب آقای امیدهاشمی۱۷
                  </p>
                  <p>
                    مدت فعالیت دوره سوم شورای مرکزی کانون از تاریخ ۱/۷/۱۳۹۷ تا
                    ۳۱/۶/۱۳۹۹
                  </p>
                  <p>هیئت رئیسه شورای مرکزی سوم:</p>
                  <p>
                    در اولین جلسه شورای مرکزی در تاریخ ۲۶/۶/۱۳۹۹ اعضای هیئت
                    رئیسه کانون به شرح زیر انتخاب شدند:
                  </p>
                  <p>رئیس کانون: آقای مهدی معصومی۲</p>
                  <p>نایب رئیس کانون: آقای نوری۱۰</p>
                  <p>منشی جلسات شورا: آقای کاملی۶</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tabindex === 4" :key="4" class="leading-7 text-tm-black">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی بازرسی</h1>
        <div>
          <div class="wpb_wrapper">
            <p>
              شورای مرکزی از بین اعضای خود، یک&shy; نفر را به عنوان بازرس اصلی و
              یک نفر را به عنوان بازرس علی&zwnj;البدل، برای مدت یک سال<br />
              انتخاب خواهد کرد.
            </p>
            <p>
              بازرس می&zwnj;تواند بدون داشتن حقّ رأی، در جلسات هیأت اجرایی شرکت
              کند.
            </p>
            <p><strong>وظایف</strong> بازرس به شرح زیر است:</p>
            <ul>
              <li>
                بررسی کلّیه&shy; ی اسناد و اوراق مالی و تهیه&shy; ی گزارش برای
                شورای مرکزی
              </li>
              <li>
                مطالعه&shy; ی گزارش سالانه&shy; ی هیأت اجرایی (اعمّ از مالی و
                غیر&zwnj;مالی) و تهیه&shy; ی گزارش عملکرد، برای ارائه به
                شورای<br />
                مرکزی و شورای عالی هماهنگی
              </li>
              <li>
                گزارش هر گونه تخلف هیأت اجرایی از مفاد اساس&shy;نامه به شورای
                مرکزی و شورای عالی هماهنگی
              </li>
              <li>
                اظهار نظر کتبی درباره&shy;ی صحت صورت دارایی و گزارش عملکرد و
                مطالب و اطلاعاتی که هیأت اجرایی در اختیار شورای مرکزی<br />
                گذاشته&zwnj; است.
              </li>
              <li>
                سایر وظایفی که اساس&shy;نامه و قوانین و مقررات موضوعه به
                عهده&shy; ی بازرس قرار داده است.
              </li>
              <li>
                بازرس می&zwnj;تواند در هرموقع، هرگونه رسیدگی و بازرسی را در مورد
                عملیات کانون انجام دهد و اسناد و مدارک و اطلاعات<br />
                مربوطه را مطالبه کند و مورد رسیدگی قرار دهد و در صورت لزوم،
                تقاضای تشکیل جلسه ی فوق&zwnj;العاده شورای مرکزی داشته<br />
                باشد.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div class="accordion">
              <h3>بازرسان شورای مرکزی اول</h3>
              <div>
                <p>
                  در اولین جلسه شورای مرکزی در تاریخ ۱۳۹۵/۷/۷ بازرسان اصلی و علی
                  البدل به شرح زیر انتخاب شدند:
                </p>
                <p>
                  بازرس اصلی: آقای محمدرضا پاکروان۷<br />
                  بازرس علی البدل: آقای امیر رسولیان۷
                </p>
              </div>
              <h3>بازرسان شورای مرکزی دوم</h3>
              <div>
                <p>
                  در دومین جلسه شورای مرکزی در تاریخ ۱۳۹۷/۷/۱۸ بازرسان اصلی و
                  علی البدل به شرح زیر انتخاب شدند:
                </p>
                <p>
                  بازرس اصلی: آقای محمدحسین نوری۱۰<br />
                  بازرس علی البدل: آقای امیر رسولیان۷
                </p>
              </div>
              <h3>بازرسان شورای مرکزی سوم</h3>
              <div>
                <p>
                  در اولینجلسه شورای مرکزی در تاریخ ۱۳۹۹/۶/۲۶ بازرسان اصلی و علی
                  البدل به شرح زیر انتخاب شدند:
                </p>
                <p>
                  بازرس اصلی: آقای عباس مجیدی۲۹<br />
                  بازرس علی البدل: آقای محمد مهدی راد نیکنام۱۳
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tabindex === 5" :key="5" class="leading-7 text-tm-black">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی هیأت اجرایی</h1>
        <div>
          <div class="wpb_wrapper">
            <p>
              کانون دارای هیأتی اجرایی مرکب از هفت عضو اصلی و دو عضو علی البدل
              خواهد بود که برای مدت دو سال، از میان اعضای شورای مرکزی<br />
              انتخاب می&shy; شوند.
            </p>
            <p>
              اعضای هیأت اجرایی در اولین&shy; جلسه&shy;، از میان خود، یک رئیس و
              یک نایب رئیس و یک خزانه &shy;دار انتخاب خواهند کرد.
            </p>
            <p>
              به منظور اداره &shy;ی امور اجرایی کانون، هیأت اجرایی از بین خود یا
              اعضای کانون، یک نفر را به عنوان دبیر در دوران تصدّی<br />
              مسئولیت هیأت اجرایی، انتخاب می&shy; کند. این&shy; هیأت حدود
              اختیارات و حقّ&zwnj;الزحمه&shy; ی دبیر را تعیین می &shy;کند.
            </p>
            <p>
              جلسات هیأت اجرایی با حضور بیش از نصف اعضا رسمیت می &shy;یابد و
              تصمیمات متَّخَذه با اکثریت آرای حاضران، معتبر خواهد بود.
            </p>
            <p>
              شرکت اعضای هیأت اجرایی در جلسات آن ضروری است و غیبت هر یک از اعضا
              (بدون عذر موجه و بی اطلاع قبلی) تا پنج جلسه &shy;ی متوالی<br />
              یا ده جلسه &shy;ی متناوب طیّ یک سال، در حکم استعفای عضو غایب از
              هیأت اجرایی خواهد بود.
            </p>
            <p>
              هیأت اجرایی – تا زمانی که شورای مرکزی جانشینان آن&shy;ها را انتخاب
              نکرده است – در مسئولیت خود باقی &shy;اند.
            </p>
            <p>
              هیأت اجرایی نماینده&shy; ی قانونی کانون است و
              <strong>وظایف و اختیارات</strong> آن در چارچوب اساس&shy;نامه به
              شرح زیر است:
            </p>
            <ul>
              <li>
                پیگیری نظرات شورای عالی هماهنگی و اجرای مصوّبات شورای مرکزی
              </li>
              <li>
                تنظیم پیش&shy;نویس آیین&shy;نامه &shy;ها و دستورالعمل &shy;های
                اجرایی کانون، جهت اخذ مصوّبه&shy; ی شورای مرکزی و نیز بررسی و
                تأیید<br />
                پیشنهادها و گزارش &shy;های کارگروه &shy;های تخصصی و مشورتی کانون
                و گزارش آن به شورای مرکزی، حسب مورد
              </li>
              <li>
                بررسی و تأیید بودجه و تفریغ بودجه &shy;ی سالانه و گزارش&shy; ها
                و صورت&shy; های مالی کانون (که دبیر کانون تهیه می &shy;کند) و<br />
                پیشنهاد آن به شورای مرکزی برای تصویب
              </li>
              <li>
                ارائه &shy;ی گزارش سالانه&shy; ی عملکرد و نیز صورت&shy; های مالی
                در شورای مرکزی
              </li>
              <li>دریافت و حفظ و حراست از اموال منقول و غیرمنقول کانون</li>
              <li>رسیدگی به حساب&shy; ها و پرداخت دیون و وصول مطالبات</li>
              <li>افتتاح حساب در بانک&shy; ها و سایر مؤسسات مالی</li>
              <li>
                انجام تشریفات قانونی، تعقیب جریانات قضایی و اداری و ثبتی در
                کلّیه&shy; ی مراحل قانونی در محاکم، تعیین وکیل و عزل او<br />
                عنداللّزوم، حلّ و فصل دعاوی از طریق سازش (مصالحه)، تفویض قسمتی
                از اختیارات خود به هر شخص دیگر (اعمّ از حقوقی یا<br />
                حقیقی) با حقّ توکیل (در صورت اقتضا)
              </li>
              <li>
                سایر وظایفی که بر اساس اساس&shy;نامه، به هیأت اجرایی واگذار
                گردیده است.
              </li>
              <li>
                به طور کلّی، هیأت اجرایی می تواند در مورد نقل و انتقال اموال، هر
                اقدام و معامله &shy;ای را که ضروری بداند، پس از<br />
                تصویب شورای مرکزی، از طرف کانون، انجام دهد.
              </li>
              <li>
                جز درباره&shy; ی موضوعاتی که به موجب مفاد این اساس&shy;نامه، اخذ
                تصمیم و اقدام درباره&shy; ی آن&shy;ها در صلاحیت خاصّ شورای<br />
                مرکزی است، هیأت اجرایی کلیه&shy; ی اختیارات لازم برای اداره&shy;
                ی امور را، مشروط به رعایت حدود اهداف و مفاد اساس&shy;نامه،<br />
                دارد.
              </li>
            </ul>
            <br />
            <p>
              <img
                loading="lazy"
                class="size-medium wp-image-9598 aligncenter"
                src="https://nikan-alumni.ir/wp-content/uploads/2018/08/kanoon-Org2-300x256.jpg"
                alt=""
                width="300"
                height="256"
                srcset="
                  https://nikan-alumni.ir/wp-content/uploads/2018/08/kanoon-Org2-300x256.jpg   300w,
                  https://nikan-alumni.ir/wp-content/uploads/2018/08/kanoon-Org2-768x656.jpg   768w,
                  https://nikan-alumni.ir/wp-content/uploads/2018/08/kanoon-Org2-1024x875.jpg 1024w,
                  https://nikan-alumni.ir/wp-content/uploads/2018/08/kanoon-Org2.jpg          1093w
                "
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </p>
            <br />
            <br />
            <div class="accordion">
              <h3>هیأت اجرایی اول</h3>
              <div>
                <p>
                  در اولین جلسه شورای مرکزی در تاریخ ۷/۷/۱۳۹۵ اعضای هیأت اجرایی
                  به شرح زیر انتخاب شدند:<br />
                  اعضای اصلی:<br />
                  آقایان:<br />
                  ۱- محمد ظاهری۵<br />
                  ۲- حمید رسولی۵<br />
                  ۳- سید علی اصغر رهنمافرد۶<br />
                  ۴- بهنام پرنیان پور۹<br />
                  ۵- محمد حسین نوری۱۰<br />
                  ۶- حسین فیاض بخش۱۴<br />
                  ۷- محمدعلی اکرمی۲۲
                </p>
                <p>
                  اعضای علی البدل:<br />
                  اول: آقای امیر زرگرباشی۱۶<br />
                  دوم: آقای شاهین رضا ادیبی۲<br />
                  در اولین جلسه هیأت اجرایی در تاریخ ۵/۸/۱۳۹۵ انتخاب های زیر
                  صورت گرفت:<br />
                  • رئیس هیأت اجرایی: آقای محمد ظاهری۵<br />
                  • نائب رئیس هیأت اجرایی: آقای حمید رسولی۵<br />
                  • خزانه دار کانون: آقای بهنام پرنیان پور۹<br />
                  • دبیر کانون: آقای حسین فیاض بخش۱۴
                </p>
              </div>
              <h3>هیأت اجرایی دوم</h3>
              <div>
                <p>
                  در دومین جلسه شورای مرکزی در تاریخ ۱۸/۷/۱۳۹۷ اعضای هیأت اجرایی
                  به شرح زیر انتخاب شدند:<br />
                  اعضای اصلی:<br />
                  آقایان:<br />
                  ۱- شهاب کریمیان۵<br />
                  ۲- محمد علی حاجی عمو عصار۶<br />
                  ۳- احمدرضا شاه آبادی۸<br />
                  ۴- بهنام پرنیان پور۹<br />
                  ۵- مهدی علی اکبریان۱۴<br />
                  ۶- امید هاشمی۱۷<br />
                  ۷- محمد اعرابی مقدم۱۷
                </p>
                <p>
                  اعضای علی البدل:<br />
                  اول: آقای محمد امین مفتح۳۱<br />
                  دوم: آقای محمدرضا کوثرمدار۱۲
                </p>
                <p>
                  عضو افتخاری:<br />
                  آقای حسین ذوقی۳۲
                </p>
                <p>
                  در اولین جلسه هیأت اجرایی در تاریخ ۲۲/۷/۱۳۹۷ انتخاب های زیر
                  صورت گرفت:<br />
                  • رئیس هیأت اجرایی: آقای بهنام پرنیان پور۹<br />
                  • نائب رئیس هیأت اجرایی: آقای شهاب کریمیان۵<br />
                  • خزانه دار کانون: آقای امید هاشمی۱۷
                </p>
              </div>
              <h3>هیأت اجرایی سوم</h3>
              <div>
                <p>
                  در اولین جلسه شورای مرکزی در تاریخ ۲۶/۶/۱۳۹۹ اعضای هیأت اجرایی
                  به شرح زیر انتخاب شدند:<br />
                  اعضای اصلی:<br />
                  آقایان:<br />
                  ۱- محمد صراف زاده۴<br />
                  ۲- محمد ظاهری۵<br />
                  ۳- احمدرضا شاه آبادی۸<br />
                  ۴- بهنام پرنیان پور۹<br />
                  ۵- مهدی علی اکبریان۱۴<br />
                  ۶- حمیدرضا مرادی مطلق۱۴<br />
                  ۷- مجمد ذوقی۲۱
                </p>
                <p>
                  اعضای علی البدل:<br />
                  اول: آقای علی سید احمدیان۳۹<br />
                  دوم: آقای دارا بوشهری۹
                </p>
                <p>&nbsp;</p>
                <p>
                  در اولین جلسه هیأت اجرایی در تاریخ ۳/۷/۱۳۹۹ انتخاب های زیر
                  صورت گرفت:<br />
                  • رئیس هیأت اجرایی: آقای بهنام پرنیان پور۹<br />
                  • نائب رئیس هیأت اجرایی: آقای محمد صراف زاده۴<br />
                  • خزانه دار کانون: آقای محمد ذوقی۲۱
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tabindex === 6" :key="6" class="leading-7 text-tm-black">
        <h1 class="text-cyan-400 text-xl mb-10">معرفی دبیرخانه</h1>
        <div>
          <div class="wpb_wrapper">
            <p>
              به منظور اداره &shy;ی امور اجرایی کانون، هیأت اجرایی از بین خود یا
              اعضای کانون، یک نفر را به عنوان دبیر در دوران تصدّی
              <br />
              مسئولیت هیأت اجرایی، انتخاب می&shy; کند. این&shy; هیأت حدود
              اختیارات و حقّ&zwnj;الزحمه&shy; ی دبیر را تعیین می &shy;کند.
            </p>
            <p>
              دبیر کانون مجری مصوبات شورای مرکزی و هیأت اجرایی است و ا<strong
                >ختیارات و مسئولیت</strong
              >&shy; های زیر را دارد:
            </p>
            <ul>
              <li>
                نمایندگی قانونی در مراجع رسمی و نهادها و در برابر اشخاص حقیقی یا
                حقوقی؛
              </li>
              <li>
                استخدام و عزل و نصب کارکنان دبیرخانه&shy; ی کانون، در حدود ضوابط
                و مصوبات و با تصویب هیأت اجرایی؛
              </li>
              <li>
                اخذ و نگهداری دارایی و اموال و حساب&shy; ها و اسناد و دفاتر
                کانون؛
              </li>
              <li>
                اعمال اختیاراتی که (به&shy; صورت موردی یا مقطعی) هیأت اجرایی به
                وی تفویض کرده باشد؛
              </li>
              <li>
                ارائه&shy; ی پیشنهادهای لازم در زمینه &shy;ی گسترش و بهبود و
                هماهنگی در فعالیت &shy;های کانون به هیأت اجرایی، برای ارائه
                به<br />
                شورای مرکزی؛
              </li>
              <li>
                تهیه&shy; ی پیش&shy; نویس ترازنامه و بودجه و خطّ&shy; مشی و
                گزارش سالانه برای بررسی هیأت اجرایی و ارسال آنها به شورای مرکزی؛
              </li>
              <li>
                تهیه &shy;ی پیش&zwnj;نویس آیین&zwnj;نامه&zwnj;های مورد لزوم،
                برای طرح و تصمیم&zwnj;گیری در هیأت اجرایی؛
              </li>
              <li>
                نظارت و ایجاد هماهنگی در فعالیت شعب و نمایندگی&zwnj;ها و دفاتر،
                در صورت وجود؛
              </li>
              <li>
                پیشنهاد برگزاری جلسه&shy; ی مجمع فوق&zwnj;العاده به هیأت اجرایی
                برای تصویب، با ذکر علل موجّه؛
              </li>
              <li>
                انجام وظایفی که به صورت موردی از سوی هیأت اجرایی به وی ابلاغ می
                شود.
              </li>
            </ul>
            <br /><br />
            <div class="accordion">
              <h3>دبیرخانه دوره اول</h3>
              <div>
                <p>
                  در اولین جلسه هیأت اجرایی در تاریخ ۵/۸/۱۳۹۵ آقای حسین فیاض
                  بخش۱۴ به عنوان دبیر کانون انتخاب شدند.
                </p>
              </div>
              <h3>دبیرخانه دوره دوم</h3>
              <div>
                <p>
                  در هشتمین جلسه هیأت اجرایی در تاریخ ۲۳/۸/۱۳۹۷ آقای محمد سمیعی۳
                  به عنوان دبیر کانون انتخاب شدند. ایشان از<br />
                  ۲۳/۸/۱۳۹۷ تا ۲۹/۱۲/۱۳۹۷ مشغول به فعالیت بودند.
                </p>
                <p>
                  سپس در بیست و نهمین جلسه هیئت اجرایی در تاریخ ۱۵/۲/۱۳۹۸ آقای
                  حسین فیاض بخش۱۴ به عنوان دبیر کانون انتخاب شدند.
                </p>
              </div>
              <h3>دبیرخانه دوره سوم</h3>
              <div>
                <p>
                  در نهمین جلسه هیأت اجرایی در تاریخ ۷/۸/۱۳۹۹ آقای محمد صراف
                  زاده۴&nbsp; به عنوان دبیر کانون انتخاب شدند. ایشان از<br />
                  ۷/۸/۱۳۹۹ تا ۷/۸/۱۴۰۱ مشغول به فعالیت خواهند بودند.
                </p>
                <br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { RootState as navbarState } from '@/store/navigation/index'
// import lottie from 'lottie-web'

export default Vue.extend({
  data() {
    return {
      tabindex: 0,
    }
  },
  computed: {
    tabs() {
      return (
        (this.$store.state.navigation as navbarState).menu.find(
          (i) => i.href === '/p/intro'
        )!.submenu || []
      )
    },
  },
  created() {
    const hash = this.$route.hash ? this.$route.hash.split('#')[1].trim() : ''
    console.log({ hash })
    if (hash) {
      this.tabs.forEach((i, index) => {
        console.log(i.href.split('#')[1].trim())
        if (i.href.split('#')[1].trim() === hash) {
          console.log({ index })
          this.tabindex = index
        }
      })
    } else {
      this.$router.push({
        path: this.$route.path,
        hash: this.tabs[0].href.split('#')[1],
      })
    }
    // lottie.loadAnimation({
    //   container: this.$refs.parent as HTMLDivElement, // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'https://assets5.lottiefiles.com/packages/lf20_znukgxzs.json', // the path to the animation json
    // })
  },
})
</script>

<style lang="scss" scoped>
.anime-intro {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    opacity: 1;
  }
  &-enter {
    background: rgb(255, 255, 255);
    clip-path: polygon(98% 0, 100% 0, 100% 100%, 89% 100%);
    position: absolute;
    opacity: 0;
  }
  &-leave-to {
    background: rgb(255, 255, 255);
    position: absolute;
    clip-path: polygon(0 0, 0 10%, 0 100%, 0 100%);
    opacity: 0;
  }
}

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