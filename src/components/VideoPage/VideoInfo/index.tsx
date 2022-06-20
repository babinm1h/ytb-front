import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { LikeIcon, DislikeIcon, FillLikeIcon, FillDislikeIcon } from '../../../assets/icons';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useSubscribe } from '../../../hooks/useSubscribe';
import { useVideoLikes } from '../../../hooks/useVideoLikes'
import { IVideo } from '../../../types/models/video.types';
import { roundNumber } from '../../../utils/roundNumber';
import { getCreationDate } from '../../../utils/time.helpers';
import { AllRoutes } from '../../AppRoutes/AppRoutes';

interface IVideoInfoProps {
    video: IVideo
}

const VideoInfo: FC<IVideoInfoProps> = ({ video }) => {
    const { isProcessing } = useAppSelector(state => state.videoPage)
    const { handleDislike, handleLike, isDisliked, isLiked, authUser } = useVideoLikes(video)

    const { onToggleSubscribe, subsCount, isSubscribed } = useSubscribe(video.user)



    return (
        <>
            <div className="py-5 border-b border-gray-300">
                <h1 className="text-xl">{video?.title}</h1>
                <div className="flex items-center justify-between">
                    <div className="text-myGray flex items-center gap-2 mt-2">
                        <span>{roundNumber(video?.views || 0)} views,</span>
                        <span>{getCreationDate(video.createdAt || '')}</span>
                    </div>
                    {authUser && video.user._id === authUser._id
                        ? <button className='subBtn text-white bg-primaryBlue'>
                            edit video
                        </button>
                        : <div className="flex items-center gap-5">
                            <button className="flex items-center" onClick={handleLike} disabled={isProcessing}>
                                {isLiked
                                    ? <FillLikeIcon className='actionIcon' />
                                    : <LikeIcon className='actionIcon' />}
                                <span className="uppercase font-medium mt-1">
                                    {roundNumber(video?.likesCount)}
                                </span>
                            </button>
                            <button className="flex items-center" onClick={handleDislike} disabled={isProcessing}>
                                {isDisliked
                                    ? <FillDislikeIcon className='actionIcon' />
                                    : <DislikeIcon className='actionIcon' />}
                                <span className="uppercase font-medium">dislike</span>
                            </button>
                        </div>}
                </div>
            </div>

            <div className="py-5 border-b border-gray-300">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <NavLink to={AllRoutes.channel + `/${video.user._id}/home`}
                            className="flex-shrink-0 w-12 h-12">
                            <img src={video?.user.avatar} alt="author" className="w-full h-full rounded-[50%]" />
                        </NavLink>
                        <div className="">
                            <NavLink to={AllRoutes.channel + `/${video.user._id}/home`} className="font-medium">
                                {video?.user.name}
                            </NavLink>
                            <span className="text-myGray flex items-center">
                                {roundNumber(subsCount)} subscribers
                            </span>
                        </div>
                    </div>
                    {isSubscribed
                        ? <button className="subBtn text-gray-500 bg-lightGray" onClick={onToggleSubscribe}>
                            subscribed
                        </button>
                        : <button className="subBtn text-white bg-red-500" onClick={onToggleSubscribe}>
                            subscribe
                        </button>}
                </div>
                <p className="mt-5">{video?.description}</p>
            </div>
        </>
    );
};

export default VideoInfo;