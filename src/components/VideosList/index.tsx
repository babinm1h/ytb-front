import React, { FC } from 'react';
import { IVideo } from '../../types/models/video.types';
import VideoSkeleton from '../Loaders/VideoSkeleton';
import VideoCard from '../VideoCard';

interface IVideosListProps {
    videos: IVideo[]
    isLoading: boolean
}

const VideosList: FC<IVideosListProps> = ({ videos, isLoading }) => {
    return (
        <div className="h-full w-full">
            <ul className="grid xl:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 w-full">
                {isLoading
                    ? Array(16).fill(0).map((i, index) => <VideoSkeleton key={index} />)
                    : videos.map(v => <VideoCard key={v._id} video={v} />)
                }
            </ul>
        </div>
    );
};

export default VideosList;