import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../API/auth.service";
import { IUser } from "../../types/models/user.types";
import { IAuthState } from "../../types/slices/auth.slice.types";
import { getAuth, login, regisrate, toglgeSubscribeUser } from "../thunks/auth.thunks";


const initialState: IAuthState = {
    isInitializing: true,
    isProccessing: false,
    loginError: '',
    registerError: '',
    user: null,
    isSubscribing: false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [regisrate.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.isProccessing = false
            state.loginError = ''
            state.registerError = ''
            state.user = action.payload.user
        },
        [regisrate.pending.type]: (state, action) => {
            state.isProccessing = false
        },
        [regisrate.rejected.type]: (state, action: PayloadAction<string>) => {
            state.registerError = action.payload
            state.isProccessing = false
        },


        [login.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.isProccessing = false
            state.loginError = ''
            state.registerError = ''
            state.user = action.payload.user
        },
        [login.pending.type]: (state, action) => {
            state.isProccessing = true
        },
        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loginError = action.payload
            state.isProccessing = false
        },


        [getAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isInitializing = false
            state.user = action.payload
        },
        [getAuth.pending.type]: (state, action) => {
            state.isInitializing = true
        },
        [getAuth.rejected.type]: (state, action) => {
            state.isInitializing = false
        },


        [toglgeSubscribeUser.fulfilled.type]: (state, action: PayloadAction<string>) => {
            if (state.user) {
                if (state.user.subscriptions.includes(action.payload)) {
                    state.user.subscriptions = state.user.subscriptions.filter(id => id !== action.payload)
                } else {
                    state.user.subscriptions.push(action.payload)
                }
            }
            state.isSubscribing = false
        },
        [toglgeSubscribeUser.pending.type]: (state, action) => {
            state.isSubscribing = true
        },
        [toglgeSubscribeUser.rejected.type]: (state, action) => {
            state.isSubscribing = false
        },
    }
})


export default authSlice.reducer;
