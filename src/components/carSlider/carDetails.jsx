import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const CarDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:basis-[50%] flex justify-center items-center text-center bg-[#E6E6E6]">
      <div className="car-content">
        <img className="w-[100px] m-auto" src={logo} alt="notfound" />
        <h3 className="text-[20px] text-black font-semibold mb-2">
          Bentley Bentayga
        </h3>
        <h4 className="text-[#333] font-semibold">3 Days: $3.347</h4>
        <h4 className="font-semibold text-green-500">24Hr Special: $24.33</h4>
        <button
          onClick={() => navigate("/book-now")}
          className="w-[120px] h-[40px] bg-[#FCC500] text-white my-2 font-semibold text-[17px] rounded-[30px] hover:bg-[#e7b607]"
        >
          Book Now
        </button>
        <p className="text-[#4a4a4a] mb-5">Refundable Security Deposit</p>
      </div>
    </div>
  );
};

export default CarDetails;
