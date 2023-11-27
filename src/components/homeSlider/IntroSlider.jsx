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
        >
          <div className="translate-y-[40%] lg:translate-y-2/4 w-[90%] lg:w-[60%] mx-auto lg:mx-0 text-white   h-full text-center">
            <h2 className="text-2xl font-medium">Drive the extraordinary:</h2>
            <p className="text-2xl mt-2">
              Where Every Mile is a symphony of Luxury
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroSlider;
