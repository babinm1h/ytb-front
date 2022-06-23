import { IVideo } from "../models/video.types";


export interface IStudioState {
    videos: IVideo[]
    videosPending: boolean
    choosenVideo: IVideo | null
    choosenVideoPending: boolean
    updateVideoPending: boolean
    updateVideoSuccess: boolean
    deletePending: boolean
}


export enum StudioActionTypes {
    fetch_videos = 'studio/fetch_videos',
    fetch_choosen_video = 'studio/fetch_choosen_video',
    update_video = 'studio/update_video',
    delete_video = 'studio/delete_video',
}