import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CircleUser, LogoutIcon, SettingsIcon, UserIcon, VideoPlus } from '../../../../../assets/icons';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { AllRoutes } from '../../../../AppRoutes/AppRoutes';
import Popup from '../../../../Popup';

const ActionsBlock = () => {
    const { user } = useAppSelector(state => state.auth)
    const nav = useNavigate()

    const handleNav = () => {
        nav(AllRoutes.login)
    }

    const { isVisible, onToggleVisible, ref } = useOutsideClick(false)

    return (
        <>
            {user
                ? <div className="flex gap-5 items-center">
                    <button className="border border-transparent active:border-gray-200 w-10 h-10 rounded-[50%] active:bg-lightGray p-1 flex items-center justify-center transition-all">
                        <VideoPlus className='w-10 h-10' />
                    </button>
                    <div className="w-10 h-10 flex-shrink-0 relative" ref={ref}>
                        <img src={user.avatar} alt={user.name} onClick={onToggleVisible}
                            className="rounded-[50%] object-cover w-full h-full cursor-pointer" />
                        {isVisible && <Popup>
                            <NavLink to={AllRoutes.channel + `/${user._id}/home`} className="popupLi">
                                <UserIcon className='w-6 h-6' />
                                Your Channel
                            </NavLink>
                            <NavLink to={AllRoutes.channel + `/${user._id}/home`} className="popupLi">
                                <SettingsIcon className='w-6 h-6' />
                                YouTube Studio
                            </NavLink>
                            <button className="popupLi w-full">
                                <LogoutIcon className='w-6 h-6' />
                                Sign Out
                            </button>
                        </Popup>}
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