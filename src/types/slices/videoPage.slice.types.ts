import { IComment } from "../models/comment.types";
import { IVideo } from "../models/video.types";

export interface IVideoPageState {
    video: IVideo | null
    comments: IComment[]
    isVideoLoading: boolean
    isCommentsLoading: boolean
    isProcessing: boolean
    isCommenting: boolean
}


export enum VideoPageActionTypes {
    fetch_video = 'videoPage/fetch_video',
    likeVideo = 'videoPage/likeVideo',
    dislikeVideo = 'videoPage/dislikeVideo',
    create_comment = 'videoPage/create_comment',
    fetch_comments = 'videoPage/fetch_comments',
    delete_comment = 'videoPage/delete_comment',
}