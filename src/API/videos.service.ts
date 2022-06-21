import { $authInstance, $instance } from ".";
import { IVideo } from "../types/models/video.types";


export class VideosService {

    static async fetchAll(): Promise<IVideo[]> {
        const { data } = await $instance.get("/videos")
        return data
    }


    static async fetchOne(videoId: string) {
        const { data } = await $instance.get(`/videos/${videoId}`)
        return data
    }


    static async search(searchTerm: string) {
        const { data } = await $instance.get("/videos/search", { params: { searchTerm } })
        return data
    }


    static async fetchPopularVideos() {
        const { data } = await $instance.get("/videos/most/popular",)
        return data
    }


    static async fetchChannelPopularVideos(userId: string) {
        const { data } = await $instance.get(`/videos/most/popular/${userId}`,)
        return data
    }


    static async fetchChannelVideos(userId: string) {
        const { data } = await $instance.get(`/videos/user/${userId}`,)
        return data
    }


    static async createVideo(formData: FormData): Promise<IVideo> {
        const { data } = await $authInstance.post('/videos', formData)
        return data
    }
}