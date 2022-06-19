import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../../API';
import { IVideo } from '../../../types/models/video.types';
import { roundNumber } from '../../../utils/roundNumber';
import { getCreationTime } from '../../../utils/time.helpers';
import { AllRoutes } from '../../AppRoutes/AppRoutes';

interface IChannelVideoCardProps {
    video: IVideo
}

const ChannelVideoCard: FC<IChannelVideoCardProps> = ({ video }) => {
    const nav = useNavigate()

    const onVideoClick = () => {
        nav(AllRoutes.video + `/${video._id}`)
    }

    return (
        <div className="flex flex-col gap-3 overflow-hidden active:bg-lightGray px-1 cursor-pointer pt-1"
            onClick={onVideoClick}>
            <img src={SERVER_URL + "/" + video.preview} alt="preview" className="w-full h-full" />

            <div className="">
                <div className="">
                    <h4 className="line-clamp-2 truncate font-medium whitespace-normal">
                        {video.title}
                    </h4>
                    <div className="text-myGray text-[13px] mt-2 leading-6 flex items-center gap-2">
                        <span className="">{roundNumber(video.views)} views,</span>
                        <span className="">{getCreationTime(video.createdAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChannelVideoCard;