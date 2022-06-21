import { IUser } from "./user.types"


export interface IVideo {
    _id: string
    createdAt: string
    title: string
    video: string
    preview: string
    description: string
    user: IUser
    views: number
    likesCount: number
    subscribersCount: number
    likes: string[]
    dislikes: string[]
    isPublic: boolean
    commentsCount: number
}