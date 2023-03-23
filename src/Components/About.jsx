import React from "react";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="primary-container">
        <div className="secondary-container about-secondary-container">
          <div className="about-container">
            <h3>Hello... I'm</h3>
            <h1>Ishan Tapa</h1>
            <h3>Nice to meet you</h3>
          </div>
          <div className="detail-container">
            <p>
              I am a web developer who aims to find an exciting, challenging
              entry-level position in the industry alongside a company that will
              continuously motivate and drive me to do my best and improve my
              skills and abilities in order to be able to assist the company in
              achieving its missions and goals.  
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
