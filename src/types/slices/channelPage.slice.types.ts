import { IUser } from "../models/user.types";
import { IVideo } from "../models/video.types";


export interface IChannelPageState {
    user: IUser | null
    isLoading: boolean
    popularVideos: IVideo[]
    videos: IVideo[]
    isVideosLoading: boolean
}


export enum ChannelPageActionTypes {
    fetch_profile = 'channelPage/fetch_profile',
    fetch_popular = 'channelPage/fetch_popular',
    fetch_videos = 'channelPage/fetch_videos',
}