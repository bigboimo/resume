import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-2 bg-black text-white text-sm rounded">
      {text}
    </div>
  );
};

export default Tooltip;
