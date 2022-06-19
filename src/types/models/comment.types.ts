import { IUser } from "./user.types"


export interface IComment {
    text: string
    createdAt: string
    _id: string
    user: IUser
}