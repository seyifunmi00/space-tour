import { useState } from "react";
import data from "./data";
import { useNavigate, useParams, Outlet } from "react-router-dom";

export default function Technology() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const { technology } = useParams();

  const activeHandler = (i) => {
    setActive(i);
    navigate(
      `/technology/${data.technology[i].name.toLowerCase().replace(/ /g, "-")}`
    );
  };
  return (
    <div className="flex justify-center w-full h-full lg:pl-20">
      <div className="w-full mt-10 text-center lg:text-left">
        <h1 className="text-xl md:text-4xl font-semibold font-orbitron lg:pt-10 text-center sm:text-left px-auto md:mt-0 lg:mt-0">
          <em className="mr-6 text-gray-500">03</em>SPACE LAUNCH 101
        </h1>

        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:items-start lg:justify-start">
          <div className="flex items-start gap-10 flex-col lg:flex-row ">
            <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start pt-32 w-full lg:w-auto gap-x-20 -mt-20 lg:-mt-0 px-10 lg:px-0">
              {data.technology.map((tech, i) => (
                <div
                  className={`w-10 h-10 lg:w-16 lg:h-16 ring ring-white flex items-center justify-center rounded-full text-2xl lg:text-4xl mb-10 lg:mb-10 ${
                    active === i ? "bg-white text-black" : ""
                  }`}
                  key={i}
                  onClick={() => activeHandler(i)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="-mt-16 lg:mt-0 lg:pt-[5rem] flex-1">
              <h3 className="uppercase text-accent font-light mb-4">
                THE TERMINOLOGY...
              </h3>
              <Outlet />
            </div>
          </div>
          <img
            src={`/assets/technology/image-${technology}-portrait.jpg`}
            alt={technology}
            className="mt-4 lg:mt-0 w-[100%] h-[30rem] lg:w-full lg:max-w-[30rem] lg:max-h-[30rem] object-cover self-center lg:self-end"
          />
        </div>
      </div>
    </div>
  );
}
