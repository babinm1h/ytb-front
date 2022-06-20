import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, VideosIcon, CollectionVideos } from '../../../../assets/icons';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';

const Sidebar = () => {
    return (
        <div className="bg-white fixed top-[56px] left-0 h-full z-[2]">
            <nav className="flex flex-col items-center md:items-start">

                <NavLink to={AllRoutes.home} className="navItem">
                    <HomeIcon className='w-7 h-7' />
                    Home
                </NavLink>

                <NavLink to={AllRoutes.home} className="navItem">
                    <CollectionVideos className='w-7 h-7' />
                    Subscribes
                </NavLink>

                <NavLink to={AllRoutes.home} className="navItem">
                    <VideosIcon className='w-7 h-7' />
                    Your videos
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;