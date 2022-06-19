

export interface IUser {
    email: string
    name: string
    description?: string
    subscribersCount: number
    subscriptions: string[]
    country?: string
    avatar: string
    banner?: string
    _id: string
    likes: string[]
    dislikes: string[]
}