import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Section from "./Section";

type AccomProps = {
    data: {
        name: string;
        maps_url: string;
        reservation_url: string;
        check_in: string;
        check_out: string;
    }[];
};

const Accom: React.FC<AccomProps> = ({ data }) => {
    return (
        <ul>
            {data.map((accom, index) => (
                <li key={index}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '16px', fontWeight: 'bold'}}>{accom.name}</span>
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            style={{marginLeft: '8px', cursor: 'pointer', color: '#888'}}
                            onClick={() => window.open(accom.maps_url, '_blank')}
                        />
                    </div>
                    <ul>
                        <li>Check-in: {accom.check_in}</li>
                        <li>Check-out: {accom.check_out}</li>
                        <li><a href={accom.reservation_url} target="_blank">Booking confirmation</a></li>
                    </ul>
                </li>
            ))}
        </ul>
    );
};

const AccomSection: React.FC<AccomProps> = ({ data }) => {
    return <Section title="Accommodation" body={<Accom data={data} />} />;
}

export default AccomSection;
