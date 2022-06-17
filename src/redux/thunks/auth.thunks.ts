import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../API/auth.service";
import { ILoginArgs, IRegisterArgs } from "../../types/args.types";
import { AuthActionTypes } from "../../types/slices/authSlice.types";



export const regisrate = createAsyncThunk(AuthActionTypes.register,
    async (payload: IRegisterArgs, thunk) => {
        try {
            const data = await AuthService.register(payload)
            return data
        } catch (err: any) {
            console.log(err.response?.data.message);
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const login = createAsyncThunk(AuthActionTypes.login,
    async (payload: ILoginArgs, thunk) => {
        try {
            const data = await AuthService.login(payload)
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const getAuth = createAsyncThunk(AuthActionTypes.getAuth,
    async (_, thunk) => {
        try {
            const data = await AuthService.getAuth()
            return data
        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })