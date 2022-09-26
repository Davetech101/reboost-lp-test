import { useState } from "react";
import Hamburger from "../assets/Hamburger";
import logo from "../assets/reboost-logo.7a83de35.png";
import Nav from "./Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <header style={{width: showNav ? "70%" : "100%" }}>
      <img src={logo} alt="logo" />

      <div className={showNav && "move"}>
        <button className="contact-btn">Contact</button>

        {!showNav && <button onClick={() => setShowNav(true)}>
          <Hamburger/>
        </button>}
      </div>

      <Nav show={showNav} setShowNav={setShowNav}/>
    </header>
  );
};

export default Header;
