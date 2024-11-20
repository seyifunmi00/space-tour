import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 lg:mt-0 w-full h-full flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-20 overflow-hidden">
      <div className="flex flex-col lg:items-start w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-xl md:text-4xl font-semibold mb-4 lg:mb-8">
          So, you want to travel to
        </p>
        <h1 className="text-5xl md:text-8xl lg:text-8xl font-semibold font-orbitron mb-4 lg:mb-8 tracking-wide">
          Space
        </h1>
        <p className="text-sm md:text-xl font-light mb-6 lg:mb-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well, sit
          back, and relax because we’ll give you a truly out-of-this-world
          experience
        </p>
      </div>
      <button
        className=" bg-white text-black rounded-full text-2xl md:text-4xl font-semibold font-orbitron p-10 lg:p-20 w-[10rem] h-[10rem] md:w-[22rem] md:h-[22rem] tracking-wide shadow-lg shadow-white mt-10 md:mt-32 lg:mt-0 mb-[5rem] md:mb-32 lg:mb-0 flex justify-center items-center"
        onClick={() => navigate("/destination")}
      >
        Explore
      </button>
    </div>
  );
}

//
