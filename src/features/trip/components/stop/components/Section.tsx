import React from 'react';

interface SectionProps {
    title: string;
    body: any;
}

const Section: React.FC<SectionProps> = ({ title, body }) => {
    const sectionId = title.toLowerCase().replace(/\s+/g, '-');

    const handleClick = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${sectionId}`);
        }
    };

    return (
        <>
            {body && (
                <div id={sectionId}>
                    <h2 style={{ textAlign: "left", cursor: 'pointer' }} onClick={handleClick}>
                        {title}
                    </h2>
                    {body}
                </div>
            )}
        </>
    );
};

export default Section;
