import React from "react";
import Parent from "../Utils/Contact/Parent";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="primary-container">
        <div className="secondary-container contact-secondary-container">
          <div className="contact-info-container">
            <h3>Get in Touch</h3>
            <p>
              Although I am currently new to the sector, based on my projects
              and talents, I would like to gain some industrial experience. I am
              delighted to begin a new chapter as a developer for the company.
            </p>
          </div>
        </div>
        <div className="social-media-container">
          <Parent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
