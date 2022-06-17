import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '../../../assets/icons';
import logo from '../../../assets/logo.svg'
import { AllRoutes } from '../../AppRoutes/AppRoutes';
import ActionsBlock from './ActionsBlock';
import SearchBlock from './SearchBlock';


const Header = () => {

    return (
        <header className="w-full bg-white fixed top-0 right-0 left-0 px-5 py-2 border-b border-gray-300 z-[2]" >
            <div className="flex items-center">
                <div className="flex items-center">
                    <MenuIcon className='w-6 h-6 md:hidden' />
                    <NavLink to={AllRoutes.home}>
                        <img src={logo} alt="logo" className="w-36 h-[40px]" />
                    </NavLink>
                </div>

                <SearchBlock />

                <ActionsBlock />
            </div>
        </header>
    );
};

export default Header;  