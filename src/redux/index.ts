import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/auth.slice"


const rootReducer = combineReducers({
    auth: authSlice
})


export const store = configureStore({
    reducer: rootReducer
})



export type RootState = ReturnType<typeof rootReducer>