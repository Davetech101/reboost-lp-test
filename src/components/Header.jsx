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
      if (document.body.getBoundingClientRect().top <= -90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header
      style={{ width: showNav ? "80%" : "100%" }}
      className={scrolled ? "scroll" : ""}
    >
      <img src={logo} alt="logo" />

      <div className="move call-to-action">
        <button className="contact-btn" onClick={() => setShowContact(true)}>
          Contact
        </button>

        {!showNav && (
          <button onClick={() => setShowNav(true)}>
            <Hamburger />
          </button>
        )}
      </div>

      <Nav show={showNav} setShowNav={setShowNav} />

      <Contact show={showContact} setShowContact={setShowContact} />
    </header>
  );
};

export default Header;
