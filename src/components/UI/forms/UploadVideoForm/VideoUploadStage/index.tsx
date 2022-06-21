import React, { ChangeEvent, FC, useRef } from 'react';
import { CloseIcon, UploadIcon } from '../../../../../assets/icons';

interface IVideoUploadStageProps {
    handleVideo: (e: ChangeEvent<HTMLInputElement>) => void
    onClose: () => void
}

const VideoUploadStage: FC<IVideoUploadStageProps> = ({ handleVideo, onClose }) => {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <div className="flex flex-col h-full">
            <div className="border-b border-gray-300 p-5 flex items-center">
                <span className='sectionTitle m-0 flex-grow'>Upload video</span>
                <button onClick={onClose} className='actionIcon'>
                    <CloseIcon className='w-6 h-6 text-myGray' />
                </button>
            </div>
            <div className="flex items-center justify-center flex-grow flex-col">
                <UploadIcon className='w-20 h-20 text-myGray' onClick={() => ref.current?.click()} />
                <label htmlFor='video'
                    className="subBtn text-white bg-primaryBlue mt-5 cursor-pointer">
                    Select File
                    <input type="file" id="video" hidden onChange={handleVideo} ref={ref} accept="video/mp4" />
                </label>
            </div>
        </div>
    );
};

export default VideoUploadStage;