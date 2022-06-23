import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVER_URL } from '../../../../../../API';
import { IVideo } from '../../../../../../types/models/video.types';
import { roundNumber } from '../../../../../../utils/roundNumber';
import { getCreationTime } from '../../../../../../utils/time.helpers';
import { AllRoutes } from '../../../../../AppRoutes/AppRoutes';

interface ISearchedVideoProps {
    video: IVideo
}

const SearchedVideo: FC<ISearchedVideoProps> = ({ video }) => {
    return (
        <NavLink to={AllRoutes.video + `/${video._id}`} className="hover:bg-lightGray p-4 transition-colors">
            <div className="flex gap-5">
                <div className="w-[70px] h-[50px] md:w-[100px] md:h-auto flex-shrink-0 flex-grow-0">
                    <img src={SERVER_URL + '/' + video.preview} alt="preview" className="w-full h-full" />
                </div>
                <div className="text-[12px]">
                    <p className="font-semibold mb-1 line-clamp-1">{video.title}</p>
                    <span className="text-myGray">{roundNumber(video.views)} views, </span>
                    <span className="text-myGray hidden sm:inline-block">
                        {getCreationTime(video.createdAt)}
                    </span>
                    <div className="text-myGray">{video.user.name}</div>
                </div>
            </div>
        </NavLink>
    );
};

export default SearchedVideo;