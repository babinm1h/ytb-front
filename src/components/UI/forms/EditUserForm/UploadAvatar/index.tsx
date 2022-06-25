import React, { FC } from 'react';
import { IUser } from '../../../../../types/models/user.types';
import defUser from "../../../../../assets/defUser.png"

interface IUploadAvatarProps {
    user: IUser
    preview: string | null
    handleImg: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UploadAvatar: FC<IUploadAvatarProps> = ({ user, handleImg, preview }) => {
    return (
        <div className="">
            <span className="text-[16px] font-medium">Picture</span>
            <p className="text-myGray text-[12px]">
                Your profile picture will appear where your channel is presented on YouTube, such as next to your videos and comments
            </p>
            <div className="flex items-center gap-10 mt-5 flex-col xs:flex-row">
                <div className="sm:w-[200px] sm:h-[110px] w-[140px] h-[70px] shrink-0 flex items-center justify-center">
                    <img src={preview ? preview : user.avatar ?  user.avatar : defUser} alt="avatar"
                        className='w-20 h-20 rounded-[50%] object-cover' />
                </div>
                <label htmlFor="avatar" className="subBtn text-white bg-primaryBlue cursor-pointer">
                    change
                    <input type="file" id="avatar" accept="image/png, image/jpg, image/jpeg" hidden
                        onChange={handleImg} />
                </label>
            </div>
        </div>
    );
};

export default UploadAvatar;