import { useState } from "react";
import Hamburger from "../assets/Hamburger";
import logo from "../assets/reboost-logo.png";
import Contact from "./Contact";
import Nav from "./Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [showContact, setShowContact] = useState(false)
  return (
    <header style={{width: showNav ? "70%" : "100%" }}>
      <img src={logo} alt="logo" />

      <div className="move call-to-action">
        <button className="contact-btn" onClick={() => setShowContact(true)}>Contact</button>

        {!showNav && <button onClick={() => setShowNav(true)}>
          <Hamburger/>
        </button>}
      </div>

      <Nav show={showNav} setShowNav={setShowNav}/>

      <Contact show={showContact} setShowContact={setShowContact}/>
    </header>
  );
};

export default Header;
