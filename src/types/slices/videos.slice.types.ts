import { IUser } from "../models/user.types";
import { IVideo } from "../models/video.types";

export interface IVideosState {
    videos: IVideo[]
    isLoading: boolean
    popularVideos: IVideo[]
    popularUsers: IUser[]
    searchedVideos: IVideo[]
    isUsersLoading: boolean
    isSearching: boolean

    createPending: boolean
    createSuccess: boolean

    currentPage: number
    totalCount: number
}


export enum VideosActionTypes {
    fetch_all = 'videos/fetch_all',
    fetch_one = 'videos/fetch_one',
    fetch_popular = 'videos/fetch_popular',
    fetch_popular_users = 'videos/fetch_popular_users',
    search_videos = 'videos/search_videos',
    create_video = 'videos/create_video',
}