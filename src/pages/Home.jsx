import RentalRequirement from "../components/RentalRequirement/RentalRequirement";
import MainLayout from "./../layout/MainLayout";
import Slider from "../components/carSlider/Slider";
import GoogleMapLocation from "../components/googleMapLocation/GoogleMapLocation";
import ContactInfo from "./../components/contactForm/ContactInfo";
import IntroSlider from "../components/homeSlider/IntroSlider";
const Home = () => {
  return (
    <MainLayout>
      <main>
        <IntroSlider />
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
