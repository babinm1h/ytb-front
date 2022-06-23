import React, { FC, PropsWithChildren } from 'react';
import { IUser } from '../../../types/models/user.types';
import Author from '../../Channel/Author';
import MainLayout from '../MainLayout';
import ChannelTabs from './ChannelTabs';

interface IChannelLayoutProps {
    user: IUser
}

const ChannelLayout: FC<PropsWithChildren<IChannelLayoutProps>> = ({ children, user }) => {
    return (
        <MainLayout>
            <div className="md:px-10 px-5">
                <Author user={user} />
                <ChannelTabs />
                {children}
            </div>
        </MainLayout>
    );
};

export default ChannelLayout;