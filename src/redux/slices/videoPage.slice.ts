import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IVideo } from "../../types/models/video.types";
import { IVideoPageState } from "../../types/slices/videoPage.slice.types";
import { dislikeVideo, fetchSingleVideo, likeVideo } from "../thunks/videoPage.thunks";



const initialState: IVideoPageState = {
    comments: [],
    isCommentsLoading: true,
    isVideoLoading: true,
    video: null,
    isProcessing: false
}


const videoPageSlice = createSlice({
    initialState,
    name: "videoPage",
    reducers: {
        resetVideo(state) {
            state.video = null
        }
    },
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
        },


        [likeVideo.fulfilled.type]: (state, action: PayloadAction<string>) => {
            if (state.video) {
                if (state.video.dislikes.includes(action.payload)) {
                    state.video.dislikes = state.video.dislikes.filter(id => id !== action.payload)
                    state.video.likes.push(action.payload)
                    state.video.likesCount += 1
                } else if (state.video.likes.includes(action.payload)) {
                    state.video.likes = state.video.likes.filter(id => id !== action.payload)
                    state.video.likesCount -= 1
                } else {
                    state.video.likes.push(action.payload)
                    state.video.likesCount += 1
                }
            }
            state.isProcessing = false
        },
        [likeVideo.pending.type]: (state, action) => {
            state.isProcessing = true
        },
        [likeVideo.rejected.type]: (state, action) => {
            state.isProcessing = false
        },


        [dislikeVideo.fulfilled.type]: (state, action: PayloadAction<string>) => {
            if (state.video) {
                if (state.video.likes.includes(action.payload)) {
                    state.video.likes = state.video.likes.filter(id => id !== action.payload)
                    state.video.likesCount -= 1
                    state.video.dislikes.push(action.payload)
                } else if (state.video.dislikes.includes(action.payload)) {
                    state.video.dislikes = state.video.dislikes.filter(id => id !== action.payload)
                } else {
                    state.video.dislikes.push(action.payload)
                }
            }
            state.isProcessing = false
        },
        [dislikeVideo.pending.type]: (state, action) => {
            state.isProcessing = true
        },
        [dislikeVideo.rejected.type]: (state, action) => {
            state.isProcessing = false
        },
    }
})


export default videoPageSlice.reducer;
export const { resetVideo } = videoPageSlice.actions