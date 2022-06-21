import React, { FC } from 'react';
import { IUser } from '../../../../../types/models/user.types';
import { getCreationDate } from '../../../../../utils/time.helpers';

interface IChannelAboutProps {
    owner: IUser
}

const ChannelAbout: FC<IChannelAboutProps> = ({ owner }) => {
    return (
        <section className="py-10 flex gap-10 flex-col md:flex-row">
            <div className="flex-[2]">
                <div className="border-b border-gray-300">
                    <span className="text-[16px]">Description</span>
                    <p className="py-5">{owner.description}</p>
                </div>

                <div className="border-b border-gray-300 py-5">
                    <span className="text-[16px]">Details</span>
                    <div className="flex items-center gap-5 mt-2">
                        <span className="text-myGray">For business enquiries:</span>
                        <a href={`mailto:${owner.email}`} className='text-primaryBlue underline'>
                            {owner.email}
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex-[1] flex flex-col">
                <span className="text-[16px] border-b border-gray-300 pb-3">Stats</span>
                <p className="border-b border-gray-300 py-3">Joined {getCreationDate(owner.createdAt)}</p>
                <p className="border-b border-gray-300 py-3">{owner.totalViews} views</p>
            </div>
        </section>
    );
};

export default ChannelAbout;