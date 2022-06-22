import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, CollectionVideos, SettingsIcon, UserIcon } from '../../../../assets/icons';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';

const Sidebar = () => {
    return (
        <div className="fixed top-[56px] left-0 h-full z-[1] bg-white">
            <nav className="flex flex-col items-center md:items-start">

                <NavLink to={AllRoutes.home} className="navItem">
                    <HomeIcon className='w-7 h-7' />
                    Home
                </NavLink>

                <NavLink to={AllRoutes.subscriptions} className="navItem">
                    <CollectionVideos className='w-7 h-7' />
                    Subscriptions
                </NavLink>

                <NavLink to={AllRoutes.studio + '/content'} className="navItem">
                    <SettingsIcon className='w-7 h-7' />
                    Your Studio
                </NavLink>

                <NavLink to={AllRoutes.studio + '/channel'} className="navItem">
                    <UserIcon className='w-7 h-7' />
                    Edit Channel
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;