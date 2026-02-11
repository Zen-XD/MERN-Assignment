import React from "react";

const Card = (props) => {
  return (
    <a href={props.link} target="_blank" className="bg-cyan-950 rounded-2xl hover:-translate-y-0.5">
      <img src={props.src} alt={props.title} className="rounded-t-2xl p-2 h-60 w-full object-cover" />
      <p className="text-cyan-500 p-2">{props.title}</p>
      <p className="p-2">{props.details}</p>
    </a>
  );
};

export default Card;
