import React from "react";
import Close from "../assets/Close";
import Mail from "../assets/Mail";
import Phone from "../assets/Phone";
import Whatsapp from "../assets/Whatsapp";
import SocialNavs from "./SocialNavs";

const Contact = ({ show, setShowContact }) => {
  return (
    <div className={show ? "contactPage show" : "contactPage"}>
      <button className="close" onClick={() => setShowContact(false)}>
        <Close />
      </button>
      <div className="txt">
        <h1>Contact</h1>

        <p>
          Get in touch with Reboost by using any of the methods <br /> available
          on this page.
        </p>
      </div>

      <main>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail address" />
          <input type="text" placeholder="How can we help" className="text"/>

          <button>Submit from</button>
        </form>

        <div className="border"></div>

        <div className="contacts">
          <aside>
            <button className="contact">
              <Mail /> info@reboost.live
            </button>
            <button className="contact">
              <Phone /> +(961)-71-523153
            </button>
            <button className="contact">
              <Whatsapp /> Contact us on WhatsApp
            </button>
          </aside>

          <SocialNavs />
        </div>
      </main>
    </div>
  );
};

export default Contact;
