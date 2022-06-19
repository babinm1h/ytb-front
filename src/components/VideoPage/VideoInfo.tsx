import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LikeIcon, DislikeIcon, FillLikeIcon, FillDislikeIcon } from '../../assets/icons';
import { IUser } from '../../types/models/user.types';
import { IVideo } from '../../types/models/video.types';
import { roundNumber } from '../../utils/roundNumber';
import { getCreationDate } from '../../utils/time.helpers';
import { AllRoutes } from '../AppRoutes/AppRoutes';

interface IVideoInfoProps {
    authUser: IUser | null
    video: IVideo
}

const VideoInfo: FC<IVideoInfoProps> = ({ video, authUser }) => {
    const nav = useNavigate()
    const [isLiked, setIsLiked] = useState(authUser?.likes.includes(video._id) || false)
    const [isDisliked, setIsDisliked] = useState(authUser?.dislikes.includes(video._id) || false)

    const handleLike = () => {
        if (!authUser) nav(AllRoutes.login);
        if (isLiked) {
            setIsLiked(false)
        } else if (isDisliked) {
            setIsDisliked(false)
            setIsLiked(true)
        } else {
            setIsLiked(true)
        }
    }

    const handleDislike = () => {
        if (!authUser) nav(AllRoutes.login);
        if (isLiked) {
            setIsLiked(false)
            setIsDisliked(true)
        } else if (isDisliked) {
            setIsDisliked(false)
        } else {
            setIsDisliked(true)
        }
    }

    useEffect(() => {
        if (!authUser) {
            setIsDisliked(false)
            setIsLiked(false)
        }
    }, [authUser])

    return (
        <>
            <div className="py-5 border-b border-gray-300">
                <h1 className="text-xl">{video?.title}</h1>
                <div className="flex items-center justify-between">
                    <div className="text-myGray flex items-center gap-2 mt-2">
                        <span>{roundNumber(video?.views || 0)} views,</span>
                        <span>{getCreationDate(video.createdAt || '')}</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1" onClick={handleLike}>
                            {isLiked
                                ? <FillLikeIcon className='actionIcon' /> : <LikeIcon className='actionIcon' />}
                            <span className="uppercase font-medium mt-1">
                                {roundNumber(video?.likesCount)}
                            </span>
                        </button>
                        <button className="flex items-center gap-1" onClick={handleDislike}>
                            {isDisliked
                                ? <FillDislikeIcon className='actionIcon' />
                                : <DislikeIcon className='actionIcon' />}
                            <span className="uppercase font-medium">dislike</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-5 border-b border-gray-300">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-12 h-12">
                            <img src={video?.user.avatar} alt="author" className="w-full h-full rounded-[50%]" />
                        </div>
                        <div className="">
                            <span className="font-medium">{video?.user.name}</span>
                            <span className="text-myGray flex items-center">
                                {roundNumber(video?.user.subscribersCount || 0)} subscribers
                            </span>
                        </div>
                    </div>
                    <button className="subBtn text-white bg-red-500">
                        subscribe
                    </button>
                </div>
                <p className="mt-4">{video?.description}</p>
            </div>
        </>
    );
};

export default VideoInfo;