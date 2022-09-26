import Hamburger from "../assets/Hamburger";
import logo from "../assets/reboost-logo.7a83de35.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />

      <div>
        <button className="contact-btn">Contact</button>

        <button>
          <Hamburger />
        </button>
      </div>
    </header>
  );
};

export default Header;
