import { $authInstance, $instance } from ".";
import { IUser } from "../types/models/user.types";


export class UsersService {

    static async fetchProfile(userId: string): Promise<IUser> {
        const { data } = await $instance.get(`/users/${userId}`)
        return data
    }


    static async fetchPopular(): Promise<IUser[]> {
        const { data } = await $instance.get(`/users/get/popular`)
        return data
    }


    static async updateUser(formData: FormData): Promise<IUser> {
        const { data } = await $authInstance.put(`/users/update`, formData)
        return data
    }

    static async toggleSubscribe(userId: string): Promise<IUser> {
        const { data } = await $authInstance.put(`/users/subscribe/${userId}`)
        return data
    }

}