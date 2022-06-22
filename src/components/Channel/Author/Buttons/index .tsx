import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { IUser } from '../../../../types/models/user.types';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';

interface IChannelButtonsProps {
    authUser: IUser | null
    userId: string
    onToggleSubscribe: () => void
    isSubscribed: boolean | null
}

const ChannelButtons: FC<IChannelButtonsProps> = ({ authUser, userId, onToggleSubscribe, isSubscribed }) => {
    const { isSubscribing } = useAppSelector(state => state.auth)

    return (
        <>
            {authUser && authUser._id === userId
                ? <div className='flex items-center gap-5'>
                    <NavLink to={AllRoutes.studio + "/customisation"} className="subBtn bg-primaryBlue text-white">
                        customise channel
                    </NavLink>
                    <NavLink to={AllRoutes.studio + "/content"} className="subBtn bg-primaryBlue text-white">
                        manage videos
                    </NavLink>
                </div>
                : isSubscribed
                    ? <button className="subBtn bg-lightGray text-gray-500" onClick={onToggleSubscribe}
                        disabled={isSubscribing}>
                        subscribed
                    </button>
                    : <button className="subBtn bg-red-500 text-white" onClick={onToggleSubscribe}
                        disabled={isSubscribing}>
                        subscribe
                    </button>}
        </>
    );
};

export default ChannelButtons;