import React from "react";
import imge from "../assets/me.jpg";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-9/10 text-white ">
      <img
        src={imge}
        alt="My Photo"
        className="w-80 h-80 rounded-full object-cover object-center mb-10 shadow-[0_0_50px] shadow-cyan-500 hover:shadow-[0_0_70px]"
      />
      <div>
        <div className="text-8xl font-semibold ">
          Hi, I'm <span className="text-cyan-500">Zen</span>
        </div>
      </div>
      <p className="mb-10 text-2xl">
        A <span className="text-cyan-500">M.E.R.N. </span> Developer
      </p>
      <p className="w-5/10 text-center">
        Hello I am Rojen Maharjan a beginer M.E.R.N. developer on my journey to learn to code and develop wep apps.
      </p>
      <div className="flex gap-5">
        <a
          href="https://github.com/Zen-XD"
          target="_blank"
          className="bg-radial from-cyan-400 to-blue-500 rounded-full px-3 py-2 shadow-[0_0_15px] shadow-cyan-500 hover:-translate-y-0.5"
        >
          View My Work
        </a>
        <a
          href={imge}
          target="_blank"
          className="border-2 border-gray-600 bg-cyan-950 rounded-full px-3 py-2 shadow-[0_0_15px] shadow-cyan-500 hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
