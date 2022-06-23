import React from 'react';
import { HomeIcon, CollectionVideos, SettingsIcon, UserIcon } from '../../../../assets/icons';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
    const { user } = useAppSelector(state => state.auth)

    return (
        <div className="fixed top-[56px] left-0 h-full z-[1] bg-white">
            <nav className="flex flex-col items-stretch">

                <SidebarLink to={AllRoutes.home}>
                    <HomeIcon className='w-7 h-7' />
                    Home
                </SidebarLink>

                <SidebarLink to={user ? AllRoutes.subscriptions : AllRoutes.login}>
                    <CollectionVideos className='w-7 h-7' />
                    Subscriptions
                </SidebarLink>

                <SidebarLink to={user ? AllRoutes.studio + '/content' : AllRoutes.login}>
                    <SettingsIcon className='w-7 h-7' />
                    Your Studio
                </SidebarLink>

                <SidebarLink to={user ? AllRoutes.studio + '/customisation' : AllRoutes.login}>
                    <UserIcon className='w-7 h-7' />
                    Edit Channel
                </SidebarLink>
            </nav>
        </div>
    );
};

export default Sidebar;