import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/models/user.types";
import { IVideo } from "../../types/models/video.types";
import { IChannelPageState } from "../../types/slices/channelPage.slice.types";
import { fetchChannelPopularVideos, fetchChannelVideos, fetchProfile } from "../thunks/channelPage.thunks";


const initialState: IChannelPageState = {
    isLoading: true,
    popularVideos: [],
    user: null,
    videos: [],
    isVideosLoading: true
}


const channelPageSlice = createSlice({
    initialState,
    name: 'channelPage',
    reducers: {
        resetChannelPage(state) {
            state.user = null
        }
    },
    extraReducers: {
        [fetchProfile.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false
            state.user = action.payload
        },
        [fetchProfile.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchProfile.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [fetchChannelPopularVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isVideosLoading = false
            state.popularVideos = action.payload
        },
        [fetchChannelPopularVideos.pending.type]: (state, action) => {
            state.isVideosLoading = true
        },
        [fetchChannelPopularVideos.rejected.type]: (state, action) => {
            state.isVideosLoading = false
        },


        [fetchChannelVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.isVideosLoading = false
            state.videos = action.payload
        },
        [fetchChannelVideos.pending.type]: (state, action) => {
            state.isVideosLoading = true
        },
        [fetchChannelVideos.rejected.type]: (state, action) => {
            state.isVideosLoading = false
        },
    }
})



export const { resetChannelPage } = channelPageSlice.actions
export default channelPageSlice.reducer;