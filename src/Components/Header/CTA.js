import React from "react";
import resume from "../../assets/resume.pdf";
const CTA = () => {
  return (
    <div className="mt-10">
      <a
        href={resume}
        download
        className="btn btn-outline text-white hover:bg-primary border-spacing-1"
      >
        Download Resume
      </a>
      <a
        href="#contact"
        className="btn btn-outline text-white hover:bg-secondary ml-4 border-spacing-1"
      >
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
