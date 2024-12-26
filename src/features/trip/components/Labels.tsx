import React from 'react';

interface LabelsProps {
    labels: string[];
}

const LabelList: React.FC<LabelsProps> = ({ labels }) => {
    if (!labels || labels.length === 0) return null;

    return (
        <div className="labels-container" style={{ marginBottom: '10px' }}>
            {labels.map((label, index) => (
                <span
                    key={index}
                    style={{
                        backgroundColor: '#888',
                        color: '#fff',
                        padding: '5px 10px',
                        marginRight: '5px',
                        borderRadius: '5px',
                        fontSize: '0.9em',
                    }}
                >
                    {label}
                </span>
            ))}
        </div>
    );
};

export default LabelList;