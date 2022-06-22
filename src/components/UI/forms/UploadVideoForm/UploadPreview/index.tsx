import React, { ChangeEvent, FC } from 'react';
import { PlusImage } from '../../../../../assets/icons';

interface IUploadPreviewProps {
    handleImg: (e: ChangeEvent<HTMLInputElement>) => void
}

const UploadPreview: FC<IUploadPreviewProps> = ({ handleImg }) => {
    return (
        <>
            <div className="mb-2 font-medium mt-5">Thumbnail</div>
            <div className="border-b-[20px] border-transparent">
                <div className="border-dashed border-gray-300 border-2 inline-flex items-center justify-center">
                    <label htmlFor="preview" className="text-myGray flex gap-2 items-center cursor-pointer p-5">
                        <PlusImage className='w-6 h-6' />
                        <span className="">Add</span>
                        <input type="file" id="preview" accept="image/png, image/gif, image/jpeg" hidden
                            onChange={handleImg} />
                    </label>
                </div>
            </div>
        </>
    );
};

export default UploadPreview;