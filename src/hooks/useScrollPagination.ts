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

        return () => setDoRefetch(true)
    }, [doRefetch])


    const handleScroll = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 40 && videosLength + 1 < totalCount) {
            setDoRefetch(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [totalCount, videosLength])
}