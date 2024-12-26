import React from 'react';
import Section from "./Section";

interface GMapListProps {
    gmaps_id: string;
}

interface GMapSectionProps {
    title: string;
    gmaps_id: string;
}

const GMapList: React.FC<GMapListProps> = ({gmaps_id}) => {
    return (
        <>
            <br/>
            {gmaps_id ? (
                <iframe
                    src={`https://www.google.com/maps/embed?pb=${gmaps_id}`}
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
            <a href={`https://maps.app.goo.gl/${gmaps_id}`} target="_blank">View in Google Maps</a>
            <br/>
        </>
    );
};

const GMapSection: React.FC<GMapSectionProps> = ({ title, gmaps_id }) => {
    return gmaps_id ? <Section title={title} body={<GMapList gmaps_id={gmaps_id} />} /> : null;
};

export default GMapSection;
