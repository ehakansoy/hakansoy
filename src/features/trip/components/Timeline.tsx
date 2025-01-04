import React from 'react';
import {MDBContainer} from "mdb-react-ui-kit";
import {useLocation} from "react-router-dom";
import LabelList from "./Labels";

const Timeline: React.FC<any> = ({stops}) => {
    const location = useLocation();

    return (
        <MDBContainer>
            <ul className="timeline">
                {Object.entries(stops).map(([name, info]) => {
                    const fromDate = new Date(info.from);
                    const toDate = new Date(info.to);
                    const time = toDate.getTime() - fromDate.getTime();
                    const dayCount = Math.round(time / (1000 * 3600 * 24));
                    const dayText = `day${dayCount > 1 ? "s" : ""}`;

                    return (
                        <li className="timeline-item mb-5" key={name}>
                            <a href={`#${location.pathname}/${name}`} target="_blank" rel="noopener noreferrer">
                                <h5 className="fw-bold">{name}</h5>
                            </a>
                            <p className="text-muted mb-2 fw-bold">
                                {info.from} - {info.to} ({dayCount} {dayText})
                            </p>
                            <LabelList labels={info.labels}/>
                            <p  dangerouslySetInnerHTML={{__html: info.description}}/>
                        </li>
                    );
                })}
            </ul>
        </MDBContainer>
    );
};

export default Timeline;
