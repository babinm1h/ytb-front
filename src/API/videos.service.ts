import { $instance } from ".";
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


    static async search() {
        const { data } = await $instance.get("/videos/search", { params: {} })
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
}