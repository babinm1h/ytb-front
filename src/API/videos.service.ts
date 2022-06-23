import { $authInstance, $instance } from ".";
import { IVideo } from "../types/models/video.types";

export interface IFetchAllVideosResponse {
    totalCount: number
    videos: IVideo[]
}


export class VideosService {

    static async fetchAll(page: number): Promise<IVideo[]> {
        const { data } = await $instance.get("/videos", { params: { page } })
        return data
    }


    static async fetchOne(videoId: string): Promise<IVideo> {
        const { data } = await $instance.get(`/videos/${videoId}`)
        return data
    }


    static async search(searchTerm: string): Promise<IVideo[]> {
        const { data } = await $instance.get("/videos/search", { params: { searchTerm } })
        return data
    }


    static async fetchPopularVideos(): Promise<IVideo[]> {
        const { data } = await $instance.get("/videos/most/popular",)
        return data
    }


    static async fetchChannelPopularVideos(userId: string): Promise<IVideo[]> {
        const { data } = await $instance.get(`/videos/most/popular/${userId}`,)
        return data
    }


    static async fetchChoosenVideo(videoId: string): Promise<IVideo> {
        const { data } = await $authInstance.get(`videos/studio/video/${videoId}`,)
        return data
    }

    static async fetchChannelVideos(userId: string): Promise<IVideo[]> {
        const { data } = await $instance.get(`/videos/user/${userId}`,)
        return data
    }


    static async createVideo(formData: FormData): Promise<IVideo> {
        const { data } = await $authInstance.post('/videos', formData)
        return data
    }

    static async fetchSubscribedVideos(): Promise<IVideo[]> {
        const { data } = await $authInstance.get(`videos/subscriptions/for/auth/user`,)
        return data
    }


    static async fetchStudioVideos(): Promise<IVideo[]> {
        const { data } = await $authInstance.get(`videos/studio`,)
        return data
    }

    static async updateVideo(videoId: string, formData: FormData): Promise<IVideo> {
        const { data } = await $authInstance.put(`videos/update/${videoId}`, formData)
        return data
    }

    static async delete(videoId: string): Promise<IVideo> {
        const { data } = await $authInstance.delete(`videos/${videoId}`,)
        return data
    }

}