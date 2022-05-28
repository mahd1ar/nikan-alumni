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

  export namespace upcommingEvent {


    interface Category {
      term_id: number
      name: string
      slug: string
      term_group: number
      term_taxonomy_id: number
      taxonomy: string
      description: string
      parent: number
      count: number
      filter: string
    }

    export interface RootObject {
      ID: number
      post_author: string
      post_date: string
      post_date_gmt: string
      post_content: string
      post_title: string
      post_excerpt: string
      post_status: string
      comment_status: string
      ping_status: string
      post_password: string
      post_name: string
      to_ping: string
      pinged: string
      post_modified: string
      post_modified_gmt: string
      post_content_filtered: string
      post_parent: number
      guid: string
      menu_order: number
      post_type: string
      post_mime_type: string
      comment_count: string
      filter: string
      gqlid: string
      featured_image: string
      category: Category[]
      duration: string
      venue: string
    }
  }

  export namespace allvideos {


    interface Guid {
      rendered: string;
    }

    interface Title {
      rendered: string;
    }

    interface Content {
      rendered: string;
      protected: boolean;
    }

    interface Excerpt {
      rendered: string;
      protected: boolean;
    }

    interface Self {
      href: string;
    }

    interface Collection {
      href: string;
    }

    interface About {
      href: string;
    }

    interface Wp_attachment {
      href: string;
    }

    interface Wp_term {
      taxonomy: string;
      embeddable: boolean;
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
      'wp_attachment': Wp_attachment[];
      'wp_term': Wp_term[];
      curies: Cury[];
    }

    interface Acf {
      speakers: string;
    }

    export interface RootObject {
      id: number;
      date: string;
      date_gmt: string;
      guid: Guid;
      modified: string;
      modified_gmt: string;
      slug: string;
      status: string;
      type: string;
      link: string;
      title: Title;
      content: Content;
      excerpt: Excerpt;
      featured_media: number;
      template: string;
      meta: any[];
      categories: number[];
      tags: any[];
      acf: Acf;
      _links: _link;
    }

  }


  export namespace event {

    interface Guid {
      rendered: string;
    }

    interface Title {
      rendered: string;
    }

    interface Content {
      rendered: string;
      protected: boolean;
    }

    interface Excerpt {
      rendered: string;
      protected: boolean;
    }

    interface Acf {
      duration: number;
      venue: string;
      price: string;
    }

    interface Self {
      href: string;
    }

    interface Collection {
      href: string;
    }

    interface About {
      href: string;
    }

    interface Reply {
      embeddable: boolean;
      href: string;
    }

    interface Wp_attachment {
      href: string;
    }

    interface Wp_term {
      taxonomy: string;
      embeddable: boolean;
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
      replies: Reply[];
      wp_attachment: Wp_attachment[];
      wp_term: Wp_term[];
      curies: Cury[];
    }

    export interface RootObject {
      id: number;
      date: string;
      date_gmt: string;
      guid: Guid;
      modified: string;
      modified_gmt: string;
      slug: string;
      status: string;
      type: string;
      link: string;
      title: Title;
      content: Content;
      excerpt: Excerpt;
      featured_media: number;
      comment_status: string;
      ping_status: string;
      template: string;
      meta: any[];
      categories: number[];
      tags: any[];
      acf: Acf;
      _links: _link;
    }


  }


  export namespace pulicUser {

    export interface RootObject {
      iD: string;
      user_login: string;
      user_nicename: string;
      user_email: string;
      user_url: string;
      user_registered: string;
      user_activation_key: string;
      user_status: string;
      display_name: string;
      firstname: string;
      lastname: string;
      mobile: string;
      phone: string;
      location: string;
      misc: string;
      avatar: string;
      description: string;
      occupation: string;
    }

  }

}