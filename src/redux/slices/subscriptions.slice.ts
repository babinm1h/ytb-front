import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IVideo } from "../../types/models/video.types";
import { ISubscriptionSlice } from "../../types/slices/subscriptions.slice";
import { fetchSubscribedVideos } from "../thunks/subscriptions.thunks";


const initialState: ISubscriptionSlice = {
    videos: [],
    videosPending: true
}


const subscriptionsSlice = createSlice({
    initialState,
    name: "subscriptions",
    reducers: {},
    extraReducers: {
        [fetchSubscribedVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.videos = action.payload
            state.videosPending = false
        },
        [fetchSubscribedVideos.pending.type]: (state, action) => {
            state.videosPending = true
        },
        [fetchSubscribedVideos.rejected.type]: (state, action) => {
            state.videosPending = false
        },
    }
})


export default subscriptionsSlice.reducer;