import React from 'react';

interface GMapOverview {
    gmaps_id: string;
}

const GMapOverview: React.FC<GMapOverview> = ({gmaps_id}) => {
    return (
        <>
            <br/>
            {gmaps_id ? (
                <iframe
                    src={`https://www.google.com/maps/d/embed?mid=${gmaps_id}`}
                    width="100%"
                    height="600px"
                    style={{
                        border: "none",
                        display: "block",
                        margin: "0 auto",
                    }}
                    title="Google Maps"
                />
            ) : (
                <p style={{textAlign: "center", color: "#888"}}>No map available for this trip.</p>
            )}
            <br/>
        </>
    );
};

export default GMapOverview;
