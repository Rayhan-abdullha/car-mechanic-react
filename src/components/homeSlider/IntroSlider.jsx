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
    </div>
  );
};

export default IntroSlider;
