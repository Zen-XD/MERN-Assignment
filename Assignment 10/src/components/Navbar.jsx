import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  User,
  Cog,
  Folder,
  GraduationCap,
  Languages,
  Microscope,
  Contact,
} from "lucide-react";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    `p-2 rounded-full ${isActive
      ? "bg-radial from-cyan-400 to-blue-500"
      : "hover:text-cyan-500"
    }`;

  return (
    <div className="flex flex-col justify-center items-center rounded-full bg-cyan-950 shadow-[0_0_35px] shadow-cyan-300 text-white gap-5 px-3 py-5 mx-10">
      <NavLink to="/" className={navStyle}>
        <House />
      </NavLink>
      <NavLink to="/about" className={navStyle}>
        <User />
      </NavLink>
      <NavLink to="/skill" className={navStyle}>
        <Cog />
      </NavLink>
      <NavLink to="/work" className={navStyle}>
        <Folder />
      </NavLink>
      <NavLink to="/education" className={navStyle}>
        <GraduationCap />
      </NavLink>
      <NavLink to="/languages" className={navStyle}>
        <Languages />
      </NavLink>
      <NavLink to="/testimonial" className={navStyle}>
        <Microscope />
      </NavLink>
      <NavLink to="/contact" className={navStyle}>
        <Contact />
      </NavLink>
    </div>
  );
};

export default Navbar;
