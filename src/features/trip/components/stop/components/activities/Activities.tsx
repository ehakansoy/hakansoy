import React from 'react';
import { Accordion } from 'react-bootstrap';
import Section from "../Section";
import ActivityCateg from "./components/ActivityCateg";
import { SectionProps } from "./models/models";
import './Activities.scss'

export interface ActivitiesProps {
    data: { [key: string]: SectionProps };
    tripId: string;
}

const Activities: React.FC<ActivitiesProps> = ({ data, tripId }) => {
    return (
        <Section
            title="Things to do"
            body={
                <div>
                    <Accordion>
                        {Object.entries(data).map(([category, categData], index) => (
                            <ActivityCateg key={index} title={category} categData={categData} tripId={tripId} />
                        ))}
                    </Accordion>
                    <br />
                </div>
            }
        />
    );
};

export default Activities;
