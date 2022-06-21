import React, { FC, PropsWithChildren } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface IMainLayoutProps { }


const MainLayout: FC<PropsWithChildren<IMainLayoutProps>> = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <main className="w-full h-full lg:pl-sidebar pt-header pl-sidebar-sm sm:pl-sidebar-md flex-grow">
                {children}
            </main>
        </>
    );
};

export default MainLayout;