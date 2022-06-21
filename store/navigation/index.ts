import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { WPapi } from '~/data/GlobslTypes'

export type Menu = {
  title: string
  hasSubmenu: boolean
  href: string
  svg: string
  submenu?: Menu[]
}

enum SVG {
  INTRO = `
                <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2rem"
                height="2rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
            >
                <path
                fill="currentColor"
                d="M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
                />
            </svg>
                `,
  LIB = `
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2rem"
                    height="2rem"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path
                    style="stroke-width: 0.5px; stroke: white"
                    fill="currentColor"
                    d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021c.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196c.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"
                    />
                </svg>
                `,
  EVENT = `
                <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="2rem"
                height="2rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
              >
                <path
                  fill="currentColor"
                  d="m16.17 25.86l-5.36-5.36a1 1 0 0 1 1.41-1.41L16.17 23l8.64-8.64a1 1 0 0 1 1.41 1.41Z"
                  class="clr-i-outline clr-i-outline-path-1"
                />
                <path
                  fill="currentColor"
                  d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6Z"
                  class="clr-i-outline clr-i-outline-path-2"
                />
                <path
                  fill="currentColor"
                  d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                  class="clr-i-outline clr-i-outline-path-3"
                />
                <path
                  fill="currentColor"
                  d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                  class="clr-i-outline clr-i-outline-path-4"
                />
                <path
                  fill="currentColor"
                  d="M13 6h10v2H13z"
                  class="clr-i-outline clr-i-outline-path-5"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>`,
  MEDIA = `
            <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 36 36"
            >
            <path
            fill="currentColor"
            d="M32.12 10H3.88A1.88 1.88 0 0 0 2 11.88v18.24A1.88 1.88 0 0 0 3.88 32h28.24A1.88 1.88 0 0 0 34 30.12V11.88A1.88 1.88 0 0 0 32.12 10ZM32 30H4V12h28Z"
            class="clr-i-outline clr-i-outline-path-1"
            />
            <path
            fill="currentColor"
            d="M30.14 3a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v1h24Z"
            class="clr-i-outline clr-i-outline-path-2"
            />
            <path
            fill="currentColor"
            d="M32.12 7a1 1 0 0 0-1-1h-26a1 1 0 0 0-1 1v1h28Z"
            class="clr-i-outline clr-i-outline-path-3"
            />
            <path
            fill="currentColor"
            d="M12.82 26.79a1.74 1.74 0 0 0 .93.28a1.68 1.68 0 0 0 .69-.15l9.77-4.36a1.69 1.69 0 0 0 0-3.1l-9.77-4.36a1.7 1.7 0 0 0-2.39 1.55v8.72a1.7 1.7 0 0 0 .77 1.42Zm.63-10.14a.29.29 0 0 1 .14-.25a.3.3 0 0 1 .16 0a.27.27 0 0 1 .12 0l9.77 4.35a.29.29 0 0 1 .18.28a.28.28 0 0 1-.18.27l-9.77 4.36a.28.28 0 0 1-.28 0a.31.31 0 0 1-.14-.25Z"
            class="clr-i-outline clr-i-outline-path-4"
            />
            <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            `,
  INSUR = `
            <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
            >
            <g
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            >
            <path
                stroke-width="1"
                stroke="currentColor"
                d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
            />
            <path d="M22 34V14h4v20h-4Z" />
            <path d="M34 26H14v-4h20v4Z" />
            </g>
            </svg>
            `,
  JURNAL = `
            <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
            >
            <path
            fill="currentColor"
            d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186Zm118 0h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24Z"
            />
            </svg>
            `,
  USER = `
            <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2rem"
            height="2rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            >
            <path
            fill="currentColor"
            d="m12 22l-3-3H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4l-3 3ZM5 4v13h5l2 2l2-2h5V4H5Zm11 10.986H8V14.6a3.82 3.82 0 0 1 4-3.6a3.82 3.82 0 0 1 4 3.6v.386ZM12 10a1.934 1.934 0 0 1-2-2a1.935 1.935 0 0 1 2-2a1.935 1.935 0 0 1 2 2a1.934 1.934 0 0 1-2 2Z"
            />
            </svg>
            `,

