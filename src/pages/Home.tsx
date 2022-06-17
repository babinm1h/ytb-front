import React from 'react';
import MainLayout from '../components/MainLayout';
import VideoCard from '../components/VideoCard';

const Home = () => {
    return (
        <>
            <MainLayout>
                <div className="grid xl:grid-cols-4 gap-5 px-5 md:grid-cols-3 sm:grid-cols-2 w-full">

                    <VideoCard />
                    <VideoCard />
                    <VideoCard />

                </div>
            </MainLayout>
        </>
    );
};

export default Home;