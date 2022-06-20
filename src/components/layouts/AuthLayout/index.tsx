import React, { FC, PropsWithChildren } from 'react';
import logo from "../../../assets/logo.svg"

interface IAuthLayoutProps {
    title: string
}

const AuthLayout: FC<PropsWithChildren<IAuthLayoutProps>> = ({ title, children }) => {
    return (
        <div className="w-full h-full bg-[#fafafa] flex items-center justify-center flex-grow">
            <div className="border-gray-300 border rounded-lg max-w-[450px] w-full px-5 py-10">
                <div className="flex flex-col items-center gap-3">
                    <img src={logo} alt="logo" className="w-32 h-10" />
                    <h1 className="font-medium text-xl">{title}</h1>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;