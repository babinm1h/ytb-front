import { IUser } from "../models/user.types";


export interface IAuthState {
    user: null | IUser
    loginError: string
    registerError: string
    isInitializing: boolean
    isProccessing: boolean
}


export enum AuthActionTypes {
    login = 'auth/login',
    register = 'auth/register',
    getAuth = 'auth/getAuth',
    likeVideo = 'auth/likeVideo',
    dislikeVideo = 'auth/dislikeVideo',
}