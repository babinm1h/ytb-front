import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUser, VideoPlus } from '../../../../assets/icons';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { AllRoutes } from '../../../AppRoutes/AppRoutes';

const ActionsBlock = () => {
    const { user } = useAppSelector(state => state.auth)
    const nav = useNavigate()

    const handleNav = () => {
        nav(AllRoutes.login)
    }

    return (
        <>
            {user
                ? <div className="flex gap-5 items-center">
                    <button className="border border-transparent active:border-gray-200 w-10 h-10 rounded-[50%] active:bg-gray-200 p-1 flex items-center justify-center transition-all">
                        <VideoPlus className='w-10 h-10' />
                    </button>
                    <div className="w-10 h-10 flex-shrink-0">
                        <img src={user.avatar} alt={user.name}
                            className="rounded-[50%] object-cover w-full h-full" />
                    </div>
                </div>
                : <button className='text-primaryBlue flex items-center gap-2 font-medium uppercase border border-primaryBlue px-4 py-2 transition-colors active:bg-lightGray' onClick={handleNav}>
                    <CircleUser className='w-6 h-6' />
                    Login
                </button>}
        </>
    );
};

export default ActionsBlock;