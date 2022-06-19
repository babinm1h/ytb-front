import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVideo } from "../../types/models/video.types";
import { IVideosState } from "../../types/slices/videos.slice.types";
import { fetchAllVideos, fetchPopularVideos } from "../thunks/videos.thunks";


const initialState: IVideosState = {
    isLoading: true,
    videos: [],
    popularVideos: []
}


const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isLoading = false
            state.videos = action.payload
        },
        [fetchAllVideos.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchAllVideos.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [fetchPopularVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isLoading = false
            state.popularVideos = action.payload
        },
        [fetchPopularVideos.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchPopularVideos.rejected.type]: (state, action) => {
            state.isLoading = false
        },
    }
})


export default videosSlice.reducer;