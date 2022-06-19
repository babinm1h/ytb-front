import { IVideo } from "../models/video.types";

export interface IVideoPageState {
    video: IVideo | null
    comments: any
    isVideoLoading: boolean
    isCommentsLoading: boolean
    isProcessing: boolean
}


export enum VideoPageActionTypes {
    fetch_video = 'videoPage/fetch_video',
    fetch_comments = 'videoPage/fetch_comments',
    likeVideo = 'videoPage/likeVideo',
    dislikeVideo = 'videoPage/dislikeVideo',
}