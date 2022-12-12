import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={325}
        viewBox="0 0 310 325"
        backgroundColor="#eee7e7"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="10" y="15" rx="10" ry="10" width="220" height="180" />
        <rect x="32" y="33" rx="0" ry="0" width="39" height="33" />
        <rect x="10" y="212" rx="10" ry="10" width="220" height="40" />
        <rect x="10" y="266" rx="10" ry="10" width="86" height="40" />
        <rect x="200" y="264" rx="10" ry="10" width="34" height="40" />
    </ContentLoader>
)

export default MyLoader
