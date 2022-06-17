import React from 'react';
import { HomeIcon, VideosIcon, CollectionVideos } from '../../../assets/icons';

const Sidebar = () => {
    return (
        <div className="bg-white fixed top-[56px] left-0 h-full z-[2]">
            <ul className="flex flex-col items-center md:items-start">

                <li className="navItem">
                    <HomeIcon className='w-7 h-7' />
                    Home
                </li>

                <li className="navItem">
                    <CollectionVideos className='w-7 h-7' />
                    Subscribes
                </li>

                <li className="navItem">
                    <VideosIcon className='w-7 h-7' />
                    Your videos
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;