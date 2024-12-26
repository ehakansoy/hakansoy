import React from "react";
import Flights from "./components/Flights";
import GDrive from "./components/GDrive";
import Accordion from "react-bootstrap/Accordion";
import Timeline from "./components/Timeline";
import { useParams } from "react-router-dom";
import GMapOverview from "./components/GMapOverview";
import Footer from "./components/Footer";
import useTripData from "./hooks/useTripData";
import Header from "./components/Header";
import ContentDiv from "./components/ContentDiv";
import HeaderImage from "./components/HeaderImage";

const Trip: React.FC = () => {
    const {tripId} = useParams();
    const {data, loading, error} = useTripData(tripId || "");

    if (loading) return <div style={{textAlign: "center"}}>Loading itinerary...</div>;
    if (error) return <div style={{color: "red", textAlign: "center"}}>Error: {error}</div>;
    if (!data) return <div style={{textAlign: "center"}}>No data found for this trip.</div>;

    return (
        <ContentDiv>
            <Header destination={data.destination} from={data.from} to={data.to}/>
            <HeaderImage path={data.img} />

            <h2>Overview</h2>
            {data.overview ? (
                <div
                    style={{textAlign: "justify"}}
                    dangerouslySetInnerHTML={{__html: data.overview}}
                />
            ) : (
                <p>No overview available for this trip.</p>
            )}

            <GMapOverview gmaps_id={data.gmaps_id}/>
            <Timeline stops={data.stops}/>

            <Accordion>
                {data.flights && (
                    <Accordion.Item eventKey="flights">
                        <Accordion.Header>Flights</Accordion.Header>
                        <Accordion.Body>
                            <Flights flights={data.flights}/>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
                <Accordion.Item eventKey="documents">
                    <Accordion.Header>Documents</Accordion.Header>
                    <Accordion.Body>
                        <GDrive folderId="17ZbXzsFwsbfEPSxxu4HbgBdfmQPC3kme"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Footer/>
        </ContentDiv>
    );
};

export default Trip;
