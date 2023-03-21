import React from "react";
import Menu from "../components/Menu";
import moviefylogo from "./moviefylogo.png"


function HeaderComponent() {
  




  return (
    <header>
      <div className="logo">
      <a href="/">
      <img id="logo" src={moviefylogo} alt="Moviefy Logo"/>
      </a>
      </div>
      <Menu />
    </header>
  );
}

export default HeaderComponent;
