import React, { FC } from 'react';
import { IUser } from '../../../../types/models/user.types';

interface IChannelButtonsProps {
    authUser: IUser | null
    userId: string
}

const ChannelButtons: FC<IChannelButtonsProps> = ({ authUser, userId }) => {

    const isSubscribed = authUser && authUser.subscriptions.includes(userId)

    return (
        <>
            {authUser && authUser._id === userId
                ? <div className='flex items-center gap-5'>
                    <button className="subBtn bg-primaryBlue text-white">
                        customise channel
                    </button>
                    <button className="subBtn bg-primaryBlue text-white">
                        manage videos
                    </button>
                </div>
                : isSubscribed
                    ? <button className="subBtn bg-gray-900 text-gray-500">
                        subscribed
                    </button>
                    : <button className="subBtn bg-red-500 text-white">
                        subscribe
                    </button>}
        </>
    );
};

export default ChannelButtons;