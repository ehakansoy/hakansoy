import React from 'react';
import Section from "./Section";

interface SectionProps {
    title: string;
    body: string;
}

const TextSection: React.FC<SectionProps> = ({ title, body }) => {
    return <Section title={title} body={<p dangerouslySetInnerHTML={{ __html: body }} />} />;
};

export default TextSection;
