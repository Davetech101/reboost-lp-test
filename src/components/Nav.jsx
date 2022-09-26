import { useState } from "react";
import Arrow from "../assets/Arrow";
import Close from "../assets/Close";
import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import Twitter from "../assets/Twitter";

const Nav = ({ show, setShowNav }) => {
  const [showServices, setShowServices] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "About us",
    "Work",
    "Career",
    "Sign up / Login",
  ];

  const services = [
    "UI/UX Design",
    " Web Development",
    "Branding & Social Media",
    "SEO & Copywriting",
  ];

  return (
    <nav className={show && "show"}>
      <button className="close" onClick={() => setShowNav(false)}>
        <Close />
      </button>

      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() =>
                item === "Services" && setShowServices((prev) => !prev)
              }
            >
              {item}{" "}
              <span className={showServices ? "arrow rotate" : "arrow"}>
                {item === "Services" && <Arrow />}
              </span>
            </button>

            {item === "Services" && showServices && (
              <ul className="services">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div>
        <button><Twitter/></button>
        <button><Instagram/></button>
        <button><Facebook/></button>
        <button><LinkedIn/></button>
      </div>
    </nav>
  );
};

export default Nav;
