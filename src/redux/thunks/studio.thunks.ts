import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideosService } from "../../API/videos.service";
import { StudioActionTypes } from "../../types/slices/studio.slice";


export const fetchStudioVideos = createAsyncThunk(StudioActionTypes.fetch_videos,
    async (_, thunk) => {
        try {
            const data = await VideosService.fetchStudioVideos()
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const fetchChoosenVideo = createAsyncThunk(StudioActionTypes.fetch_choosen_video,
    async (videoId: string, thunk) => {
        try {
            const data = await VideosService.fetchChoosenVideo(videoId)
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const updateVideo = createAsyncThunk(StudioActionTypes.update_video,
    async (payload: { videoId: string, formData: FormData }, thunk) => {
        try {
            const data = await VideosService.updateVideo(payload.videoId, payload.formData)
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })



export const deleteVideo = createAsyncThunk(StudioActionTypes.delete_video,
    async (videoId: string, thunk) => {
        try {
            const data = await VideosService.delete(videoId)
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })