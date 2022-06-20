import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/models/user.types";
import { IVideo } from "../../types/models/video.types";
import { IVideosState } from "../../types/slices/videos.slice.types";
import { fetchAllVideos, fetchPopularUsers, fetchPopularVideos, searchVideos } from "../thunks/videos.thunks";


const initialState: IVideosState = {
    isLoading: true,
    videos: [],
    popularVideos: [],
    popularUsers: [],
    isUsersLoading: true,
    isSearching: false,
    searchedVideos: []
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

        [fetchPopularUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isUsersLoading = false
            state.popularUsers = action.payload
        },
        [fetchPopularUsers.pending.type]: (state, action) => {
            state.isUsersLoading = true
        },
        [fetchPopularUsers.rejected.type]: (state, action) => {
            state.isUsersLoading = false
        },


        [searchVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isSearching = false
            state.searchedVideos = action.payload
        },
        [searchVideos.pending.type]: (state, action) => {
            state.isSearching = true
        },
        [searchVideos.rejected.type]: (state, action) => {
            state.isSearching = false
        },
    }
})


export default videosSlice.reducer;