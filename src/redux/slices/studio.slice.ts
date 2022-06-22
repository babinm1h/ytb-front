import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IVideo } from "../../types/models/video.types";
import { IStudioState } from "../../types/slices/studio.slices";
import { fetchChoosenVideo, fetchStudioVideos, updateVideo } from "../thunks/studio.thunks";


const initialState: IStudioState = {
    choosenVideo: null,
    videos: [],
    choosenVideoPending: true,
    videosPending: true,
    updateVideoPending: false,
    updateVideoSuccess: false
}


const studioSlice = createSlice({
    initialState,
    name: "studio",
    reducers: {

    },
    extraReducers: {
        [fetchStudioVideos.fulfilled.type]: (state, action: PayloadAction<IVideo[]>) => {
            state.videos = action.payload
            state.videosPending = false
        },
        [fetchStudioVideos.pending.type]: (state, action) => {
            state.videosPending = true
        },
        [fetchStudioVideos.rejected.type]: (state, action) => {
            state.videosPending = false
        },


        [fetchChoosenVideo.fulfilled.type]: (state, action: PayloadAction<IVideo>) => {
            state.choosenVideo = action.payload
            state.choosenVideoPending = false
        },
        [fetchChoosenVideo.pending.type]: (state, action) => {
            state.choosenVideoPending = true
        },
        [fetchChoosenVideo.rejected.type]: (state, action) => {
            state.choosenVideoPending = false
        },


        [updateVideo.fulfilled.type]: (state, action: PayloadAction<IVideo>) => {
            state.choosenVideo = action.payload
            state.updateVideoPending = false
            state.updateVideoSuccess = true
        },
        [updateVideo.pending.type]: (state, action) => {
            state.updateVideoPending = true
        },
        [updateVideo.rejected.type]: (state, action) => {
            state.updateVideoPending = false
            state.updateVideoSuccess = false
        },
    }
})


export default studioSlice.reducer;