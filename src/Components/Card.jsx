import React from "react";

const Card = ({ title, className }) => {
  return (
    <div
      className={`border-2 border-blue-400 w-[40vw] h-[50vh] flex-wrap  bg-gray-600 rounded-xl ${className} `}
    >
      <p className="text-xl p-5">{title}</p>
    </div>
  );
};

export default Card;
