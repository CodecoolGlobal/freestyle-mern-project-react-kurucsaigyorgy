import React from "react";
import Menu from "../components/Menu";
import moviefylogo from "/Users/pfviktor/codecool/freestyle-mern-project-react-kurucsaigyorgy/client/src/components/moviefylogo.png";


function HeaderComponent() {
  return (
    <header>
      <div class="logo">
      <img id="logo" src={moviefylogo} alt="Moviefy Logo"/>
      </div>
      <Menu />
    </header>
  );
}

export default HeaderComponent;
