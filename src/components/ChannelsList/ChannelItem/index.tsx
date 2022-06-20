import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../../../types/models/user.types';
import { roundNumber } from '../../../utils/roundNumber';
import { AllRoutes } from '../../AppRoutes/AppRoutes';

interface IChannelItemProps {
    user: IUser
}

const ChannelItem: FC<IChannelItemProps> = ({ user }) => {

    return (
        <NavLink to={AllRoutes.channel + `/${user._id}/home`}>
            <div className='px-3 py-2 hover:bg-lightGray self-start flex flex-col items-center justify-center cursor-pointer flex-shrink-0'>
                <div className="flex-shrink-0 w-12 h-12 mb-2">
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-[50%]" />
                </div>
                <span className="font-semibold">{user.name}</span>
                <span className="text-myGray">{roundNumber(user.subscribersCount)} subscribers</span>
            </div>
        </NavLink>
    );
};

export default ChannelItem;