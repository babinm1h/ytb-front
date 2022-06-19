import { createAsyncThunk } from "@reduxjs/toolkit";
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