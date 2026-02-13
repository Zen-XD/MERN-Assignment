import { BookOpen, GraduationCap, House, Trophy } from "lucide-react";
import React from "react";
import Edu from "../components/Edu";

const Education = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-9/10 text-white p-10">
      <GraduationCap size={64} className="text-cyan-500" />
      <div className="text-cyan-500 text-6xl font-semibold text-center mb-20">
        Education
      </div>

      <div className="flex justify-center items-center gap-5">
        <div>
          <div className="flex justify-center items-center text-cyan-500 text-2xl gap-1 mb-2">
            <BookOpen />
            <div>Education</div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-[#042532] p-2 rounded-md shadow-[0_0_5px] shadow-cyan-500 w-120">
            <House size={40} />
            <Edu />
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-cyan-500 text-2xl gap-1 mb-2">
            <Trophy />
            <div>Certifications</div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-[#042532] p-2 rounded-md shadow-[0_0_5px] shadow-cyan-500 w-120">
            <House size={40} />
            <div>
              <p>Higher Secondary Certificate</p>
              <p className="italic font-light opacity-75 text-[14x]">
                Modern Indian School
              </p>
              <p className="font-light opacity-75 text-[14px]">2010-2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
