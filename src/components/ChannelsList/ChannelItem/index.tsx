import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVER_URL } from '../../../API';
import { IUser } from '../../../types/models/user.types';
import { roundNumber } from '../../../utils/roundNumber';
import { AllRoutes } from '../../AppRoutes/AppRoutes';

interface IChannelItemProps {
    user: IUser
}

const ChannelItem: FC<IChannelItemProps> = ({ user }) => {

    return (
        <NavLink to={AllRoutes.channel + `/${user._id}/home`} className='channelItem'>
            <div className='flex flex-col items-center justify-center cursor-pointer flex-shrink-0'>
                <div className="flex-shrink-0 md:w-12 md:h-12 mb-2 w-8 h-8">
                    <img src={SERVER_URL + '/' + user.avatar} alt={user.name}
                        className="w-full h-full rounded-[50%] object-cover" />
                </div>
                <span className="hidden sm:inline-block font-semibold text-center sm:line-clamp-1">
                    {user.name}
                </span>
                <span className="hidden text-myGray text-[12px] sm:line-clamp-1 sm:inline-block text-center">
                    {roundNumber(user.subscribersCount)} subscribers
                </span>
            </div>
        </NavLink>
    );
};

export default ChannelItem;