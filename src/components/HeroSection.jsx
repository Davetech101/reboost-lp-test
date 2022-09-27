import Phone from "../assets/Phone";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <h1>Boost your <br /> business.</h1>

      <p>
        Our global team with their fine expertise will deliver a wider outlook
        where your clients can engage and relate. We make relevant and effective
        visual communication strategies for your business keeping an eye on the
        online communities and cultures for greater collaboration and the user
        experience.
      </p>

      <strong>Let us give you a boost.</strong>

      <button>Find out more</button>

      <button className="book">Book a free 15-minute <br /> consultation today. <Phone/></button>
    </section>
  );
};

export default HeroSection;
