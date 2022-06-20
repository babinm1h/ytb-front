import React, { FC } from 'react';
import { IUser } from '../../types/models/user.types';
import ChannelItem from './ChannelItem';

interface IChannelListProps {
    users: IUser[]
}

const ChannelsList: FC<IChannelListProps> = ({ users }) => {
    return (
        <div className="w-full flex flex-nowrap items-start">
            {users.map(u => <ChannelItem key={u._id} user={u} />)}
        </div>
    );
};

export default ChannelsList;