import brandingIcon from "../assets/brandingIcon.svg";
import webIcon from "../assets/webIcon.svg";
import serviceIcon from "../assets/serviceIcon.svg";

const ServicesSection = () => {
  const servicesArray = [
    {
      title: "UI/UX Design",
      txt: "Our design team has vast experience in designing apps and B2B solutions and together we will create a system that your users will love. Our experts smoothly blend into the software development process to conveniently deliver the products you want.",
    },

    {
      title: "Web & Mobile App Development",
      txt: "The largest department of our organization contains expert web developers who are anxiously waiting to work with you and turn your website dream into a reality. We provide web development services including a content management system (CMS), Informational website or an e-commerce store, you name it and we create it.",
    },

    {
      title: "Branding & Social Media",
      txt: "Our Marketing team makes efforts to nourish and support the unprecedented growth of your business. We believe in bringing your aspiring brand into reality and fanning the flames of the existing ones with aims, values and growth. We provide expertise in impressive branding, fascinating designs and extraordinary creativity to sky-rocket your brand.",
    },

    {
      title: "SEO & Copywriting",
      txt: "Imaging, you have invested a good budget on the design, outlook and management of your website but still, you fail to get the engagement. Ever wondered why? This could be because of the unclear content available on the site that fails to get you loyal customers and increase your online visibility. For that, you need a professional team for publishing clear content that can not only bring you long-term customers but rank your brand higher on the search engine.",
    },
  ];

  const services = servicesArray.map((service) => (
    <div key={service.title}>
      <div className="head">
        <h3>{service.title}</h3>

        {service.title === "UI/UX Design" ? (
          <img src={serviceIcon} alt="service icon" />
        ) : service.title === "Web & Mobile App Development" ? (
          <img src={brandingIcon} alt="branding icon" />
        ) : (
          <img src={webIcon} alt=" web icon" />
        )}
      </div>

      <p>{service.txt}</p>

      <button>More Info</button>
    </div>
  ));

  return (
    <section className="servicesSection">
      <h1>What we do...</h1>

      <strong>Services</strong>

      <div className="services">{services}</div>
    </section>
  );
};

export default ServicesSection;
