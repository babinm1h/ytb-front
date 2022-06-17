import { $authInstance, $instance } from "."
import { ILoginArgs, IRegisterArgs } from "../types/args.types"
import { IUser } from "../types/models/user.types"
import { setTokenCookie } from "../utils/auth.helpers"


export interface IAuthResponse {
    user: IUser
    token: string
}

export class AuthService {

    static async register(args: IRegisterArgs): Promise<IAuthResponse> {
        const { data } = await $instance.post<IAuthResponse>(`/auth/register`, args)
        setTokenCookie(data.token)
        return data
    }

    static async login(args: ILoginArgs): Promise<IAuthResponse> {
        const { data } = await $instance.post<IAuthResponse>(`/auth/login`, args)
        setTokenCookie(data.token)
        return data
    }

    static async getAuth(): Promise<IUser> {
        const { data } = await $authInstance.get(`/auth/get-auth`)
        return data
    }
}