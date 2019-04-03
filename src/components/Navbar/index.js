import React from "react";
import "./style.css";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav>
  <div className="navWide jumbotron">
      <div className="wideDiv">
          <a href="#">Home</a>
        </div>
        <h1 className= "text-center">Venture Bros Clicky Game!!!!</h1>
    </div>
</nav>
  );
}

export default Navbar;
