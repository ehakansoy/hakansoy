import React from 'react';
import { Accordion } from "react-bootstrap";
import { ActivityProps } from "../models/models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faBook, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface ActivityCategProps {
    title: string;
    categData: { [key: string]: ActivityProps };
    tripId: string;
}

const ActivityCateg: React.FC<ActivityCategProps> = ({title, categData, tripId}) => {
    return (
        <Accordion.Item eventKey={title}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <Accordion>
                    {Object.keys(categData).map((activName) => {
                        const activData = categData[activName];
                        let imgSrc = null;

                        if (activData.img) {
                            if (activData.img.startsWith('http')) {
                                imgSrc = activData.img;
                            } else {
                                imgSrc = `/trip_data/${tripId}/imgs/${activData.img}`;
                            }
                        }

                        return (
                            <Accordion.Item key={activName} eventKey={activName}>
                                <Accordion.Header>{activName}</Accordion.Header>
                                <Accordion.Body>
                                    {imgSrc && <img src={imgSrc} alt={activName} style={{maxWidth: '100%'}}/>}
                                    <div className="activity-links">
                                        {activData.info_url &&
                                            <a href={activData.info_url} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faInfoCircle}/>
                                            </a>}
                                        {activData.booking_url &&
                                            <a href={activData.booking_url} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faBook}/>
                                            </a>
                                        }
                                        {activData.gmaps_url &&
                                            <a href={activData.gmaps_url} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                            </a>
                                        }
                                    </div>
                                    <p dangerouslySetInnerHTML={{__html: activData.description}}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default ActivityCateg;
