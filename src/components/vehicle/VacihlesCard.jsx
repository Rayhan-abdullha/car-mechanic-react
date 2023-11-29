/* eslint-disable react/prop-types */
import { RxAvatar } from "react-icons/rx";
import { PiDoorOpenDuotone } from "react-icons/pi";
import { AiOutlineChrome } from "react-icons/ai";
import { BsFillBagDashFill } from "react-icons/bs";
import { RiSettings4Line } from "react-icons/ri";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const VacihlesCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white sm:flex sm:justify-between sm:items-center sm:gap-2 mb-10 p-5 lg:h-[400px]">
      <div className="car-img mb-5" onClick={() => navigate("/car_details/1")}>
        <img
          className="w-full object-cover"
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80"
          alt="notfound"
        />
      </div>
      <div className="car-info">
        <div className="flex flex-col md:flex-row md:justify-between mb-5">
          <div>
            <h3
              className="text-[25px] font-bold text-[#4c4c4c] cursor-pointer"
              onClick={() => navigate("/car_details/1")}
            >
              {item?.name}
            </h3>
            <p className="mb-5 text-[#595959]">CLASS: {item?.classes}</p>
          </div>

          <div className="selectButton">
            <h3 className="text-[#4c4c4c] font-bold text-[20px]">
              KWD {item?.price}
            </h3>
            <button className="bg-[#f8ac07] hover:bg-[#e7b607] py-2 px-5 text-white uppercase font-bold mt-2">
              Select Car
            </button>
          </div>
        </div>
        <div className="mb-5">
          <ul className="flex flex-wrap">
            <li className="flex gap-1 basis-[50%] mb-2">
              <RxAvatar className="text-[40px] text-[#A1A2A4] border border-[#A1A2A4] rounded-[30px] py-2" />
              <span className="mt-[10px] text-[#595959] font-medium">
                {item?.seat}
              </span>
            </li>
            <li className="flex gap-1 basis-[50%] mb-2">
              <PiDoorOpenDuotone className="text-[40px] text-[#A1A2A4] border border-[#A1A2A4] rounded-[30px] py-2" />
              <span className="mt-[10px] text-[#595959] font-medium">
                {item?.door}
              </span>
            </li>
            <li className="flex gap-1 basis-[50%] mb-2">
              <AiOutlineChrome className="text-[40px] text-[#A1A2A4] border border-[#A1A2A4] rounded-[30px] py-2" />
              <span className="mt-[10px] text-[#595959] font-medium">
                {item?.ac}
              </span>
            </li>
            <li className="flex gap-1 basis-[50%] mb-2">
              <BsFillBagDashFill className="text-[40px] text-[#A1A2A4] border border-[#A1A2A4] rounded-[30px] py-2" />
              <span className="mt-[10px] text-[#595959] font-medium">
                {item?.baggage}
              </span>
            </li>
            <li className="flex gap-1 basis-[50%] mb-2">
              <BsFillFuelPumpFill className="text-[40px] text-[#A1A2A4] border border-[#A1A2A4] rounded-[30px] py-2" />
              <span className="mt-[10px] text-[#595959] font-medium">
                {item?.fuel}
              </span>
            </li>
            <li className="flex gap-1 basis-[50%] mb-2">
              <RiSettings4Line className="text-[40px] text-[#A1A2A4] border border-[#A1A2A4] rounded-[30px] py-2" />
              <span className="mt-[10px] text-[#595959] font-medium">
                {item?.auto}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col xl:flex-row gap-3 justify-between">
          <div className="flex">
            <MdOutlineDone className="bg-[#80C143] rounded-[30px] py-1 text-[22px] text-white" />
            <span className="ml-1 font-semibold text-[#4a8712]">
              Amendement
            </span>
          </div>
          <div className="flex">
            <MdOutlineDone className="bg-[#80C143] rounded-[30px] py-1 text-[22px] text-white" />
            <span className="ml-1 font-semibold text-[#4a8712]">
              Theft Protection
            </span>
          </div>
          <div className="flex">
            <MdOutlineDone className="bg-[#80C143] rounded-[30px] py-1 text-[22px] text-white" />
            <span className="ml-1 font-semibold text-[#4a8712]">
              Collision Damage waiver
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacihlesCard;
