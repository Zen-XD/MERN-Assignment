import React from "react";
import Card from "../components/Card";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"

const Work = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center h-screen w-9/10 text-white p-10 text-justify overflow-auto">
      <div className="text-white text-6xl font-semibold text-center mb-10">
        My <span className="text-cyan-500">Work</span>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Card
          link="https://github.com/Zen-XD/Minor"
          src={p1}
          title="M.U.R.E.C."
          details="An intelligent music recommendation app that recommends music based on your mood."
        />
        <Card
          link="https://github.com/Zen-XD/Major"
          src={p2}
          title="Questify"
          details="An exam generator web app that can help you prepare for your exams (On going)."
        />
        <Card
          link="https://github.com/Zen-XD/MERN-Assignment"
          src={p3}
          title="Portfolio"
          details="A portfolio about me and my work and a way to contact me."
        />
      </div>
    </div>
  );
};

export default Work;
