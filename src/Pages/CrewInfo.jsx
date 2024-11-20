import { useParams } from "react-router-dom";
import data from "./data.jsx";

export default function CrewInfo() {
  const { crew } = useParams();
  const crewDescription = data.crew.find(
    (member) => member.name.toLowerCase().replace(/ /g, "-") === crew
  );

 return <div className="mb-20 -mt-10 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
   <h3 className="text-xl sm:text-3xl font-orbitron font-light text-gray-400 mb-4">{crewDescription.role}</h3>
    <h1 className="text-4xl sm:text-6xl font-semibold mb-4 font-orbitron">{crewDescription.name}</h1>
    <p className="text-lg font-light  lg:w-3/4  text-center lg:text-left">{crewDescription.bio}</p>
  </div>;
}