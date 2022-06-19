import { $authInstance } from ".";
import { IComment } from "../types/models/comment.types";


export class CommentsService {

    static async commentVideo(videoId: string, text: string): Promise<IComment> {
        const { data } = await $authInstance.post(`/comments/${videoId}`, { text })
        return data
    }

    static async deleteComment(commentId: string): Promise<string> {
        const { data } = await $authInstance.delete(`/comments/${commentId}`)
        return data
    }

    static async fetchVideoComments(videoId: string): Promise<IComment[]> {
        const { data } = await $authInstance.get(`/comments/video/${videoId}`)
        return data
    }
}