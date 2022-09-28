import left from "../assets/smallArrowLeft.svg";
import right from "../assets/smallArrowRight.svg";
import firstImg from "../assets/ourwork1.webp";
import secondImg from "../assets/ourwork2.webp";
import thirdImg from "../assets/ourwork3.webp";
import fourthImg from "../assets/ourwork4.webp";
import { useState } from "react";

const OurWork = () => {
  const images = [firstImg, secondImg, thirdImg, fourthImg];
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <section className="ourWorkSection">
      <div className="head">
        <h1>Our Work</h1>

        <div className="buttons">
          <button
            onClick={() =>
              setImgIdx((prev) => {
                if (prev === 0) {
                  return images.length - 1;
                } else {
                  return prev - 1;
                }
              })
            }
          >
            <img src={left} alt="prev" />
          </button>
          <button
            onClick={() =>
              setImgIdx((prev) => {
                if (prev === images.length - 1) {
                  return 0;
                } else {
                  return prev + 1;
                }
              })
            }
          >
            <img src={right} alt="next" />
          </button>
        </div>
      </div>

      <div className="images">
        <div
          className="cont"
          style={{ transform: `translateX(calc(-100 * ${imgIdx}%))` }}
        >
          {images.map((img) => (
            <img src={img} alt="" key={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
