import React from "react";
import Parent from "../Utils/Skillbar/Parent";
import Footer from "../Footer/Footer";

const Technology = () => {
  return (
    <>
      <div className="primary-container">
        <div className="secondary-container " id="tech-secondary-container">
          <div className="skill-intro">
            <p>Technologies I have worked with :-</p>
          </div>
          <Parent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technology;
