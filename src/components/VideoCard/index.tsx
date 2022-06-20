import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../API';
import { IVideo } from '../../types/models/video.types';
import { roundNumber } from '../../utils/roundNumber';
import { getCreationTime } from '../../utils/time.helpers';
import { AllRoutes } from '../AppRoutes/AppRoutes';

interface IVideoCardProps {
    video: IVideo
}

const VideoCard: FC<IVideoCardProps> = ({ video }) => {

    const nav = useNavigate()

    const onVideoClick = () => {
        nav(AllRoutes.video + `/${video._id}`)
    }

    return (
        <div className="flex flex-col gap-3 overflow-hidden active:bg-lightGray px-1 cursor-pointer pt-1"
            onClick={onVideoClick}>
            <div className="w-full h-auto">
                <img src={SERVER_URL + "/" + video.preview} alt="preview" className="w-full h-full" />
            </div>

            <div className="flex gap-3 pb-4">
                <div className="w-10 h-10 border rounded-[50%] flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}>
                    <NavLink to={AllRoutes.channel + `/${video.user._id}/home`}>
                        <img src={video.user.avatar} alt="author"
                            className="rounded-[50%] w-full h-full object-cover" />
                    </NavLink>
                </div>
                <div className="">
                    <h4 className="line-clamp-2 truncate font-medium whitespace-normal">
                        {video.title}
                    </h4>
                    <div className="text-myGray text-[13px] mt-1 leading-6 flex flex-col">
                        <span className="">{video.user.name}</span>
                        <div className="flex items-center gap-2">
                            <span className="">{roundNumber(video.views)} views,</span>
                            <span className="">{getCreationTime(video.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;