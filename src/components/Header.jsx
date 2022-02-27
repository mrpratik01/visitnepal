import React from "react";
import "../components/Header.css";
import logo from "../img/visitnepal.png";

const Header = () => {
  return (
    <>
      {/* <div className="logo">
        <img src={logo} alt="" />
        <h1 className="primary">
          <span className="primary-main">Explore Nepal</span>
          <span className="primary-sub">Get excited Get Real</span>
        </h1>
      </div>
      <div className="navBar"></div> */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <h1 className="primary">
            <span className="primary-main">Explore Nepal</span>
            <span className="primary-sub">Get excited Get Real</span>
          </h1>
        </div>
        <nav className="navBar">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Contact us</a>
            </li>
          </ul>
        </nav>

        <div className="desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            eaque odit accusantium. Facilis eos qui voluptatibus tempore,
            aspernatur repellendus aliquam.
          </p>
          <button>Know More !</button>
        </div>
      </header>
    </>
  );
};

export default Header;
