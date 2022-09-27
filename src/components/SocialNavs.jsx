import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import Twitter from "../assets/Twitter";

const SocialNavs = () => {
  return (
    <div className="socialNav">
      <button>
        <Twitter />
      </button>
      <button>
        <Instagram />
      </button>
      <button>
        <Facebook />
      </button>
      <button>
        <LinkedIn />
      </button>
    </div>
  );
};

export default SocialNavs;
