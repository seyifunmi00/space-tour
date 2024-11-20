// import data from "./data.jsx";
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function Destination() {
  const { planet } = useParams();
  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center mt-20 sm-mt-2 px-4 sm:px-20">
    <div className="w-full sm:w-auto text-center sm:text-left mt-16 lg:-mt-0">
      <h1 className="text-xl md:text-4xl font-semibold font-orbitron mb-6 sm:mb-10 md:mt-32">
        <em className="mr-3 sm:mr-6 text-gray-500 mb-4 sm:mb-10">01</em>Pick your destination
      </h1>
      <div className=" w-full flex flex-col lg:flex-row justify-center lg:justify-between ">
        <img
          src={`/assets/destination/image-${planet}.png`}
          alt={planet}
          className="w-full  lg:max-w-[30rem]  lg:max-h-[30rem] mb-6 sm:mb-0"
        />
        <div className="flex flex-col items-center  lg:items-start pr-0 lg:pr-[6rem] lg:ml-8 w-full lg:w-1/2 mt-4 lg:mt-0">
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
            {["moon", "mars", "europa", "titan"].map((item) => (
              <NavLink
                to={`/destination/${item}`}
                className={`text-sm sm:text-2xl font-semibold font-orbitron ${
                  planet === item ? "border-b-2 border-white pb-1 sm:pb-2" : ""
                }`}
                key={item}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  </div>
  
  );
}
