import React, { FC } from 'react';
import { IVideo } from '../../types/models/video.types';
import VideoCard from '../VideoCard';

interface IVideosListProps {
    videos: IVideo[]
}

const VideosList: FC<IVideosListProps> = ({ videos }) => {
    return (
        <div className="h-full w-full">
            <ul className="grid xl:grid-cols-4 gap-5 px-5 md:grid-cols-3 sm:grid-cols-2 w-full">
                {videos.map(v => <VideoCard key={v._id} video={v} />)}
            </ul>
        </div>
    );
};

export default VideosList;