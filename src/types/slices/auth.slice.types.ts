import { IUser } from "../models/user.types";


export interface IAuthState {
    user: null | IUser
    loginError: string
    registerError: string
    isInitializing: boolean
    isProccessing: boolean
    isSubscribing: boolean
    updatePending: boolean
    updateSuccess: boolean
}


export enum AuthActionTypes {
    login = 'auth/login',
    register = 'auth/register',
    getAuth = 'auth/getAuth',
    subscribe = 'auth/subscribe',
    unsubscribe = 'auth/unsubscribe',
    update_user = 'auth/update_user',
}