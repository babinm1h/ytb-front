import React, { FC, PropsWithChildren } from 'react';



const Popup: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='bg-white shadow-popup py-2 absolute top-10 right-0 rounded-md'>
            {children}
        </div>
    );
};

export default Popup;