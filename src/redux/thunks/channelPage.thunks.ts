import { createAsyncThunk } from "@reduxjs/toolkit"
import { UsersService } from "../../API/users.service"
import { VideosService } from "../../API/videos.service"
import { ChannelPageActionTypes } from "../../types/slices/channelPage.slice.types"


export const fetchProfile = createAsyncThunk(ChannelPageActionTypes.fetch_profile,
    async (userId: string, thunk) => {
        try {
            const data = await UsersService.fetchProfile(userId)
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const fetchChannelPopularVideos = createAsyncThunk(ChannelPageActionTypes.fetch_popular,
    async (userId: string, thunk) => {
        try {
            const data = await VideosService.fetchChannelPopularVideos(userId)
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })