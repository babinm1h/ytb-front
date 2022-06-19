import { IVideo } from "../models/video.types";

export interface IVideosState {
    videos: IVideo[]
    isLoading: boolean
    popularVideos: IVideo[]
}


export enum VideosActionTypes {
    fetch_all = 'videos/fetch_all',
    fetch_one = 'videos/fetch_one',
    fetch_popular = 'videos/fetch_popular',
}