import React from "react";

const Card = (props) => {
  console.log(props)
  return (
    <a href={props.link} target="_blank" className="bg-cyan-950 rounded-2xl hover:-translate-y-0.5">
      <img src={props.src} alt={props.title} className="rounded-t-2xl p-2 h-60 w-full object-cover" />
      <p className="text-cyan-500 p-2">{props.title}</p>
      <p className="p-2">{props.details}</p>
      <div className="flex gap-2 p-2 text-cyan-500">
        {props.lang?.map((item, index) => (
          <div key={index} className="bg-[#042532] p-1 rounded-lg">{item}</div>
        ))}
      </div>
    </a>
  );
};

export default Card;
