import React, { FC, PropsWithChildren } from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import cn from "classnames";

interface ISidebarLinkProps {
  to: string;
  testId?: string;
}

const SidebarLink: FC<PropsWithChildren<ISidebarLinkProps>> = ({ to, children, testId }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        data-testid={testId}
        className={cn("navItem", {
          "font-semibold bg-lightGray": match,
        })}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
};

export default SidebarLink;
