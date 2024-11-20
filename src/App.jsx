import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Navbar from "./Navbar.jsx";
import Destination from "./Pages/Destination.jsx";
import PlanetInfo from "./Pages/PlanetInfo.jsx";
import Crew from "./Pages/Crew.jsx";
import CrewInfo from "./Pages/CrewInfo.jsx";
import Technology from "./Pages/Technology.jsx";
import TechnologyInfo from "./Pages/TechnologyInfo.jsx";
export default function App() {
  const location = useLocation();

  // Map routes to background images
  const backgroundImages = {
    "/": "/assets/home/background-home-desktop.jpg",
    "/destination": "/assets/destination/background-destination-desktop.jpg",
    "/crew": "/assets/crew/background-crew-desktop.jpg",
    "/technology": "/assets/technology/background-technology-desktop.jpg",
  };

  // Determine background image
  const isDestinationRoute = location.pathname.startsWith("/destination");
  const isCrewRoute = location.pathname.startsWith("/crew");
  const isTechnologyRoute = location.pathname.startsWith("/technology");
  const backgroundImage = isDestinationRoute
    ? backgroundImages["/destination"]
    : isCrewRoute
    ? backgroundImages["/crew"]
    : isTechnologyRoute
    ? backgroundImages["/technology"]
    : backgroundImages[location.pathname] || backgroundImages["/"];

  return (
    <Routes>
      <Route path="/" element={<Navbar backgroundImage={backgroundImage} />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          {/* Redirect /destination to /destination/moon */}
          <Route index element={<Navigate to="/destination/moon" replace />} />
          <Route path=":planet" element={<PlanetInfo />} />
        </Route>
        <Route path="/crew" element={<Crew />}>
          <Route
            index
            element={<Navigate to="/crew/douglas-hurley" replace />}
          />
          <Route path=":crew" element={<CrewInfo />} />
        </Route>
        <Route path="/technology" element={<Technology />}>
          <Route
            index
            element={<Navigate to="/technology/launch-vehicle" replace />}
          />
          <Route
            index
            element={<Navigate to="/technology/launch-vehicle" replace />}
          />
          <Route path=":technology" element={<TechnologyInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}
