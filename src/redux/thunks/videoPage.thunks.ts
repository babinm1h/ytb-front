import { createAsyncThunk } from "@reduxjs/toolkit";
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