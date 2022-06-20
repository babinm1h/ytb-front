import React, { FC, PropsWithChildren } from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

interface ICustomLinkProps {
    to: string,
}

const CustomLink: FC<PropsWithChildren<ICustomLinkProps>> = ({ to, children }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={match ? `channelTab before:bg-myGray` : "channelTab"} to={to}>
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;