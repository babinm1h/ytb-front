import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVideo } from "../../types/models/video.types";
import { IVideoPageState } from "../../types/slices/videoPage.slice.types";
import { fetchSingleVideo } from "../thunks/videoPage.thunks";



const initialState: IVideoPageState = {
    comments: [],
    isCommentsLoading: true,
    isVideoLoading: true,
    video: null
}


const videoPageSlice = createSlice({
    initialState,
    name: "videoPage",
    reducers: {},
    extraReducers: {
        [fetchSingleVideo.fulfilled.type]: (state, action: PayloadAction<IVideo>) => {
            state.video = action.payload
            state.isVideoLoading = false
        },
        [fetchSingleVideo.pending.type]: (state, action) => {
            state.isVideoLoading = true
        },
        [fetchSingleVideo.rejected.type]: (state, action) => {
            state.isVideoLoading = false
        }
    }
})


export default videoPageSlice.reducer;