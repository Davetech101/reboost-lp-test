import { useEffect, useState } from "react";
import Hamburger from "../assets/Hamburger";
import logo from "../assets/reboost-logo.png";
import Contact from "./Contact";
import Nav from "./Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top <= -50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header
      style={{ width: showNav ? "70%" : "100%" }}
      className={scrolled ? "scroll" : ""}
    >
      <img src={logo} alt="logo" />

      <div className="move call-to-action" style={{ marginTop: showNav ? "2rem" : "0" }}>
        <button className="contact-btn" onClick={() => setShowContact(true)}>
          Contact
        </button>

        {!showNav && (
          <button onClick={() => setShowNav(true)}>
            <Hamburger />
            <img src="" alt="" />
          </button>
        )}
      </div>

      <Nav show={showNav} setShowNav={setShowNav} />

      <Contact show={showContact} setShowContact={setShowContact} />
    </header>
  );
};

export default Header;
