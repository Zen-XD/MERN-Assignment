import React from "react";
import imge from "../assets/me.jpg";

const About = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center h-screen w-9/10 text-white p-10 text-justify">
      <div className="flex justify-center items-center gap-20">
        <div className=" w-4/10 leading-10">
          I’m Zen, an engineering student focused on building intelligent software systems. I’m particularly interested in machine learning, large language models, and computer vision.I’m constantly exploring ways to improve system performance, model efficiency, and overall architecture.
        </div>

        <img
          src={imge}
          alt="My Photo"
          className="w-80 h-78 rounded-2xl object-cover object-center mb-10 shadow-[0_0_50px] shadow-cyan-500 hover:scale-180 hover:shadow-none"
        />

        <div className=" w-4/10 leading-10">
          I enjoy developing complete end-to-end systems — from data processing and model training to deployment and user interface design. I primarily work with Python and React, and I have experience building AI-driven applications that solve practical problems.
        </div>
      </div>
      <div className="text-white text-6xl font-semibold text-center">
        About
        <br />
        <span className="text-cyan-500">Me</span>
      </div>
    </div>
  );
};

export default About;
