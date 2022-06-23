import React from "react"
import ContentLoader from "react-content-loader"

const UserSkeleton = () => (
    <ContentLoader
        speed={2}
        width={180}
        height={100}
        viewBox="0 0 180 100"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
    >
        <rect x="33" y="88" rx="2" ry="2" width="100" height="10" />
        <rect x="24" y="71" rx="2" ry="2" width="120" height="10" />
        <circle cx="84" cy="42" r="20" />
    </ContentLoader>
)

export default UserSkeleton