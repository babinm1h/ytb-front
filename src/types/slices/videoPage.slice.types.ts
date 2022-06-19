import { IVideo } from "../models/video.types";

export interface IVideoPageState {
    video: IVideo | null
    comments: any
    isVideoLoading: boolean
    isCommentsLoading: boolean
}


export enum VideoPageActionTypes {
    fetch_video = 'videoPage/fetch_video',
    fetch_comments = 'videoPage/fetch_comments',
}