import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tooltip from "./Tooltip"; // Import your Tooltip component

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null); // State to track hovered technology

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div 
          className='w-28 h-28 relative' // Use relative to position the tooltip absolutely within
          key={technology.name}
          onMouseEnter={() => setHoveredTech(technology.name)} // Set hovered tech
          onMouseLeave={() => setHoveredTech(null)} // Remove hovered tech
        >
          <BallCanvas icon={technology.icon} />
          {hoveredTech === technology.name && <Tooltip text={technology.name} />}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
