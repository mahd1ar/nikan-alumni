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
}

enum Mutations {
  toggleMobileMenu = 'TOGGLE_MOBILE_MENU',
  toggleDarkMenu = 'TOGGLE_DARK_MENU',
  makeVideoSubmenu = "MAKE_VIDEO_SUBMENU"
}
interface FOOTERCOL {
  title: string,
  items: {
    type: 'email' | 'tel' | 'href' | 'text',
    title: string,
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
      submenu: [
      ],
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
          title: 'روابط عمومی',
          hasSubmenu: false,
          href: '/event/category/pr',
        },
        {
          title: 'کارگروه نشاط و سرگرمی',
          hasSubmenu: false,
          href: '/event/category/entertainment-and-entertainment',
        },
        {
          title: 'کارگروه امور خیریه و عام المنفعه',
          hasSubmenu: false,
          href: '/event/category/charity',
        },
        {
          title: 'کارگروه خانواده و امور اجتماعی',
          hasSubmenu: false,
          href: '/event/category/family-and-health',
        },
        {
          title: 'کارگروه علم و فرهنگ',
          hasSubmenu: false,
          href: '/event/category/science-and-culture',
        },
        {
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
      submenu:
        [
          { "hasSubmenu": false, "href": "/video#ted", "title": "تد نیکان", "svg": "" },
          { "hasSubmenu": false, "href": "/video#business-challenges", "title": "چالش های کسب و کار", "svg": "" },
          { "hasSubmenu": false, "href": "/video#medical-discussion", "title": "بحث های پزشکی", "svg": "" },
          { "hasSubmenu": false, "href": "/video#karbarg", "title": "کاربرگ", "svg": "" },
          { "hasSubmenu": false, "href": "/video#clubinar", "title": "کلابینار", "svg": "" },
          { "hasSubmenu": false, "href": "/video#live", "title": "لایوها", "svg": "" },
          { "hasSubmenu": false, "href": "/video#nikasar", "title": "نیک اثار", "svg": "" }]

    },
    {
      title: 'انواع بیمه',
      hasSubmenu: true,
      href: '/notyetready',
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
      href: '',
      svg: SVG.JURNAL,
      submenu: [
        {
          title: 'بیمه خودرو',
          hasSubmenu: false,
          href: '',
        },
        {
          title: 'بیمه مسئولیت',
          hasSubmenu: false,
          href: '',
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
          title: '22631250',
        },
        {
          type: 'tel',
          title: '09203179823',
        },
        {
          type: 'text',
          title: `
          الهیه، خیابان فیاضی (فرشته)، خیابان چناران، پلاک ۳/۲، طبقه
          اول.
          `,
        },
      ]
    },
    col2: {
      title: "شبکه های اجتماعی",
      items: [
        {
          title: 'اینستاگرام',
          type: 'href',
          link: '#'
        },
        {
          title: 'کانال تلگرام',
          type: 'href',
          link: '#'
        },
        {
          title: 'لینکدین',
          type: 'href',
          link: '#'
        },

      ]
    },
    col3: {
      title: "پیوند ها",
      items: [
        {
          title: 'نیک پیوند ',
          type: 'href',
          link: 'http://nikan.nikpeyvand.com/'
        },
        {
          title: 'امور خیریه',
          type: 'href',
          link: '#'
        },
        {
          title: 'نیک آثار',
          type: 'href',
          link: 'https://www.instagram.com/nikasaar/'
        },
        {
          title: 'دبیرستان نیکان',
          type: 'href',
          link: 'https://nikan.sch.ir/'
        },
        {
          title: 'دبستان و متوسطه اول نیکان',
          type: 'href',
          link: 'http://nikanschool.net/'
        },

      ]
    }
  } as {
    col1: FOOTERCOL
    col2: FOOTERCOL
    col3: FOOTERCOL
  }
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
    const vm = state.menu.find(i => i.href === '/video')!
    nval.forEach(i => {
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
    console.log('show dark menu', !state.darkMenu.show)
    if (typeof val === 'undefined') {
      commit(Mutations.toggleDarkMenu, !state.darkMenu.show)
    } else commit(Mutations.toggleDarkMenu, val)
  },
  makeVideoSubmenu: ({ commit }, items: WPapi.categories.RootObject[]) => {

    const submenus = items.map(item => {
      const m: Menu = {
        hasSubmenu: false,
        href: "/video#" + item.slug,
        title: item.name,
        svg: ''

      }
      return m
    })

    commit(Mutations.makeVideoSubmenu, submenus)

  },

}
