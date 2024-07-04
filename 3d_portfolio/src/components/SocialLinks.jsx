import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = ({ linkedinUrl, githubUrl }) => {
  return (
    <div id="social-links" className="flex justify-center gap-4 mt-8">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-blue-600"
      >
        <FaLinkedin />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-400"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
