export interface PostScheme {
  id: number
  gqlid: string
  title: string
  commentCount: string
  imageLink: string | null
  date: string
  wpdate: string
  faFormattedDate?: string[]
  category: string | any[]
  content?: string
}

export interface CategoryScheme {
  id: string
  databaseId: number
  title: string
  totalCount?: number
  imageLink: string | null
  description: string
  children: { title: string; slug: string }[]
}

export enum EventStatus {
  ahead = -1,
  current,
  passed,
}
export interface Event extends PostScheme {
  location: string
  duration: number
  eventStatus?: EventStatus
}

export type SupportedSocialMedia = 'instagram' | 'linkedin' | 'twitter'

type SupportedSocialMedias = {
  [key in SupportedSocialMedia]: string
}
export interface UserFullProfile {
  id: string
  databaseId: number
  username: string
  firstName: string
  lastName: string
  email: string
  avatar: string
  occupation: string
  mobile: string
  phone: string
  website: string
  jobLocation: {
    lat: number
    lng: number
  }
  location: {
    city: string
    providence: string
  }
  bio: string
  premium: boolean
  gen: string
  socialMedias: SupportedSocialMedias
}

export namespace WPapi {
  export namespace categories {

    interface Self {
      href: string;
    }

    interface Collection {
      href: string;
    }

    interface About {
      href: string;
    }

    interface Wp_post_type {
      href: string;
    }

    interface Cury {
      name: string;
      href: string;
      templated: boolean;
    }

    interface _link {
      self: Self[];
      collection: Collection[];
      about: About[];
      'wp:post_type': Wp_post_type[];
      curies: Cury[];
    }

    export interface RootObject {
      id: number;
      count: number;
      description: string;
      link: string;
      name: string;
      slug: string;
      taxonomy: string;
      parent: number;
      meta: any[];
      acf: any[];
      _links: _link;
    }
  }

}

