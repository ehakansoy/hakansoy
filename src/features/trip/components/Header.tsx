import React from "react";
import DivLine from "../DivLine";
import { Link } from "react-router-dom";

interface HeaderProps {
    destination: string;
    from: string;
    to: string;
    tripId?: string | null;
    nextStop?: string | null
}

const Header: React.FC<HeaderProps> = ({destination, from, to, tripId = null, nextStop = null}) => {
    return (
        <div>
            <h1 style={{textAlign: "left"}}>
                {destination}{" "}
                <span style={{fontSize: "0.4em", color: "#888"}}>
                    {from} - {to}
                </span>
            </h1>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                {tripId && (
                    <Link to={`/trips/${tripId}`}
                          style={{fontSize: '12px', color: '#555', cursor: 'pointer', textDecoration: 'none'}}>
                        {tripId}
                    </Link>
                )}

                {tripId && nextStop && (
                    <Link to={`/trips/${tripId}/${nextStop}`}
                          style={{fontSize: '12px', color: '#555', cursor: 'pointer', textDecoration: 'none'}}>
                        {nextStop} →
                    </Link>
                )}
            </div>

            <DivLine/>
        </div>
    );
};

export default Header;
