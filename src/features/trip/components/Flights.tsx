import React from 'react';

interface Flight {
    from: string;
    to: string;
    takeoff: string;
    land: string;
    flight_nums: string[];
    pdf_url: string;
}

interface FlightsProps {
    flights: Record<string, Record<string, Flight>>;
}

const Flight: React.FC<{ flight: Flight; flightType: string }> = ({flight, flightType}) => {
    return (
        <div style={{paddingLeft: '5px'}}>
            <a href={flight.pdf_url} target="_blank" rel="noopener noreferrer">{flightType}</a>
            <div style={{paddingLeft: '5px'}}>
            Airports: {flight.from} - {flight.to}
            <br/>
            Take off: {flight.takeoff}
            <br/>
            Landing: {flight.land}
            <br/>
            Flight number(s):{" "}
            {Array.isArray(flight.flight_nums)
                ? flight.flight_nums.join(", ")
                : flight.flight_nums}
            </div>
            <br/>
        </div>
    );
};

const Flights: React.FC<FlightsProps> = ({flights}) => {
    return (
        <div>
            {Object.entries(flights).map(([person, personFlights]) => (
                <div key={person} style={{paddingLeft: '5px'}}>
                    <h5>{person}</h5>
                    {Object.entries(personFlights).map(([flightType, flight]) => (
                        <Flight key={flightType} flight={flight} flightType={flightType} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Flights;
