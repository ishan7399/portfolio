import React from "react";
import EduGIF from "../Photos/edu-gif.json";
import Lottie from "lottie-react";
import Footer from "../Footer/Footer";

const Education = () => {
  return (
    <>
      <div className="primary-container">
        <div className="secondary-container edu-secondary-container">
          <div className="edu-info-container">
            <h1 className="studies">
              2019 - 2023 <span> | </span>
              Bechlor of Engineering
            </h1>
            <p className="field">Information Technology</p>
            <p className="field">
              Sardar Vallabhbhai Patel Institute Of Technology-Vasad
            </p>
            <p className="field">CGPA - 8</p>
            <br />

            <h1 className="studies">
              2018 - 2019 <span> | </span>
              Higher Secondary
            </h1>
            <p className="field">Shardayatan School (EM) / Science (Maths)</p>
            <p className="field">Percentage - 67%</p>
            <br />
            <h1 className="studies">
              2016 - 2017 <span> | </span>
              Secondary
            </h1>
            <p className="field">Shardayatan School (EM)</p>
            <p className="field">Percentage - 70%</p>
          </div>
          <div className="edu-image-container">
            <Lottie animationData={EduGIF} className="gif" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
