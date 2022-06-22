import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchAllVideosResponse } from "../../API/videos.service";
import { IUser } from "../../types/models/user.types";
import { IVideo } from "../../types/models/video.types";
import { IVideosState } from "../../types/slices/videos.slice.types";
import { createVideo, fetchAllVideos, fetchPopularUsers, fetchPopularVideos, searchVideos } from "../thunks/videos.thunks";


const initialState: IVideosState = {
    isLoading: true,
    videos: [],
    popularVideos: [],
    popularUsers: [],
    isUsersLoading: true,
    isSearching: false,
    searchedVideos: [],
    createPending: false,
    createSuccess: false,
    currentPage: 1,
    totalCount: 0
}


const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        incrCurrentPage(state) {
            state.currentPage += 1
        }
    },
    extraReducers: {
        [fetchAllVideos.fulfilled.type]: (state, action: PayloadAction<IFetchAllVideosResponse>) => {
            state.isLoading = false
            state.videos = [...state.videos, ...action.payload.videos]
            state.totalCount = action.payload.totalCount
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


        [createVideo.fulfilled.type]: (state, action: PayloadAction<IVideo>) => {
            state.createPending = false
            if (action.payload.isPublic) state.videos = [action.payload, ...state.videos];
            state.createSuccess = true
        },
        [createVideo.pending.type]: (state, action) => {
            state.createPending = true
        },
        [createVideo.rejected.type]: (state, action) => {
            state.createPending = false
        },
    }
})


export default videosSlice.reducer;
export const { incrCurrentPage } = videosSlice.actions;