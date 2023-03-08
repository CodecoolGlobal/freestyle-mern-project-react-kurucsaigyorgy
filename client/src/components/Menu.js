import * as React from "react";

function Menu() {
  return (
    <div className="dropdown">
        <button className="dropbtn">MENU</button>
        <div className="dropdown-content">
          <a href="/">Home</a>
          <a href="/favourites">Favourites</a>
        </div>
      </div>
  );
}

export default Menu;
