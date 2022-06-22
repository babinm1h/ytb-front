import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideosService } from "../../API/videos.service";
import { SubscriptionsActionTypes } from "../../types/slices/subscriptions.slice";


export const fetchSubscribedVideos = createAsyncThunk(SubscriptionsActionTypes.fetch_videos,
    async (_, thunk) => {
        try {
            const data = await VideosService.fetchSubscribedVideos()
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })