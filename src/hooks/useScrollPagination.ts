import { useEffect, useState } from "react"
import { incrCurrentPage } from "../redux/slices/videos.slice"
import { fetchAllVideos } from "../redux/thunks/videos.thunks"
import { useAppDispatch } from "./useAppDispatch"


export const useScrollPagination = (videosLength: number, currentPage: number, totalCount: number) => {
    const [doRefetch, setDoRefetch] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (doRefetch) {
            dispatch(fetchAllVideos(currentPage))
                .then(() => dispatch(incrCurrentPage())).finally(() => setDoRefetch(false))
        }
    }, [doRefetch, dispatch])


    const handleScroll = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && videosLength + 1 < totalCount) {
            setDoRefetch(true)
        }
    }

    useEffect(() => {
        if (videosLength + 1 < totalCount) document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [totalCount, videosLength])
}