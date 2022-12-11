import React from "react";
import CTA from "./CTA.js";
import me from "../../assets/me.png";
import "./Header.css";
import Social from "./Social.js";

const Header = () => {
  return (
    <div className="h-screen bg-[#1f1f38] text-white text-center pt-[5rem] ">
      <h5 className="text-lg">Hello, I'm</h5>
      <h1 className="text-2xl mt-3">Pael Mahmud</h1>
      <h5 className="lg mt-3">Full Stack Web Developer</h5>
      <CTA />
      <Social />

      <div className="relative">
        <div className="bg-white absolute left-0"></div>
        <img
          src={me}
          className="w-52 mx-auto mt-20 absolute left-10 right-5"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
