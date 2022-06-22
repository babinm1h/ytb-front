import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export enum StudioPaths {
    content = 'content',
    customisation = 'customisation'
}

const Studio = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        if (!pathname) return;
        const path = pathname.split('/').pop()
        

    }, [pathname])

    return (
        <div>

        </div>
    );
};

export default Studio;