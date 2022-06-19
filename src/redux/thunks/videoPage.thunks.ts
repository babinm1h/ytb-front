import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentsService } from "../../API/comments.service";
import { LikesService } from "../../API/likes.service";
import { VideosService } from "../../API/videos.service";
import { VideoPageActionTypes } from "../../types/slices/videoPage.slice.types";


export const fetchSingleVideo = createAsyncThunk(VideoPageActionTypes.fetch_video,
    async (id: string, thunk) => {
        try {
            const data = await VideosService.fetchOne(id)
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const likeVideo = createAsyncThunk(VideoPageActionTypes.likeVideo,
    async (videoId: string, thunk) => {
        try {
            const data = await LikesService.likeVideo(videoId)
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const dislikeVideo = createAsyncThunk(VideoPageActionTypes.dislikeVideo,
    async (videoId: string, thunk) => {
        try {
            const data = await LikesService.dislikeVideo(videoId)
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })



export const commentVideo = createAsyncThunk(VideoPageActionTypes.create_comment,
    async (payload: { text: string, videoId: string }, thunk) => {
        try {
            const data = await CommentsService.commentVideo(payload.videoId, payload.text)
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const deleteComment = createAsyncThunk(VideoPageActionTypes.delete_comment,
    async (commentId: string, thunk) => {
        try {
            const data = await CommentsService.deleteComment(commentId)
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const fetchVideoComments = createAsyncThunk(VideoPageActionTypes.fetch_comments,
    async (videoId: string, thunk) => {
        try {
            const data = await CommentsService.fetchVideoComments(videoId)
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })