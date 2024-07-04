import React, { useState, useCallback } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tooltip from "./Tooltip";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = useCallback((name) => {
    setHoveredTech(name);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredTech(null);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 relative"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(technology.name)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => handleMouseEnter(technology.name)}
          onTouchEnd={handleMouseLeave}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain"
          />
          {hoveredTech === technology.name && (
            <Tooltip text={technology.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
