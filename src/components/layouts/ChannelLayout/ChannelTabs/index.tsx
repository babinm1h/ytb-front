import React from 'react';
import { useParams } from 'react-router-dom';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';
import CustomLink from './CustomLink';



const ChannelTabs = () => {
    const { id } = useParams() as { id: string }


    return (
        <ul className="flex items-center mt-5">
            <li className="">
                <CustomLink to={AllRoutes.channel + `/${id}/home`}>
                    home
                </CustomLink>
            </li>
            <li className="">
                <CustomLink to={AllRoutes.channel + `/${id}/videos`}>
                    videos
                </CustomLink>
            </li>
            <li className="">
                <CustomLink to={AllRoutes.channel + `/${id}/about`}>
                    about
                </CustomLink>
            </li>
        </ul>
    );
};

export default ChannelTabs;