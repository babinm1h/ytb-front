import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import MainLayout from '../components/MainLayout';
import VideosList from '../components/VideosList';
import { fetchAllVideos, fetchPopularVideos } from '../redux/thunks/videos.thunks';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Home = () => {
    const dispatch = useAppDispatch()
    const { isLoading, videos, popularVideos } = useAppSelector(state => state.videos)

    useEffect(() => {
        dispatch(fetchAllVideos())
        dispatch(fetchPopularVideos())
    }, [])

    return (
        <>
            <MainLayout>
                <section className="hidden sm:block p-5">
                    <h2 className="sectionTitle">Popular videos</h2>
                    <Slider videos={popularVideos} />
                </section>

                <section className="">
                    <h2 className="sectionTitle">Recommended</h2>
                    <VideosList videos={videos} isLoading={isLoading} />
                </section>

            </MainLayout>
        </>
    );
};

export default Home;