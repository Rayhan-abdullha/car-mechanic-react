import logo from "../../assets/logo.png";
const CarDetails = () => {
  return (
    <div className="sm:basis-[50%] flex justify-center items-center text-center bg-[#E6E6E6]">
      <div className="car-content">
        <img className="w-[100px] m-auto" src={logo} alt="notfound" />
        <h3 className="text-[20px] text-black font-semibold mb-2">
          Bentley Bentayga
        </h3>
        <h4 className="text-[#333] font-semibold">3 Days: $3.347</h4>
        <h4 className="font-semibold text-green-500">24Hr Special: $24.33</h4>
        <button className="w-[120px] h-[40px] bg-green-500 text-white my-2 font-semibold text-[17px] rounded-[30px] hover:bg-green-600">
          Book Now
        </button>
        <p className="text-[#4a4a4a] mb-5">Refundable Security Deposit</p>
      </div>
    </div>
  );
};

export default CarDetails;
