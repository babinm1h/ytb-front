import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { EyeIcon, PenIcon, TrashIcon } from '../../../../assets/icons';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useModal } from '../../../../hooks/useModal';
import { deleteVideo } from '../../../../redux/thunks/studio.thunks';
import { IVideo } from '../../../../types/models/video.types';
import { getCreationDate } from '../../../../utils/time.helpers';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';
import Modal from '../../../Modal';

interface IStudioVideoProps {
    video: IVideo
}

const StudioVideo: FC<IStudioVideoProps> = ({ video }) => {
    const dispatch = useAppDispatch()
    const { isOpen, onClose, onOpen } = useModal()

    const handleDelete = () => {
        dispatch(deleteVideo(video._id))
        onClose()
    }

    return (
        <>
            <li className="border-t border-gray-300 px-5 py-3 md:flex items-center gap-5 block">

                <div className="flex items-center gap-4 max-w-[350px] w-full min-w-[120px]">
                    <div className="w-[120px] h-[68px] flex-shrink-0">
                        <NavLink to={AllRoutes.studio + `/${video._id}`} >
                            <img className="w-full h-full" alt="preview" src={video.preview} />
                        </NavLink>
                    </div>
                    <div className="">
                        <p className="line-clamp-1 leading-7 font-medium">{video.title}</p>
                        <p className="line-clamp-2 text-myGray leading-5">{video.description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 videoStat mt-2 md:mt-0">
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

                <div className="videoStat hidden lg:block">
                    {getCreationDate(video.createdAt)}
                </div>

                <div className="line-clamp-1 videoStat mt-2 md:mt-0">
                    {video.views} <span className="md:hidden">views</span>
                </div>

                <div className="videoStat hidden lg:block">{video.likesCount} likes</div>

                <div className="flex items-center gap-3 mt-2 md:mt-0">
                    <NavLink to={AllRoutes.studio + `/${video._id}`} >
                        <PenIcon className='w-5 h-5 text-myGray' />
                    </NavLink>
                    <button onClick={onOpen}>
                        <TrashIcon className='actionIcon text-myGray' />
                    </button>
                </div>
            </li>
            {isOpen && <Modal title="Delete video?">
                <div className="flex gap-5 justify-end">
                    <button className="subBtn text-white bg-red-500" onClick={handleDelete}>
                        Delete
                    </button>
                    <button className="subBtn text-white bg-primaryBlue" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </Modal>}
        </>
    );
};

export default StudioVideo;

