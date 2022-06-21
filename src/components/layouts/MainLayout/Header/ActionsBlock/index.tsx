import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CircleUser, LogoutIcon, SettingsIcon, UserIcon, VideoPlus } from '../../../../../assets/icons';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { logout } from '../../../../../redux/slices/auth.slice';
import { removeTokenCookie } from '../../../../../utils/auth.helpers';
import { AllRoutes } from '../../../../AppRoutes/AppRoutes';
import Popup from '../../../../Popup';
import UploadModal from './UploadModal';


const ActionsBlock = () => {
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const nav = useNavigate()

    const onLoginClick = () => {
        nav(AllRoutes.login)
    }

    const { isVisible, onToggleVisible, ref } = useOutsideClick(false)

    const handleLogout = () => {
        dispatch(logout())
        removeTokenCookie()
        nav(AllRoutes.home)
    }


    return (
        <>
            {user
                ? <div className="flex gap-5 items-center">
                    <UploadModal />
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
                            <button className="popupLi w-full" onClick={handleLogout}>
                                <LogoutIcon className='w-6 h-6' />
                                Sign Out
                            </button>
                        </Popup>}
                    </div>
                </div>

                : <button className='text-primaryBlue flex items-center gap-2 font-medium uppercase border border-primaryBlue px-4 py-2 transition-colors active:bg-lightGray' onClick={onLoginClick}>
                    <CircleUser className='w-6 h-6' />
                    Login
                </button>}
        </>
    );
};

export default ActionsBlock;