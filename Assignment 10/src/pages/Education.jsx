import { BookOpen, GraduationCap, Trophy } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen w-9/10 text-white p-10">
      <GraduationCap size={64} className="text-cyan-500" />
      <div className="text-cyan-500 text-6xl font-semibold text-center mb-20">
        Education
      </div>

      <div className="flex justify-center items-center gap-5">
        <div>
          <div className="flex justify-center items-center text-cyan-500 text-xl gap-1">
            <BookOpen />
            <div >
              Education
            </div>
          </div>

          <div className="">

          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-cyan-500 text-xl gap-1">
            <Trophy />
            <div >
              Certifications
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
