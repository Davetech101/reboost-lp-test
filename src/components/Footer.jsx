import logo from "../assets/reboost-logo.png";
import footerImg from "../assets/footerLogo.png";
import SocialNavs from "./SocialNavs";

const Footer = () => {
  return (
    <footer>
      <main>
        <form>
          Subscribe here for news and updates:
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail address" />
          <button>Subscribe</button>
        </form>

        <div className="logo">
          <img src={logo} alt="" />

          <SocialNavs />
        </div>

        <nav>
          <h5>Explore</h5>

          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Our Work</button>
            </li>
            <li>
              <button>Career</button>
            </li>
          </ul>

          <small>
            Copyright &copy; 2022 | All rights reserved | Site by <br /> Reboost
          </small>
        </nav>

        <img src={footerImg} alt="" className="img" />
      </main>
    </footer>
  );
};

export default Footer;
