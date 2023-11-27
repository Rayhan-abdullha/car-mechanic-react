import RentalRequirement from "../components/RentalRequirement/RentalRequirement";
import MainLayout from "./../layout/MainLayout";
import Slider from "../components/carSlider/Slider";
// import { useEffect, useState } from "react";
import GoogleMapLocation from "../components/googleMapLocation/GoogleMapLocation";
import ContactInfo from "./../components/contactForm/ContactInfo";
const Home = () => {
  // const [animationPosition, setAnimationPosition] = useState(0);
  const imageSrc =
    "https://images.unsplash.com/photo-1632685062337-095b722134ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = imageSrc;

  //   // Calculate the initial animation position
  //   const middle = (image.height - 500) / 2;
  //   setAnimationPosition(middle);

  //   // Update animation position every 2 seconds
  //   const interval = setInterval(() => {
  //     const nextPosition = (animationPosition + 1) % image.height;
  //     setAnimationPosition(nextPosition);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [imageSrc, animationPosition]);
  // console.log("render");
  return (
    <MainLayout>
      <main>
        <div
          className="h-[500px] w-full bg-cover bg-top"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundPositionY: `-${100}px`, // Adjusts background position
            transition: "background-position 1s ease-in-out", // Transition effect
          }}
        />
        <div className="car-section m-auto px-5 max-w-[1400px] my-[70px]">
          <Slider />
        </div>
        <RentalRequirement />
        <GoogleMapLocation />
        <ContactInfo />
      </main>
    </MainLayout>
  );
};

export default Home;
