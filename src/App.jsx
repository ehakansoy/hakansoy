import MyNavbar from "./components/MyNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Trip from "./features/trip/Trip.tsx";
import './App.css'
import Stop from "./features/trip/components/stop/Stop.tsx";

function App() {
    return (
        <div>
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trips/:tripId" element={<Trip />} />
                <Route path="/trips/:tripId/:stopId" element={<Stop />} />
            </Routes>
        </div>
    );
}

export default App;