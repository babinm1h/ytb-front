import React, { FC, PropsWithChildren } from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';
import cn from "classnames"

interface ISidebarLinkProps {
    to: string,
}

const SidebarLink: FC<PropsWithChildren<ISidebarLinkProps>> = ({ to, children }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={cn('navItem', {
                "font-semibold bg-lightGray": match,
            })} to={to}>
                {children}
            </Link>
        </div>
    );
};

export default SidebarLink;