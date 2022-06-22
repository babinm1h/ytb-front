import React, { useEffect } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import VideosList from '../components/VideosList';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchSubscribedVideos } from '../redux/thunks/subscriptions.thunks';

const Subscriptions = () => {
    const dispatch = useAppDispatch()
    const { videosPending, videos } = useAppSelector(state => state.subscriptions)

    useEffect(() => {
        dispatch(fetchSubscribedVideos())
    }, [])

    return (
        <MainLayout>
            <div className="p-5">
                <h1 className="sectionTitle">Your subscriptions</h1>
                <VideosList videos={videos} isLoading={videosPending} />
            </div>
        </MainLayout>
    );
};

export default Subscriptions;