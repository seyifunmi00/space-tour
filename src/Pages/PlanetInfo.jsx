import { useParams } from "react-router-dom";
import data from "../Pages/data";
export default function PlanetInfo() {
  const { planet } = useParams();
  const planetDescription = data.destinations.find(
    (destination) => destination.name === planet
  );
  return (
    <div className="mt-2 flex flex-col sm-items-start text-center sm:text-left items-center ">
      <h1 className="text-[4rem] sm-text-[7rem] font-semibold font-orbitron">{planet}</h1>
      <p className="text-center lg:text-left">{planetDescription.description}</p>
      <hr className="w-full border-t-1 border-gray-600 my-10" />
      <div className="flex justify-between w-full">
        <div className="flex justify-between w-full">
          <div>
            <h3 className="uppercase text-accent font-light mb-4">
              AVG. DISTANCE
            </h3>
            <p className="text-xl lg:text-3xl font-semibold font-orbitron text-center lg:text-left">
              {planetDescription.distance}
            </p>
          </div>

          <div className="mb-10 sm:mb-0">
            <h3 className="uppercase text-accent font-light mb-4">
              EST. TRAVEL TIME
            </h3>
            <p className="text-xl lg:text-3xl font-semibold font-orbitron text-center lg:text-left">
              {planetDescription.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
