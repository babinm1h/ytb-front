import { $authInstance } from ".";


export class LikesService {

    static async likeVideo(videoId: string) {
        const { data } = await $authInstance.put(`/likes/video/like/${videoId}`)
        return data
    }


    static async dislikeVideo(videoId: string) {
        const { data } = await $authInstance.put(`/likes/video/dislike/${videoId}`)
        return data
    }
}