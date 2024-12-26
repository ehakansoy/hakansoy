import React from 'react';
import {useParams} from "react-router-dom";
import useTripData from "../../hooks/useTripData";
import Header from "../Header";
import ContentDiv from "../ContentDiv";
import LabelList from "../Labels";
import TextSection from "./components/TextSection";
import DivLine from "../../DivLine";
import Activities from "./components/activities/Activities";
import HeaderImage from "../HeaderImage";
import AccomSection from "./components/AccomSection";
import Footer from "../Footer";
import GMapSection from "./components/GMapSection";
import Section from "./components/Section";

function getNextStop(currentStop: string, stops: string[]): string | null {
    const currentStopIndex = stops.findIndex(stop => stop === currentStop);
    return (currentStopIndex !== -1 && currentStopIndex < stops.length - 1)
        ? stops[currentStopIndex + 1]
        : null;
}

const Stop = () => {
    const { tripId, stopId } = useParams();
    const { data, loading, error } = useTripData(tripId || "");

    if (loading) return <div style={{ textAlign: "center" }}>Loading itinerary...</div>;
    if (error) return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>;
    if (!data) return <div style={{ textAlign: "center" }}>No data found for this trip.</div>;

    if (typeof stopId !== "string" || typeof tripId !== "string") {
        throw new Error("Invalid stop or trip id");
    }

    const stopData = data?.stops?.[stopId] ?? null;
    const nextStop = getNextStop(stopId, Object.keys(data?.stops))

    return (
        <ContentDiv>
            <Header destination={stopId} from={stopData.from} to={stopData.to} tripId={tripId} nextStop={nextStop} />
            <HeaderImage path={stopData.img} />
            <LabelList labels={stopData.labels}/>
            <DivLine/>
            <TextSection title={"Overview"} body={stopData.description} />
            <AccomSection data={stopData.accommodation} />
            <Activities data={stopData.activities} tripId={tripId}/>
            {<Section title="Food & Drink"
                      body={<a href={`https://maps.app.goo.gl/${stopData.food_gmaps_url}`}
                               target="_blank">View in Google Maps</a>}/>}
            <br/>
            <TextSection title={"History"} body={stopData.history}/>
            <Footer/>
        </ContentDiv>
    );
};

export default Stop;
