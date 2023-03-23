import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HomeGIF from "../Photos/home-gif.json";
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="primary-container">
        <div className="secondary-container ">
          <div className="intro-container">
            <p>Hii !!!</p>
            <h1> Wanna know about me ??</h1>
          </div>

          <div className="home-image-container">
            <Lottie animationData={HomeGIF} className="gif" />
          </div>
        </div>
        <div className="click-here">
          <p>Click Here</p>
          <ArrowDownwardIcon />
        </div>

        <div className="go-to-container">
          <Link className="nav-btn" to="/about">
            About...
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
