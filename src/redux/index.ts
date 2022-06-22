import { AnyAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit"
import authSlice from "./slices/auth.slice"
import channelPageSlice from "./slices/channelPage.slice"
import studioSlice from "./slices/studio.slice"
import subscriptionsSlice from "./slices/subscriptions.slice"
import videoPageSlice from "./slices/videoPage.slice"
import videosSlice from "./slices/videos.slice"


const rootReducer = combineReducers({
    auth: authSlice,
    channelPage: channelPageSlice,
    videos: videosSlice,
    videoPage: videoPageSlice,
    subscriptions: subscriptionsSlice,
    studio: studioSlice
})


export const store = configureStore({
    reducer: rootReducer
})



export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;