import React, { FC } from 'react';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import VideoSkeletonList from '../../../../Loaders/VideoSkeletonList';
import VideosList from '../../../../VideosList';



const ChannelVideos: FC = () => {
    const { videos, isVideosLoading } = useAppSelector(state => state.channelPage)


    return (
        <section className='py-10'>
            {videos.length > 0 ? < VideosList videos={videos} />
                : <h3 className='text-gray-500 text-xl text-center py-5'>
                    This channel doesn't have any content
                </h3>}
            {isVideosLoading && <VideoSkeletonList />}
        </section>
    );
};

export default ChannelVideos;