import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideosService } from "../../API/videos.service";
import { VideosActionTypes } from "../../types/slices/video.slice.types";


export const fetchAllVideos = createAsyncThunk(VideosActionTypes.fetch_all,
    async (_, thunk) => {
        try {
            const data = await VideosService.fetchAll()
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const fetchPopularVideos = createAsyncThunk(VideosActionTypes.fetch_popular,
    async (_, thunk) => {
        try {
            const data = await VideosService.fetchPopularVideos()
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })