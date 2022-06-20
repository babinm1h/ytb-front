import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "../../API/users.service";
import { VideosService } from "../../API/videos.service";
import { VideosActionTypes } from "../../types/slices/videos.slice.types";


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


export const fetchPopularUsers = createAsyncThunk(VideosActionTypes.fetch_popular_users,
    async (_, thunk) => {
        try {
            const data = await UsersService.fetchPopular()
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const searchVideos = createAsyncThunk(VideosActionTypes.search_videos,
    async (searchTerm: string, thunk) => {
        try {
            const data = await VideosService.search(searchTerm)
            return data
        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })