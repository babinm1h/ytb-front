import React from 'react';
import VideoSkeleton from './VideoSkeleton';

const VideoSkeletonList = () => {
    return (
        <ul className="grid xl:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 w-full">
            {Array(16).fill(0).map((i, index) => <VideoSkeleton key={index} />)}
        </ul>
    )

};

export default VideoSkeletonList;