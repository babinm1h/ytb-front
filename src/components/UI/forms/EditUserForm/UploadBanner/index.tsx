import React, { FC } from 'react';
import { IUser } from '../../../../../types/models/user.types';

interface IUploadBannerProps {
    user: IUser
    preview: string | null
    handleImg: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UploadBanner: FC<IUploadBannerProps> = ({ user, handleImg, preview }) => {
    return (
        <div className="">
            <span className="text-[16px] font-medium">Banner image</span>
            <p className="text-myGray text-[12px]">
                This image will appear across the top of your channel.
            </p>
            <div className="flex items-center gap-10 mt-5">
                <div className="sm:w-[200px] sm:h-[110px] w-[140px] h-[70px] shrink-0 bg-lightGray">
                    <img src={preview ? preview : user.banner ? user.banner : ""}
                        alt="banner"
                        className='w-full h-full' />
                </div>
                <label htmlFor="banner" className="subBtn text-white bg-primaryBlue cursor-pointer">
                    change
                    <input type="file" id="banner" accept="image/png, image/jpg, image/jpeg" hidden
                        onChange={handleImg} />
                </label>
            </div>
        </div>
    );
};

export default UploadBanner;