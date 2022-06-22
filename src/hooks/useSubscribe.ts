import { useState } from "react"
import { toglgeSubscribeUser } from "../redux/thunks/auth.thunks"
import { IUser } from "../types/models/user.types"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"


export const useSubscribe = (user: IUser) => {
    const dispatch = useAppDispatch()
    const { user: authUser } = useAppSelector(state => state.auth)
    const [subsCount, setSubsCount] = useState<number>(user.subscribersCount)

    const isSubscribed = authUser && authUser.subscriptions.includes(user._id)


    const onToggleSubscribe = () => {
        if (!authUser) return;
        if (isSubscribed) {
            setSubsCount(prev => prev - 1)
        } else {
            setSubsCount(prev => prev + 1)
        }
        dispatch(toglgeSubscribeUser(user._id))
    }

    return { onToggleSubscribe, subsCount, authUser, isSubscribed }
}