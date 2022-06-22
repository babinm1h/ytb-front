import { IVideo } from "../models/video.types";


export interface ISubscriptionSlice {
    videos: IVideo[]
    videosPending: boolean
}


export enum SubscriptionsActionTypes {
    fetch_videos = 'subscriptions/fetch_videos'
}