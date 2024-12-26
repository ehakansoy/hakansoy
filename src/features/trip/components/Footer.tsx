import React from 'react';

interface Props {

}

const Footer: React.FC<Props> = () => {
    return (
        <>
            <hr style={{border: "1px solid #888", margin: "20px 0"}}/>
            <footer className="text-center mt-3">
                <p className="text-muted small" style={{fontSize: "10px"}}>
                    Inspired by{" "}
                    <a
                        href="https://www.linkedin.com/in/nicholas-g/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted"
                    >
                        Nicholas Gregory
                    </a>
                    's itinerary planner :)
                </p>
            </footer>
        </>
    );
};

export default Footer;

