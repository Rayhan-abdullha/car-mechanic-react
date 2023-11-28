import { useState, useEffect } from "react";
import { images } from "./../../data/data";
const IntroSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide w-full bg-cover ${
            index === currentImageIndex ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      <div className="welcome-tet absolute top-[30%] left-[30%] z-[999]">
        <h1 className="intro-text-animation">
          Welcome
          <div className="roller">
            <span id="rolltext">
              Drive The Extraordinary
              <br />
              Where Every Mile
              <br />
              is a Extra Luxury
              <br />
            </span>
            <br />
          </div>
        </h1>
      </div>
    </div>
  );
};

export default IntroSlider;
