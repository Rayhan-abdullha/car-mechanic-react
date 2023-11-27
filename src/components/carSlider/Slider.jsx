import { useNavigate } from "react-router-dom";
import CarDetails from "./carDetails";
const Slider = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex flex-col sm:flex-row"
        >
          <div
            className="basis-[50%] cursor-pointer"
            onClick={() => navigate("/car_details/1")}
          >
            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <CarDetails />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex flex-col sm:flex-row"
        >
          <div
            className="basis-[50%] cursor-pointer"
            onClick={() => navigate("/car_details/1")}
          >
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <CarDetails />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full flex flex-col sm:flex-row"
        >
          <div
            className="basis-[50%] cursor-pointer"
            onClick={() => navigate("/car_details/1")}
          >
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <CarDetails />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full flex flex-col sm:flex-row"
        >
          <div
            className="basis-[50%] cursor-pointer"
            onClick={() => navigate("/car_details/1")}
          >
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <CarDetails />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
