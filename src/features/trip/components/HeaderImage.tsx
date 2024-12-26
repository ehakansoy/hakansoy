import React from "react";

type HeaderImageProps = {
    path: string;
};

const HeaderImage: React.FC<HeaderImageProps> = ({ path }) => {
    if (!path) {
        return null;
    }

    return (
        <>
            <img
                src={path}
                alt="Header img not found"
                style={{
                    display: "block",
                    margin: "0 auto",
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                }}
            />
            <br />
        </>
    );
};

export default HeaderImage;
