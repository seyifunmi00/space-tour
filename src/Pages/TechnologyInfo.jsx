import data from "./data";
import { useParams } from "react-router-dom";

export default function TechnologyInfo() {
  const { technology } = useParams();
  const tech = data.technology.find(
    (t) => t.name.toLowerCase().replace(/ /g, "-") === technology
  );
  return (
    <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start">
      <h3 className="text-xl lg:text-3xl font-orbitron font-light text-gray-400 mb-4">
        {tech.name}
      </h3>
      <h1 className="text-3xl lg:text-6xl font-semibold mb-4 font-orbitron">{tech.name}</h1>
      <p className="text-lg font-light w-full lg:w-3/4 px-2 lg:px-0 text-center lg:text-left">{tech.description}</p>
    </div>
  );
}