  EVENT_NESHAT = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  role="img"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    d="m21.88 2.15l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a8.65 8.65 0 0 0 1.47 6.6c-.06.21-.12.42-.17.63A22.6 22.6 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41zm-7.27 13.93c-2.61 1.11-5.73.92-7.48-.45a13.79 13.79 0 0 1 1.21-2.84A10.17 10.17 0 0 1 9.73 11a9 9 0 0 1 1.81-1.42A12 12 0 0 1 16 8V7a11.43 11.43 0 0 0-5.26 1.08a10.28 10.28 0 0 0-4.12 3.65a15.07 15.07 0 0 0-1 1.87a7 7 0 0 1-.38-3.73a5.24 5.24 0 0 1 3.14-4a8.93 8.93 0 0 1 3.82-.84c.62 0 1.23.06 1.87.11a16.2 16.2 0 0 0 6-.35C20 7.55 19.5 14 14.61 16.08z"
  />
</svg>`,

  EVENT_CASB = `
<svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
              
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M216 64h-40v-8a24.1 24.1 0 0 0-24-24h-48a24.1 24.1 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16ZM96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v72H40V80Zm0 128H40v-40h176v40Z"
                />
              </svg>`,
  EVENT_ELM = `
<svg
xmlns="http://www.w3.org/2000/svg"
aria-hidden="true"
role="img"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 36 36"
>
<path
  fill="currentColor"
  d="M10 5.2h18v1.55H10z"
  class="clr-i-outline clr-i-outline-path-1"
/>
<path
  fill="currentColor"
  d="M29 8H9.86A1.89 1.89 0 0 1 8 6a2 2 0 0 1 1.86-2H29a1 1 0 0 0 0-2H9.86A4 4 0 0 0 6 6a4.14 4.14 0 0 0 0 .49a1 1 0 0 0 0 .24V30a4 4 0 0 0 3.86 4H29a1 1 0 0 0 1-1V9.07A1.07 1.07 0 0 0 29 8Zm-1 24H9.86A2 2 0 0 1 8 30V9.55a3.63 3.63 0 0 0 1.86.45H28Z"
  class="clr-i-outline clr-i-outline-path-2"
/>
<path fill="none" d="M0 0h36v36H0z" />
</svg>
`,

  EVENT_SALAMAT = `     <svg
xmlns="http://www.w3.org/2000/svg"
aria-hidden="true"
role="img"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 24 24"
>
<path
  stroke="currentColor"
  stroke-width="1.5px"
  fill="none"
  d="M19.649 5.286L14 8.548V2.025h-4v6.523L4.351 5.286l-2 3.465l5.648 3.261l-5.648 3.261l2 3.465L10 15.477V22h4v-6.523l5.649 3.261l2-3.465l-5.648-3.261l5.648-3.261z"
/>
</svg>`,

  EVENT_KHEYRIYE = `<svg
xmlns="http://www.w3.org/2000/svg"
aria-hidden="true"
role="img"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 24 24"
>
<path
  fill="currentColor"
  d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547l-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001l.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001c.01 0 .002-.001.002-.001h.001l.002-.001l.003-.001l.002-.001l.002-.001l.003-.001l.002-.001c.003 0 .001-.001.002-.001l.003-.002l.002-.001l.002-.001l.003-.001l.002-.001h.001l.002-.001h.001l.002-.001l.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186l-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705c-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485c.081.065.163.139.247.222l.707.707l.707-.707c.084-.083.166-.157.247-.222c.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"
/>
</svg>`,

  EVENT_PR = ` <svg
xmlns="http://www.w3.org/2000/svg"
aria-hidden="true"
role="img"
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 20 20"
>
<path
  fill="currentColor"
  d="M10 4.5a6.5 6.5 0 0 0-4.601 11.091a.75.75 0 1 1-1.062 1.06a8 8 0 1 1 13.632-6.355a3.004 3.004 0 0 0-1.756-1.21A6.503 6.503 0 0 0 10 4.5Zm4.637 4.626A5.002 5.002 0 0 0 5 11c0 1.377.558 2.626 1.458 3.53a.75.75 0 0 0 1.063-1.06a3.5 3.5 0 1 1 5.811-3.544a3 3 0 0 1 1.305-.8ZM8 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9.5 1a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
/>
</svg>`
}

enum Mutations {
  toggleMobileMenu = 'TOGGLE_MOBILE_MENU',
  toggleDarkMenu = 'TOGGLE_DARK_MENU',
  makeVideoSubmenu = 'MAKE_VIDEO_SUBMENU',
}
interface FOOTERCOL {
  title: string
  items: {
    type: 'email' | 'tel' | 'href' | 'text'
    title: string
    link?: string
  }[]
}

const initialState = {
  darkMenu: {
    show: true,
  },
  mobileMenu: {
    isOpen: false,
  },
  menu: [
    {
      title: 'خانه',
      hasSubmenu: false,
      href: '/',
      svg: SVG.INTRO,
      submenu: [],
    },
    {
      title: 'معرفی',
      hasSubmenu: true,
      href: '/p/intro',
      svg: SVG.INTRO,
      submenu: [
        {
          title: 'معرفی مجموعه',
          hasSubmenu: false,
          href: '/p/intro#scholl',
        },
        {
          title: 'کانون  ',
          hasSubmenu: false,
          href: '/p/intro#alumni',
        },
        {
          title: 'شورای عالی هماهنگی  ',
          hasSubmenu: false,
          href: '/p/intro#highCoordinationCouncil',
        },
        {
          title: 'شورای مرکزی',
          hasSubmenu: false,
          href: '/p/intro#centralCouncil',
        },
        {
          title: 'بازرسی',
          hasSubmenu: false,
          href: '/p/intro#inspection',
        },
        {
          title: 'هیأت اجرایی',
          hasSubmenu: false,
          href: '/p/intro#executiveCommittee',
        },
        {
          title: 'دبیرخانه',
          hasSubmenu: false,
          href: '/p/intro#mailroom',
        },
      ],
    },
    {
      title: 'کتابخانه',
      hasSubmenu: false,
      svg: SVG.LIB,
      href: '/p/library',
    },
    {
      title: 'رویداد ها',
      hasSubmenu: true,
      href: '/event/category',
      svg: SVG.EVENT,
      submenu: [
        {
          svg: SVG.EVENT_PR,
          title: 'روابط عمومی',
          hasSubmenu: false,
          href: '/event/category/pr',
        },
        {
          svg: SVG.EVENT_NESHAT,
          title: 'کارگروه نشاط و سرگرمی',
          hasSubmenu: false,
          href: '/event/category/entertainment-and-entertainment',
        },
        {
          svg: SVG.EVENT_KHEYRIYE,
          title: 'کارگروه امور خیریه و عام المنفعه',
          hasSubmenu: false,
          href: '/event/category/charity',
        },
        {
          svg: SVG.EVENT_SALAMAT,
          title: 'کارگروه خانواده و امور اجتماعی',
          hasSubmenu: false,
          href: '/event/category/family-and-health',
        },
        {
          svg: SVG.EVENT_ELM,
          title: 'کارگروه علم و فرهنگ',
          hasSubmenu: false,
          href: '/event/category/science-and-culture',
        },
        {
          svg: SVG.EVENT_CASB,
          title: 'کارگروه کسب و کار',
          hasSubmenu: false,
          href: '/event/category/business',
        },
      ],
    },
    {
      title: 'آرشیو رسانه',
      hasSubmenu: true,
      href: '/video',
      svg: SVG.MEDIA,
      submenu: [
        { hasSubmenu: false, href: '/video#ted', title: 'تد نیکان', svg: '' },
        {
          hasSubmenu: false,
          href: '/video#business-challenges',
          title: 'چالش های کسب و کار',
          svg: '',
        },
        {
          hasSubmenu: false,
          href: '/video#medical-discussion',
          title: 'بحث های پزشکی',
          svg: '',
        },
        { hasSubmenu: false, href: '/video#karbarg', title: 'کاربرگ', svg: '' },
        {
          hasSubmenu: false,
          href: '/video#clubinar',
          title: 'کلابینار',
          svg: '',
        },
        { hasSubmenu: false, href: '/video#live', title: 'لایوها', svg: '' },
        {
          hasSubmenu: false,
          href: '/video#nikasar',
          title: 'نیک اثار',
          svg: '',
        },
      ],
    },
    {
      title: 'انواع بیمه',
      hasSubmenu: true,
      href: '#',
      svg: SVG.INSUR,
      submenu: [
        {
          title: 'بیمه خودرو',
          hasSubmenu: false,
          href: '/page/22017',
        },
        {
          title: 'بیمه مسئولیت',
          hasSubmenu: false,
          href: '/page/22015',
        },
        {
          title: 'بیمه آتش سوزی',
          hasSubmenu: false,
          href: '/page/22013',
        },
        {
          title: 'بیمه درمان تکمیلی اعضا و وابستگان درجه یک',
          hasSubmenu: false,
          href: '/page/22005',
        },
        {
          title: 'فرم درخواست بیمه درمان تکمیلی',
          hasSubmenu: false,
          href: '/page/22403',
        },
        {
          title: 'بیمه درمان تکمیلی وابستگان درجه دو',
          hasSubmenu: false,
          href: '/page/22007',
        },
        {
          title: 'بیمه درمان تکمیلی گروهی و شرکتی',
          hasSubmenu: false,
          href: '/page/22009',
        },
      ],
    },
    {
      title: 'نشریات',
      hasSubmenu: true,
      href: '#',
      svg: SVG.JURNAL,
      submenu: [
        {
          title: 'کاربرگ',
          hasSubmenu: false,
          href: '/post/category/karbarg-cat',
        },

      ],
    },
    // {
    //   title: 'پروفایل اعضا',
    //   hasSubmenu: false,
    //   href: 'google.com',
    //   svg: SVG.USER,
    // },
  ] as Menu[],
  footer: {
    col1: {
      title: 'راه های ارتباطی',
      items: [
        {
          type: 'tel',
          title: '02122631250',
        },
        {
          type: 'tel',
          title: '02122631787',
        },
        {
          type: 'tel',
          title: '02178169000',
        },
        {
          type: 'tel',
          title: '09203179823',
        },
        {
          type: 'email',
          title: 'nikanalumni@gmail.com',
        },
        {
          type: 'text',
          title: `
          الهیه، خیابان فیاضی (فرشته)، خیابان چناران، پلاک ۳/۲، طبقه
          اول.
          `,
        },
      ],
    },
    col2: {
      title: 'شبکه های اجتماعی',
      items: [
        {
          title: 'اینستاگرام',
          type: 'href',
          link: 'https://www.instagram.com/kanoonikan/',
        },
        {
          title: 'کانال تلگرام',
          type: 'href',
          link: 'https://t.me/kanoonikan',
        },
        {
          title: 'لینکدین',
          type: 'href',
          link: 'https://www.linkedin.com/company/74597528/admin/',
        },
      ],
    },
    col3: {
      title: 'پیوند ها',
      items: [
        {
          title: 'نیک پیوند ',
          type: 'href',
          link: 'http://nikan.nikpeyvand.com/',
        },
        {
          title: 'امور خیریه',
          type: 'href',
          link: 'https://www.instagram.com/kanoon_nikan_charity/',
        },
        {
          title: 'نیک آثار',
          type: 'href',
          link: 'https://www.instagram.com/nikasaar/',
        },
        {
          title: 'دبیرستان نیکان',
          type: 'href',
          link: 'https://nikan.sch.ir/',
        },
        {
          title: 'دبستان و متوسطه اول نیکان',
          type: 'href',
          link: 'http://nikanschool.net/',
        },
      ],
    },
  } as {
    col1: FOOTERCOL
    col2: FOOTERCOL
    col3: FOOTERCOL
  },
}

export const state = () => ({
  ...initialState,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  menu: (state) => state.menu,
  isOpenMobileMenu: (state) => state.mobileMenu.isOpen,
  showDarkMenu: (state) => state.darkMenu.show,
}

export const mutations: MutationTree<RootState> = {
  [Mutations.toggleMobileMenu]: (state, nval: boolean) => {
    state.mobileMenu.isOpen = nval
  },
  [Mutations.toggleDarkMenu]: (state, nval: boolean) => {
    state.darkMenu.show = nval
  },
  [Mutations.makeVideoSubmenu]: (state, nval: Menu[]) => {
    const vm = state.menu.find((i) => i.href === '/video')!
    nval.forEach((i) => {
      vm.submenu!.push(i)
    })
  },
}

export const actions: ActionTree<RootState, RootState> = {
  closeMobileMenu: ({ commit }) => {
    commit(Mutations.toggleMobileMenu, false)
  },
  openMobileMenu: ({ commit }) => {
    commit(Mutations.toggleMobileMenu, true)
  },

  toggleDarkMenu: ({ commit, state }, val: boolean | undefined) => {
    if (typeof val === 'undefined') {
      commit(Mutations.toggleDarkMenu, !state.darkMenu.show)
    } else commit(Mutations.toggleDarkMenu, val)
  },
  makeVideoSubmenu: ({ commit }, items: WPapi.categories.RootObject[]) => {
    const submenus = items.map((item) => {
      const m: Menu = {
        hasSubmenu: false,
        href: '/video#' + item.slug,
        title: item.name,
        svg: '',
      }
      return m
    })

    commit(Mutations.makeVideoSubmenu, submenus)
  },
}
