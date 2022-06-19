import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../types/models/user.types";
import { IVideo } from "../../types/models/video.types";
import { IChannelPageState } from "../../types/slices/channelPage.slice.types";
import { fetchChannelPopularVideos, fetchProfile } from "../thunks/channelPage.thunks";


const initialState: IChannelPageState = {
    isLoading: true,
    popularVideos: [],
    user: null,
    videos: []
}


const channelPageSlice = createSlice({
    initialState,
    name: 'channelPage',
    reducers: {},
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
            state.isLoading = false
            state.popularVideos = action.payload
        },
        [fetchChannelPopularVideos.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchChannelPopularVideos.rejected.type]: (state, action) => {
            state.isLoading = false
        },
    }
})



export default channelPageSlice.reducer;