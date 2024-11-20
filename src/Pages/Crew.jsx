// import data from "./data.jsx";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "./data.jsx";

export default function Crew() {
  const [active, setActive] = useState(0);
 const navigate = useNavigate();
 const {crew} = useParams();

  const activeHandler = (i) => {
    setActive(i);
    navigate(`/crew/${data.crew[i].name.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
   <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-2 px-4 lg:px-20">
    <div className="w-full  sm:text-left">
      <h1 className="text-xl md:text-4xl font-semibold font-orbitron lg:pt-10 text-center sm:text-left px-auto mt-20 md:mt-0 lg:mt-0">
        <em className="mr-6 text-gray-500">02</em>MEET YOUR CREW
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="flex flex-col mt-12 lg:mt-0 lg:pt-32 ">
          <Outlet />
          <div className="flex lg:justify-start justify-center gap-3 mb-10 lg:mb-0 lg:w-1/2">
            {data.crew.map((crew, i) => (
              <div
                className={`w-8 h-8 rounded-full border-2 border-white ${
                  active === i ? "bg-white" : ""
                }`}
                key={i}
                onClick={() => activeHandler(i)}
              ></div>
            ))}
          </div>
        </div>
        <img src={`/assets/crew/image-${crew}.png`} alt="crew" className="mt-[2rem]  lg:-mb-0 lg:-mt-0 w-full max-w-[33rem] max-h-[33rem] self-center lg:self-end" />
      </div>
    </div>
    </div>
  );
}

// {
//  "crew": [
//    {
//      "name": "Douglas Hurley",
//      "images": {
//        "png": "./assets/crew/image-douglas-hurley.png",
//        "webp": "./assets/crew/image-douglas-hurley.webp"
//      },
//      "role": "Commander",
//      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
//    },
//    {
//      "name": "Mark Shuttleworth",
//      "images": {
//        "png": "./assets/crew/image-mark-shuttleworth.png",
//        "webp": "./assets/crew/image-mark-shuttleworth.webp"
//      },
//      "role": "Mission Specialist",
//      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
//    },
//    {
//      "name": "Victor Glover",
//      "images": {
//        "png": "./assets/crew/image-victor-glover.png",
//        "webp": "./assets/crew/image-victor-glover.webp"
//      },
//      "role": "Pilot",
//      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
//    },
//    {
//      "name": "Anousheh Ansari",
//      "images": {
//        "png": "./assets/crew/image-anousheh-ansari.png",
//        "webp": "./assets/crew/image-anousheh-ansari.webp"
//      },
//      "role": "Flight Engineer",
//      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
//    }
//  ],
//  "technology": [
//    {
//      "name": "Launch vehicle",
//      "images": {
//        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
//        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
//      },
//      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
//    },
//    {
//      "name": "Spaceport",
//      "images": {
//        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
//        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
//      },
//      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
//    },
//    {
//      "name": "Space capsule",
//      "images": {
//        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
//        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
//      },
//      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
//    }
//  ]
// }
