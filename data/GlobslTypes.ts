export interface Event {
    id: number
    gqlid: string
    title: string
    commentCount: string
    imageLink: string | null
    date: string
    wpdate: string
    faFormattedDate?: string[]
    category: string
    location: string
    duration: number
}
