/* eslint-disable camelcase */
export const timeout = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export const toIndiaDigits = (num: string | number): string => {
  if (typeof num === 'number') {
    num = String(num)
  }

  const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

  return num.replace(/[0-9]/g, function (w) {
    return id[+w]
  })
}

export function gregorian_to_jalali(
  gy: number,
  gm: number,
  gd: number
): [number, number, number] {
  let jy, jm, jd, days
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  const gy2 = gm > 2 ? gy + 1 : gy
  days =
    355666 +
    365 * gy +
    ~~((gy2 + 3) / 4) -
    ~~((gy2 + 99) / 100) +
    ~~((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1]
  jy = -1595 + 33 * ~~(days / 12053)
  days %= 12053
  jy += 4 * ~~(days / 1461)
  days %= 1461
  if (days > 365) {
    jy += ~~((days - 1) / 365)
    days = (days - 1) % 365
  }
  if (days < 186) {
    jm = 1 + ~~(days / 31)
    jd = 1 + (days % 31)
  } else {
    jm = 7 + ~~((days - 186) / 30)
    jd = 1 + ((days - 186) % 30)
  }
  return [jy, jm, jd]
}

export const wordpressDateToJalali = (
  wpdate: string
): [number, number, number] => {
  const delemiter = wpdate.search('T') > -1 ? 'T' : ' '
  const d = wpdate
    .split(delemiter)[0]
    .split('-')
    .map((i) => Number(i))
  return gregorian_to_jalali(d[0], d[1], d[2])
}

export const wordpressDateToFormattedJalali = (wpdate: string): string[] => {
  const delemiter = wpdate.search('T') > -1 ? 'T' : ' '
  const d = wpdate
    .split(delemiter)[0]
    .split('-')
    .map((i) => Number(i))
  const months = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ]

  return gregorian_to_jalali(d[0], d[1], d[2]).map((i, index) =>
    index === 1 ? months[i - 1] : toIndiaDigits(i)
  )
}

export const twoDigits = (n: number) => (n / 10).toFixed(1).replace('.', '')

export const filterCategory = (cats: string[]) =>
  cats.filter(
    (i) => process.env.MOTHERCATEGORIES?.split(',').includes(i) === false
  )

export const htmlEscape = (str: string) => (

  String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
)


export class BioHandler {
  static delimiter = "~"
  static url_delimiter = ";"
  static supportedSocialMedias = ['instagram', 'linkedin', "twitter"]
  static compose(str: string, urls: string[]) {
    str = htmlEscape(str).replaceAll(this.delimiter, '');
    urls = urls.map(m => m.replaceAll(this.url_delimiter, '')).filter(Boolean);
    return str + this.delimiter + urls.join(this.url_delimiter)
  }

  static decompose(bio: string) {

    const [biography, urls = ""] = bio.split(this.delimiter);
    const x = this.supportedSocialMedias
    type supportedSocialMediasType = typeof x[number]

    const socialMedias = this.supportedSocialMedias.reduce((a, v) => ({ ...a, [v]: "" }), {} as { [K in supportedSocialMediasType]: string })

    urls.split(this.url_delimiter).filter(Boolean).forEach(url => {

      const findedSocialMedia = this.supportedSocialMedias.find(sm => url.search(sm) > -1)
      if (findedSocialMedia) {
        socialMedias[findedSocialMedia] = url
      }
    })


    return { biography, socialMedias }
  }
}

export class LocationHandler {
  static decompose(langlat: string) {
    const res = langlat.split(",").map(i => i.trim()).filter(Boolean)
    if (res.length === 2) {
      if (parseFloat(res[0]) && parseFloat(res[1]))
        return {
          lat: parseFloat(res[0]),
          lng: parseFloat(res[1])
        }

    }

    return {
      lat: 0,
      lng: 0
    }
  }

  static compose(input: { lng: number, lat: number }): string {
    return input.lat + "," + input.lng
  }

}

// function jalali_to_gregorian(jy, jm, jd) {
//   var sal_a, gy, gm, gd, days;
//   jy += 1595;
//   days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
//   gy = 400 * ~~(days / 146097);
//   days %= 146097;
//   if (days > 36524) {
//     gy += 100 * ~~(--days / 36524);
//     days %= 36524;
//     if (days >= 365) days++;
//   }
//   gy += 4 * ~~(days / 1461);
//   days %= 1461;
//   if (days > 365) {
//     gy += ~~((days - 1) / 365);
//     days = (days - 1) % 365;
//   }
//   gd = days + 1;
//   sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
//   return [gy, gm, gd];
// }
