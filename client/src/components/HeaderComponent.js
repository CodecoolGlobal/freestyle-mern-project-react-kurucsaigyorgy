import React from "react";
import Menu from "../components/Menu";
import moviefylogo from "./moviefylogo.png"


function HeaderComponent() {
  return (
    <header>
      <div className="logo">
      <img id="logo" src={moviefylogo} alt="Moviefy Logo"/>
      </div>
      <Menu />
    </header>
  );
}

export default HeaderComponent;
