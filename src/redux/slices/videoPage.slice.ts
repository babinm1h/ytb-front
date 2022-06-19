import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../types/models/comment.types";
import { IVideo } from "../../types/models/video.types";
import { IVideoPageState } from "../../types/slices/videoPage.slice.types";
import { commentVideo, deleteComment, dislikeVideo, fetchSingleVideo, fetchVideoComments, likeVideo } from "../thunks/videoPage.thunks";



const initialState: IVideoPageState = {
    comments: [],
    isCommentsLoading: true,
    isVideoLoading: true,
    video: null,
    isProcessing: false,
    isCommenting: false
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


        [fetchVideoComments.fulfilled.type]: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
            state.isCommentsLoading = false
        },
        [fetchVideoComments.pending.type]: (state, action) => {
            state.isCommentsLoading = true
        },
        [fetchVideoComments.rejected.type]: (state, action) => {
            state.isCommentsLoading = false
        },


        [commentVideo.fulfilled.type]: (state, action: PayloadAction<IComment>) => {
            state.comments.push(action.payload)
            if (state.video) state.video.commentsCount += 1;
            state.isProcessing = false
        },
        [commentVideo.pending.type]: (state, action) => {
            state.isProcessing = true
        },
        [commentVideo.rejected.type]: (state, action) => {
            state.isProcessing = false
        },


        [deleteComment.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.comments = state.comments.filter(c => c._id !== action.payload)
            if (state.video) state.video.commentsCount -= 1;
            state.isCommenting = false
        },
        [deleteComment.pending.type]: (state, action) => {
            state.isCommenting = true
        },
        [deleteComment.rejected.type]: (state, action) => {
            state.isCommenting = false
        },
    }
})


export default videoPageSlice.reducer;
export const { resetVideo } = videoPageSlice.actions