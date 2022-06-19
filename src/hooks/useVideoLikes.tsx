import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { AllRoutes } from "../components/AppRoutes/AppRoutes"
import { likeVideo, dislikeVideo } from "../redux/thunks/videoPage.thunks"
import { IVideo } from "../types/models/video.types"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"

export const useVideoLikes = (video: IVideo) => {
    const { user: authUser } = useAppSelector(state => state.auth)
    const nav = useNavigate()
    const dispatch = useAppDispatch()

    const [isLiked, setIsLiked] = useState(authUser ? video.likes.includes(authUser._id) : false)
    const [isDisliked, setIsDisliked] = useState(authUser ? video.dislikes.includes(authUser._id) : false)

    const handleLike = () => {
        if (!authUser) nav(AllRoutes.login);
        if (isLiked) {
            setIsLiked(false)
        } else if (isDisliked) {
            setIsDisliked(false)
            setIsLiked(true)
        } else {
            setIsLiked(true)
        }
        dispatch(likeVideo(video._id))
    }

    const handleDislike = () => {
        if (!authUser) nav(AllRoutes.login);
        if (isLiked) {
            setIsLiked(false)
            setIsDisliked(true)
        } else if (isDisliked) {
            setIsDisliked(false)
        } else {
            setIsDisliked(true)
        }
        dispatch(dislikeVideo(video._id))
    }

    useEffect(() => {
        if (!authUser) {
            setIsDisliked(false)
            setIsLiked(false)
        }
    }, [authUser])



    return { authUser, isLiked, isDisliked, handleDislike, handleLike }
}

