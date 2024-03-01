import React, { useState, useEffect } from "react";

const ProgressBar = ({ skillName, skillLevel }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(100, Math.max(0, skillLevel));
    setProgress(clampedProgress);
  }, [skillLevel]);

  return (
    <div className="progress">
      <span className="skill">
        {skillName} <i className="val">{progress}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Example usage:
const Skills = () => {
  return (
    <div>
      <div class="row skills-content">
        <div class="col-lg-6" data-aos="fade-up">
          <ProgressBar skillName="HTML" skillLevel={100} />
          <ProgressBar skillName="css" skillLevel={100} />
          <ProgressBar skillName="Javascript" skillLevel={80} />
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <ProgressBar skillName="React" skillLevel={70} />
          <ProgressBar skillName="Photoshop" skillLevel={50} />
        </div>
      </div>
      {/* Add more progress bars as needed */}
    </div>
  );
};

export default Skills;
