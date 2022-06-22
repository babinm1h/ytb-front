import React from "react"
import ContentLoader from "react-content-loader"

const VideoSkeleton = () => (
    <ContentLoader
        speed={2}
        width={255}
        height={230}
        viewBox="0 0 250 250"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
    >
        <rect x="55" y="173" rx="3" ry="3" width="179" height="6" />
        <rect x="55" y="186" rx="3" ry="3" width="181" height="6" />
        <circle cx="24" cy="189" r="20" />
        <rect x="56" y="200" rx="3" ry="3" width="181" height="5" />
        <rect x="-9" y="9" rx="0" ry="0" width="250" height="150" />
    </ContentLoader>
)

export default VideoSkeleton
