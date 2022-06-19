import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import CommentsForm from '../components/UI/forms/CommentsForm';
import VideoInfo from '../components/VideoPage/VideoInfo';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchSingleVideo } from '../redux/thunks/videoPage.thunks';



const VideoPage = () => {
    const { id } = useParams() as { id: string }
    const dispatch = useAppDispatch()
    const { video, isVideoLoading } = useAppSelector(state => state.videoPage)
    const { user } = useAppSelector(state => state.auth)

    useEffect(() => {
        dispatch(fetchSingleVideo(id))
    }, [])

    if (!video && isVideoLoading) {
        return <div>load</div>
    }

    return (
        <MainLayout>
            <div className="p-5">
                <div className="w-full h-[500px] border border-gray-400">player</div>

                <VideoInfo authUser={user} video={video!} />
                <div className="py-5">
                    <span className="text-[16px]">277 Comments</span>
                    {user && <CommentsForm user={user} />}
                </div>
            </div>
        </MainLayout>
    );
};

export default VideoPage;