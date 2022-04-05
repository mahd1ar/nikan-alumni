export interface PostScheme {
    id: number
    gqlid: string
    title: string
    commentCount: string
    imageLink: string | null
    date: string
    wpdate: string
    faFormattedDate?: string[]
    category: string
    content?: string

}

export interface CategoryScheme {
    id: string
    databaseId: number
    title: string
    totalCount?: number
    imageLink: string | null
    description: string
    children: { title: string, slug: string }[]
}

export interface Event extends PostScheme {

    location: string
    duration: number
}

