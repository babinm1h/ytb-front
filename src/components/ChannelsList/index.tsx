import React, { FC } from 'react';
import { IUser } from '../../types/models/user.types';
import UserSkeleton from '../Loaders/UserSkeleton';
import ChannelItem from './ChannelItem';

interface IChannelListProps {
    users: IUser[]
    isLoading: boolean
}

const ChannelsList: FC<IChannelListProps> = ({ users, isLoading }) => {
    return (
        <div className="w-full flex flex-nowrap items-start overflow-x-scroll myScroll">
            {isLoading
                ? Array(6).fill(0).map((i, index) => <UserSkeleton key={index} />)
                : users.map(u => <ChannelItem key={u._id} user={u} />)}
        </div>
    );
};

export default ChannelsList;