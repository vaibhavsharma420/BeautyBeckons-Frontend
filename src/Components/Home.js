import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            The Biggest Beauty Show Now in Rajasthan
          </h1>
          <p className="primary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className="secondary-button">
            Learn More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src="images/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
