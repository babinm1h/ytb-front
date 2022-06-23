import React, { FC, PropsWithChildren } from 'react';

interface IModalProps {
    title: string
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({ title, children }) => {
    return (
        <div className="bg-black bg-opacity-50 inset-0 fixed z-[5] w-full h-full items-center justify-center flex">
            <div className="rounded-lg bg-white w-full max-w-[350px] h-full max-h-[200px] p-5">
                <div className="flex flex-col h-full">
                    <h2 className='font-medium text-lg flex-grow'>{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;