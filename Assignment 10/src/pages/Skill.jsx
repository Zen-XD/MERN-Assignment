import React, { useEffect, useState } from "react";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Skill = () => {
  const [fill, setFill] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFill(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-9/10 text-white p-10">
      <div className="text-white text-6xl font-semibold text-center mb-20">
        My <span className="text-cyan-500">Skills</span>
      </div>

      <div className="flex justify-center items-center gap-30 w-full px-20">
        <div className="grid grid-cols-3 grid-rows-3 gap-5 w-50 h-50">
          <FaReact className="w-full h-full text-[#0088CC] col-start-2 row-start-1" />
          <SiTailwindcss className="w-full h-full text-[#06B6D4] col-start-1 row-start-2" />
          <FaNodeJs className="w-full h-full text-[#5FA04E] col-start-3 row-start-2" />
          <FaPython className="w-full h-full text-[#3776AB] col-start-2 row-start-3" />
        </div>

        <div className="w-5/10">
          <div className="flex justify-between">
            <p>React</p>
            <p>70%</p>
          </div>
          <div className="border-2 border-cyan-500 h-5 w-full rounded-md overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-cyan-500 to-blue-400 transition-all duration-1000 ease-in-out"
              style={{ width: fill ? "70%" : "0%" }}
            ></div>
          </div>

          <div className="flex justify-between">
            <p>TailwindCSS</p>
            <p>90%</p>
          </div>
          <div className="border-2 border-cyan-500 h-5 w-full rounded-md overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-cyan-500 to-blue-400 transition-all duration-1000 ease-in-out"
              style={{ width: fill ? "90%" : "0%" }}
            ></div>
          </div>

          <div className="flex justify-between">
            <p>NodeJS</p>
            <p>10%</p>
          </div>
          <div className="border-2 border-cyan-500 h-5 w-full rounded-md overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-cyan-500 to-blue-400 transition-all duration-1000 ease-in-out"
              style={{ width: fill ? "10%" : "0%" }}
            ></div>
          </div>

          <div className="flex justify-between">
            <p>Python</p>
            <p>40%</p>
          </div>
          <div className="border-2 border-cyan-500 h-5 w-full rounded-md overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-cyan-500 to-blue-400 transition-all duration-1000 ease-in-out"
              style={{ width: fill ? "40%" : "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
