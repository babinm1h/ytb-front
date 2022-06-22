import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVER_URL } from '../../../../API';
import { EyeIcon, PenIcon } from '../../../../assets/icons';
import { IVideo } from '../../../../types/models/video.types';
import { getCreationDate } from '../../../../utils/time.helpers';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';

interface IStudioVideoProps {
    video: IVideo
}

const StudioVideo: FC<IStudioVideoProps> = ({ video }) => {
    return (
        <li className="border-t border-gray-300 px-5 py-3">
            <NavLink to={AllRoutes.studio + `/${video._id}`} className='flex items-center gap-5'>
                <div className="flex items-center gap-4 max-w-[400px]">
                    <div className="w-[120px] h-[68px] flex-shrink-0">
                        <img className="w-full h-full" alt="preview" src={SERVER_URL + "/" + video.preview} />
                    </div>
                    <div className="">
                        <p className="line-clamp-1 leading-7 font-medium">{video.title}</p>
                        <p className="line-clamp-2 text-myGray leading-5">{video.description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 videoStat">
                    {video.isPublic
                        ? <>
                            <EyeIcon className='text-green-600 w-5 h-5' />
                            <span className="">Public</span>
                        </>
                        : <>
                            <EyeIcon className='text-red-600 w-5 h-5' />
                            <span className="">Private</span>
                        </>}
                </div>

                <div className="videoStat">
                    {getCreationDate(video.createdAt)}
                </div>

                <div className="line-clamp-1 videoStat">
                    {video.views}
                </div>

                <div className="videoStat">{video.likesCount} likes</div>

                <PenIcon className='w-5 h-5 text-myGray' />
            </NavLink>
        </li>
    );
};

export default StudioVideo;