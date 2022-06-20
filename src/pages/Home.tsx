import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import MainLayout from '../components/layouts/MainLayout';
import VideosList from '../components/VideosList';
import { fetchAllVideos, fetchPopularUsers, fetchPopularVideos } from '../redux/thunks/videos.thunks';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import ChannelsList from '../components/ChannelsList';

const Home = () => {
    const dispatch = useAppDispatch()
    const { isLoading, videos, popularVideos, popularUsers } = useAppSelector(state => state.videos)

    useEffect(() => {
        dispatch(fetchAllVideos())
        dispatch(fetchPopularVideos())
        dispatch(fetchPopularUsers())
    }, [])

    return (
        <>
            <MainLayout>
                <section className="p-5 border-b border-gray-300">
                    <h2 className="sectionTitle">Popular Channels</h2>
                    {popularUsers.length > 0 && <ChannelsList users={popularUsers} />}
                </section>

                <section className="hidden sm:block p-5 border-b border-gray-300">
                    <h2 className="sectionTitle">Popular Videos</h2>
                    <Slider videos={popularVideos} />
                </section>

                <section className="p-5">
                    <h2 className="sectionTitle">Recommended</h2>
                    <VideosList videos={videos} isLoading={isLoading} />
                </section>

            </MainLayout>
        </>
    );
};

export default Home;