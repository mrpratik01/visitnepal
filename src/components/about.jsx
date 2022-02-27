import React from "react";
import "../components/about.css";
import aboutusbackround from "../img/aboutusbackground.mp4";
import aboutimg from "../img/aboutimg.png";

const about = () => {
  return (
    <>
      <div className="about-intro">
        <h2>About Us</h2>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="background">
        <video autoPlay muted loop>
          <source src={aboutusbackround} type="video/mp4" />
        </video>

        <div className="about-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            repellat vel minus! Rem laborum sapiente ex? Deserunt similique
            laborum distinctio quod ut minima expedita. Illum cum modi ab
            architecto saepe!
          </p>
        </div>
        <div className="aboutpng">
          <img src={aboutimg} alt="" />
        </div>
        {/* <div className="travelPlace">
          <h2>What we do</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            modi ipsam laborum molestias quidem accusamus? Ullam illo qui,
            blanditiis magnam ut sed perspiciatis natus! Doloribus dolores
            ducimus quas facilis eius?
          </p>
        </div> */}
      </div>
    </>
  );
};

export default about;
