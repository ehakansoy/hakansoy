import React from 'react';

interface GDrive {
    folderId: string;
    width?: string;
    height?: string;
}

const GDrive: React.FC<GDrive> = ({
                                      folderId,
                                      width = '100%',
                                      height = '500px',
                                  }) => {
    const src = `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;

    return (
        <iframe
            src={src}
            width={width}
            height={height}
            style={{
                border: 'none',
                overflow: 'hidden',
                display: 'block',
                margin: '0 auto',
            }}
            scrolling="no"
            title="Google Drive Folder"
        ></iframe>
    );
};

export default GDrive;
